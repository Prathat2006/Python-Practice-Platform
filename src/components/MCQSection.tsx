import React, { useState, useRef } from 'react';
import { mcqQuizzes, type MCQQuiz, type MCQProblem } from '../lib/mcqQuizzes';
import { parseMarkdownQuiz } from '../lib/mdParser';
import { Check, X, RefreshCcw, FileText, Target, Plus, Upload, Copy, Database, Trophy, Clock, Hash, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { analyticsService, type UserAnalytics } from '../lib/analyticsService';

export function MCQSection() {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<MCQQuiz | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, number | number[] | string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [customQuizzes, setCustomQuizzes] = useState<MCQQuiz[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [analytics, setAnalytics] = useState<UserAnalytics>(analyticsService.getAnalytics());
  const [customMd, setCustomMd] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subjects = [
    {
      id: 'ml',
      title: 'Machine Learning',
      description: 'Supervised, Unsupervised, and Ensemble learning techniques.',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      quizzes: [
        ...mcqQuizzes.filter(q => q.subjectId === 'ml'),
        ...customQuizzes.filter(q => q.subjectId === 'ml')
      ]
    },
    {
      id: 'db',
      title: 'Introduction to Database',
      description: 'Relational databases, SQL, normalization, and indexing.',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      quizzes: [
        ...mcqQuizzes.filter(q => q.subjectId === 'db'),
        ...customQuizzes.filter(q => q.subjectId === 'db')
      ]
    },
    {
      id: 'os',
      title: 'Operating Systems',
      description: 'Memory management, processes, CPU scheduling, and file systems.',
      icon: <Terminal className="w-8 h-8 text-green-400" />,
      quizzes: [
        ...mcqQuizzes.filter(q => q.subjectId === 'os'),
        ...customQuizzes.filter(q => q.subjectId === 'os')
      ]
    }
  ];

  const AI_PROMPT = `Please generate a machine learning or technical quiz in Markdown format. Use the following strict structure for each question:

### [Quiz Title]

**Question 1**
[The question text. If it's a multiple choice where multiple answers are correct, include "(Select all that apply)"]
* **A** [Option A]
* **B** [Option B]
* **C** [Option C]
* **D** [Option D]

**Answer:** [A/B/C/D or A, B for multiple choice. For numerical/text questions, provide the exact value]
**Explanation:** [Detailed explanation why the answer is correct]

**Question 2**
...`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT);
    alert('AI Prompt copied to clipboard!');
  };

  const handleAddQuiz = () => {
    try {
      if (!customMd.trim()) throw new Error("Please enter some Markdown content.");
      const quiz = parseMarkdownQuiz(`custom-${Date.now()}`, customMd);
      quiz.subjectId = selectedSubject || 'ml';
      setCustomQuizzes(prev => [quiz, ...prev]);
      setShowAddModal(false);
      setCustomMd('');
      setImportError(null);
    } catch (err) {
      setImportError(err instanceof Error ? err.message : "Failed to parse quiz. Check the format.");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setCustomMd(content);
      // Reset input value to allow selecting the same file again
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.onerror = () => {
      setImportError("Failed to read file.");
    };
    reader.readAsText(file);
  };

  // Randomise questions ensuring dataset-linked questions stay together
  const handleStartQuiz = (quiz: MCQQuiz) => {
    setActiveQuizId(quiz.id);
    
    // Disable shuffling for ML Quiz 1, Practice and 100+ Questions to maintain historical/dataset context order
    if (quiz.id === 'ml-quiz1-practice' || quiz.id === 'ml-quiz-1' || quiz.id === 'ml-100-questions' || quiz.id === 'ml-quiz2' || quiz.id === 'ml-week11' || quiz.id === 'db-lecture1-intro' || quiz.id === 'db-lecture1-intro-part2' || quiz.id === 'db-graded-quiz-1' || quiz.id === 'db-lecture3-4-5' || quiz.id === 'db-week2') {
      setCurrentQuiz({ ...quiz, questions: [...quiz.questions] });
    } else {
      const groups: MCQProblem[][] = [];
      let currentGroup: MCQProblem[] = [];
      let lastDataset: string | undefined = undefined;

      quiz.questions.forEach(q => {
        if (!q.dataset) {
          if (currentGroup.length > 0) groups.push(currentGroup);
          groups.push([q]);
          currentGroup = [];
          lastDataset = undefined;
        } else {
          if (lastDataset !== q.dataset) {
            if (currentGroup.length > 0) groups.push(currentGroup);
            currentGroup = [q];
            lastDataset = q.dataset;
          } else {
            currentGroup.push(q);
          }
        }
      });
      if (currentGroup.length > 0) groups.push(currentGroup);

      // Shuffle the top-level groups
      const shuffledGroups = [...groups].sort(() => Math.random() - 0.5);
      
      // Shuffle within each group (only if it's a multi-question set)
      const fullyShuffled = shuffledGroups.flatMap(group => {
        if (group.length > 1) {
          return [...group].sort(() => Math.random() - 0.5);
        }
        return group;
      });

      setCurrentQuiz({ ...quiz, questions: fullyShuffled });
    }

    setAnswers({});
    setSubmitted(false);
    setShowSchema(quiz.subjectId === 'db');
  };

  const handleSelectOption = (qIndex: number, oIndex: number, isMultiple: boolean) => {
    if (submitted) return;
    
    setAnswers(prev => {
      const current = prev[qIndex];
      
      if (isMultiple) {
        let newSelection: number[];
        if (Array.isArray(current)) {
          newSelection = current.includes(oIndex) 
            ? current.filter(i => i !== oIndex) 
            : [...current, oIndex].sort();
        } else {
          newSelection = [oIndex];
        }
        return { ...prev, [qIndex]: newSelection };
      } else {
        return { ...prev, [qIndex]: oIndex };
      }
    });
  };

  const handleTextAnswer = (qIndex: number, text: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: text }));
  };

  const isCorrect = (qIndex: number) => {
    const q = currentQuiz?.questions[qIndex];
    if (!q) return false;
    
    const answered = answers[qIndex];

    if (q.type === 'text') {
      if (typeof answered !== 'string') return false;
      const expected = q.correctText?.toLowerCase().trim() || "";
      const actual = (answered as string).toLowerCase().trim();
      
      // Handle numeric rounding if both are numbers
      const expectedNum = parseFloat(expected);
      const actualNum = parseFloat(actual);
      if (!isNaN(expectedNum) && !isNaN(actualNum)) {
        return Math.abs(expectedNum - actualNum) < 0.005; // 2-3 digit tolerance
      }
      
      return expected === actual;
    }

    const correct = q.correctOptionIndex;
    if (Array.isArray(correct)) {
      if (!Array.isArray(answered)) return false;
      return (correct as number[]).length === (answered as number[]).length && (correct as number[]).every(val => (answered as number[]).includes(val));
    }
    
    return correct === answered;
  };

  const score = currentQuiz?.questions.reduce((acc, _, i) => acc + (isCorrect(i) ? 1 : 0), 0) || 0;
  const total = currentQuiz?.questions.length || 0;

  const handleSubmit = () => {
    setSubmitted(true);
    if (currentQuiz) {
      analyticsService.saveAttempt(currentQuiz.id, score, total);
      setAnalytics(analyticsService.getAnalytics());
    }
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  const handleBackToQuizzes = () => {
    setActiveQuizId(null);
    setCurrentQuiz(null);
    setAnswers({});
    setSubmitted(false);
  };

  const handleRetry = () => {
    // Re-shuffle on retry
    if (currentQuiz) {
      const originalQuiz = [...mcqQuizzes, ...customQuizzes].find(q => q.id === activeQuizId);
      if (originalQuiz) {
        const shuffled = [...originalQuiz.questions].sort(() => Math.random() - 0.5);
        setCurrentQuiz({ ...originalQuiz, questions: shuffled });
      }
    }
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0f14] overflow-hidden flex-1 relative">
      {!currentQuiz ? (
        <div className="flex-1 flex flex-col items-center p-8 bg-[#0d0f14] overflow-y-auto w-full">
          <h1 className="text-2xl font-bold text-gray-100 mb-2">Practice Quizzes</h1>
          <p className="text-sm text-gray-500 mb-8 max-w-lg text-center">
            Test your knowledge with multiple-choice questions based on various topics. 
            Select a subject to explore available quizzes.
          </p>

          <div className="w-full max-w-4xl">
            {!selectedSubject ? (
              // Subjects Grid
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map((subject) => (
                  <div 
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className="bg-[#11141b] border border-gray-800 hover:border-blue-500/50 hover:bg-[#1a1d23] rounded-2xl p-8 cursor-pointer transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      {subject.icon}
                    </div>
                    <div className="mb-6 inline-flex p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{subject.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{subject.description}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                      Explore {subject.quizzes.length} Quizzes <span className="text-sm">→</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Quiz List for Selected Subject
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleBackToSubjects}
                    className="group flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Subjects
                  </button>
                  <div className="h-4 w-px bg-gray-800" />
                  <span className="text-sm font-medium text-gray-400">
                    {subjects.find(s => s.id === selectedSubject)?.title}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setShowAddModal(true)}
                    className="bg-[#11141b] border-2 border-dashed border-gray-800 hover:border-blue-500/50 hover:bg-[#1a1d23] rounded-xl p-6 cursor-pointer transition-all flex flex-col items-center justify-center gap-4 text-center group min-h-[140px]"
                  >
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                      <Plus className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200">Add Custom Quiz</h3>
                      <p className="text-xs text-gray-500">Upload .md or paste Markdown</p>
                    </div>
                  </div>

                  {subjects.find(s => s.id === selectedSubject)?.quizzes.map((quiz) => {
                    const stats = analytics.quizzes[quiz.id];
                    return (
                      <div 
                        key={quiz.id}
                        onClick={() => handleStartQuiz(quiz)}
                        className="bg-[#11141b] border border-gray-800 hover:border-blue-500/50 hover:bg-[#1a1d23] rounded-xl p-6 cursor-pointer transition-all group flex flex-col gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-200 mb-1 truncate">{quiz.title}</h3>
                            <p className="text-xs text-gray-500">{quiz.questions.length} questions</p>
                          </div>
                        </div>
                        
                        {stats && (
                          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-800/50">
                            <div className="flex flex-col gap-1">
                              <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                                <Hash className="w-3 h-3" /> Attempts
                              </span>
                              <span className="text-sm font-bold text-gray-300">{stats.attemptsCount}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                                <Trophy className="w-3 h-3" /> Last Score
                              </span>
                              <span className={cn(
                                "text-sm font-bold",
                                stats.lastScore > stats.lastTotal / 2 ? "text-green-400" : "text-yellow-400"
                              )}>
                                {stats.lastScore}/{stats.lastTotal}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                                <Clock className="w-3 h-3" /> Last Taken
                              </span>
                              <span className="text-xs font-medium text-gray-400 truncate">
                                {new Date(stats.lastAttemptDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-gray-800 bg-[#11141b]">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToQuizzes}
                className="text-xs font-semibold text-gray-500 hover:text-white transition-colors"
              >
                ← BACK TO QUIZZES
              </button>
              <div className="w-px h-4 bg-gray-800"></div>
              <h2 className="text-base font-semibold text-gray-200">{currentQuiz.title}</h2>
            </div>
            <div className="flex items-center gap-4">
              {currentQuiz.subjectId === 'db' && (
                <button 
                  onClick={() => setShowSchema(!showSchema)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold transition-all",
                    showSchema ? "bg-purple-500 text-white" : "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                  )}
                >
                  <Database className="w-3 h-3" /> SCHEMA REF
                </button>
              )}
              {submitted && (
                <div className="flex items-center gap-4">
                <span className="text-base font-medium">
                  Score: <span className={cn("font-bold", score > total / 2 ? "text-green-400" : "text-yellow-400")}>{score}/{total}</span>
                </span>
                <button 
                  onClick={handleRetry}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-semibold transition-colors"
                >
                  <RefreshCcw className="w-3 h-3" /> RETRY
                </button>
              </div>
            )}
          </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="max-w-3xl mx-auto space-y-8 pb-32 relative">
              {showSchema && currentQuiz.subjectId === 'db' && (
                <div className="sticky top-0 z-20 mb-8 p-4 bg-[#1a1f29] border border-purple-500/30 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                      <Database className="w-3 h-3" /> Database Schema Reference
                    </h3>
                    <button onClick={() => setShowSchema(false)} className="text-gray-500 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">movies</span>
                      <div className="text-[10px] font-mono text-gray-500 bg-black/30 p-2 rounded border border-gray-800">
                        id, title, genre, release_year, imdb_rating, duration_mins
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">users</span>
                      <div className="text-[10px] font-mono text-gray-500 bg-black/30 p-2 rounded border border-gray-800">
                        id, username, subscription_tier, signup_date
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">watch_history</span>
                      <div className="text-[10px] font-mono text-gray-500 bg-black/30 p-2 rounded border border-gray-800">
                        watch_id, user_id, movie_id, completion_pct, watch_date
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {currentQuiz.questions.map((q, qIndex) => {
                const hasAnswered = answers[qIndex] !== undefined && (Array.isArray(answers[qIndex]) ? (answers[qIndex] as number[]).length > 0 : true);
                const correct = submitted ? isCorrect(qIndex) : false;
                
                // Check if we should show the dataset (first in a group)
                const prevQ = currentQuiz.questions[qIndex - 1];
                const showDataset = q.dataset && (!prevQ || prevQ.dataset !== q.dataset);

                return (
                  <div 
                    key={qIndex} 
                    className={cn(
                      "p-6 rounded-xl border bg-[#11141b] transition-colors",
                      submitted 
                        ? correct ? "border-green-500/30" : "border-red-500/30"
                        : hasAnswered ? "border-blue-500/30" : "border-gray-800"
                    )}
                  >
                    {showDataset && (
                      <div className="mb-6 p-6 bg-[#0d0f14] border border-gray-800 rounded-lg overflow-x-auto text-sm animate-in fade-in zoom-in-95 duration-500">
                        <div className="flex items-center gap-2 mb-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest border-b border-gray-800 pb-2">
                          <Database className="w-3 h-3" /> Dataset / Context for following questions
                        </div>
                        <div className="markdown-body prose prose-invert max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.dataset!}</ReactMarkdown>
                        </div>
                      </div>
                    )}
                    <div className="text-lg text-gray-200 leading-relaxed font-semibold mb-6 whitespace-pre-wrap flex items-start gap-4">
                      <span className="text-gray-500 font-bold">{qIndex + 1}.</span>
                      <div className="flex-1">
                        <div className="markdown-body prose prose-invert max-w-none prose-p:my-0">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown>
                        </div>
                        <div className="flex gap-2 mt-2">
                          {q.isMultipleChoice && !submitted && (
                            <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Multiple Choice</span>
                          )}
                          {q.type === 'text' && !submitted && (
                            <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Text Entry</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {q.type === 'text' ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          className={cn(
                            "w-full bg-[#161a22] border border-gray-800 rounded-lg p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-gray-200 transition-all",
                            submitted && (isCorrect(qIndex) ? "border-green-500/50" : "border-red-500/50")
                          )}
                          placeholder="Type your answer here..."
                          value={typeof answers[qIndex] === 'string' ? (answers[qIndex] as string) : ""}
                          onChange={(e) => handleTextAnswer(qIndex, e.target.value)}
                          disabled={submitted}
                        />
                        {submitted && (
                          <div className={cn(
                            "flex items-center gap-3 p-4 rounded-lg text-base border",
                            isCorrect(qIndex) ? "bg-green-500/5 border-green-500/20 text-green-400" : "bg-red-500/5 border-red-500/20 text-red-400"
                          )}>
                            <span className="text-gray-400">Correct Answer:</span>
                            <span className="font-bold">{q.correctText}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {q.options.map((opt, oIndex) => {
                          const ans = answers[qIndex];
                          const isSelected = Array.isArray(ans) ? ans.includes(oIndex) : ans === oIndex;
                          const isOptionCorrect = Array.isArray(q.correctOptionIndex) 
                            ? (q.correctOptionIndex as number[]).includes(oIndex) 
                            : q.correctOptionIndex === oIndex;
                          
                          let bgClass = "bg-[#161a22] border-gray-800 hover:bg-[#1a1f29]";
                          let icon = null;
                          
                          if (submitted) {
                            if (isOptionCorrect) {
                              bgClass = "bg-green-500/10 border-green-500/50 text-green-200";
                              icon = <Check className="w-4 h-4 text-green-400 ml-auto shrink-0" />;
                            } else if (isSelected && !isOptionCorrect) {
                              bgClass = "bg-red-500/10 border-red-500/50 text-red-200";
                              icon = <X className="w-4 h-4 text-red-400 ml-auto shrink-0" />;
                            } else {
                              bgClass = "bg-[#161a22] border-gray-800 opacity-50";
                            }
                          } else if (isSelected) {
                            bgClass = "bg-blue-500/20 border-blue-500/50 text-blue-200";
                            icon = <Target className="w-4 h-4 text-blue-400 ml-auto shrink-0" />;
                          }

                          return (
                            <button
                              key={oIndex}
                              onClick={() => handleSelectOption(qIndex, oIndex, !!q.isMultipleChoice)}
                              disabled={submitted}
                              className={cn(
                                "w-full flex items-center text-left p-4 rounded-lg border text-base transition-all",
                                bgClass,
                                !submitted && "cursor-pointer"
                              )}
                            >
                              <span className="w-10 shrink-0 text-gray-500 font-mono text-sm">
                                {String.fromCharCode(65 + oIndex)}.
                              </span>
                              <span className="flex-1 markdown-body prose prose-invert max-w-none prose-p:my-0">
                                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown>
                              </span>
                              {icon}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {submitted && q.explanation && (
                      <div className={cn(
                        "mt-6 p-5 rounded-lg text-sm leading-relaxed border",
                        correct ? "bg-green-500/5 border-green-500/20 text-green-100/80" : "bg-red-500/5 border-red-500/20 text-red-100/80"
                      )}>
                        <span className="font-semibold text-base mb-3 block underline decoration-current/30 underline-offset-4">Explanation:</span>
                        <div className="markdown-body prose prose-invert max-w-none prose-p:my-0">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.explanation}</ReactMarkdown>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {!submitted && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14] to-transparent flex justify-center pb-8 border-t border-gray-800/50">
              <div className="bg-[#11141b] rounded-full px-6 py-3 flex items-center gap-6 border border-gray-800 shadow-2xl">
                <span className="text-sm font-medium text-gray-400">
                  Answered <span className="text-white">{Object.keys(answers).length}</span> of {total}
                </span>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2 rounded-full transition-colors"
                >
                  SUBMIT QUIZ
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#11141b] border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-100">Add New Quiz</h2>
                <p className="text-xs text-gray-500 mt-1">Paste Markdown or upload a .md file</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl transition-colors text-sm font-medium border border-gray-700"
                >
                  <Upload className="w-4 h-4" /> Upload .md File
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept=".md,text/markdown,text/plain" 
                  onChange={handleFileUpload} 
                />
                <button
                  onClick={handleCopyPrompt}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 rounded-xl transition-colors text-sm font-medium"
                >
                  <Copy className="w-4 h-4" /> Get AI Prompt
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Markdown Content</label>
                <textarea
                  value={customMd}
                  onChange={(e) => setCustomMd(e.target.value)}
                  placeholder="Paste your quiz markdown here..."
                  className="w-full h-64 bg-[#0d0f14] border border-gray-800 rounded-xl p-4 text-sm font-mono text-gray-300 focus:outline-none focus:border-blue-500/50 resize-none"
                />
                {importError && (
                  <p className="text-xs text-red-400 font-medium">{importError}</p>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddQuiz}
                className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Create Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
