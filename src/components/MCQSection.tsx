import React, { useState, useRef, useEffect } from 'react';
import { mcqQuizzes, type MCQQuiz, type MCQProblem } from '../lib/mcqQuizzes';
import { parseMarkdownQuiz } from '../lib/mdParser';
import { 
  Check, X, RefreshCcw, FileText, Target, Plus, Upload, Copy, 
  Database, Trophy, Clock, Hash, Terminal, Sparkles, BookOpen, 
  Award, TrendingUp, ChevronRight, HelpCircle, Eye, Info, CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { analyticsService, type UserAnalytics } from '../lib/analyticsService';
import { motion, AnimatePresence } from 'motion/react';

export function MCQSection() {
  // Load activeQuizId initially from URL search parameter
  const [activeQuizId, setActiveQuizId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get('mode');
    if (m === 'mcq') {
      return params.get('quiz');
    }
    return null;
  });

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
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Synchronize on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const m = params.get('mode');
      if (m === 'mcq') {
        const quiz = params.get('quiz');
        if (quiz !== activeQuizId) {
          setActiveQuizId(quiz);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeQuizId]);

  // Synchronize activeQuizId changes to the URL parameter 'quiz'
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get('mode');
    if (m === 'mcq') {
      const existingQuizId = params.get('quiz');
      if (existingQuizId !== activeQuizId) {
        const url = new URL(window.location.href);
        if (activeQuizId) {
          url.searchParams.set('quiz', activeQuizId);
        } else {
          url.searchParams.delete('quiz');
        }
        window.history.pushState({}, '', url.toString());
      }
    }
  }, [activeQuizId]);

  // Synchronize currentQuiz whenever activeQuizId changes
  useEffect(() => {
    if (activeQuizId) {
      const quiz = [...mcqQuizzes, ...customQuizzes].find(q => q.id === activeQuizId);
      if (quiz) {
        if (quiz.subjectId) {
          setSelectedSubject(quiz.subjectId);
        }
        if (currentQuiz && currentQuiz.id === activeQuizId) {
          return;
        }

        if (quiz.id === 'ml-quiz1-practice' || quiz.id === 'ml-quiz-1' || quiz.id === 'ml-100-questions' || quiz.id === 'ml-quiz2' || quiz.id === 'ml-week11' || quiz.id === 'db-lecture1-intro' || quiz.id === 'db-lecture1-intro-part2' || quiz.id === 'db-graded-quiz-1' || quiz.id === 'db-lecture3-4-5' || quiz.id === 'db-week2' || quiz.id === 'db-week6' || quiz.id === 'db-week6-part2' || quiz.id === 'db-week7' || quiz.id === 'db-lecture6-hashing' || quiz.id === 'db-lecture6-hashing-hard-iitj' || quiz.id === 'db-lecture7-transactions-concurrency' || quiz.id === 'db-week8-serializability' || quiz.id === 'db-week9-locking' || quiz.id === 'db-week10-concurrency' || quiz.id === 'db-week11-recovery') {
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

          const shuffledGroups = [...groups].sort(() => Math.random() - 0.5);
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
      }
    } else {
      setCurrentQuiz(null);
      setAnswers({});
      setSubmitted(false);
    }
  }, [activeQuizId, customQuizzes]);

  const subjects = [
    {
      id: 'ml',
      title: 'Machine Learning',
      description: 'Supervised, Unsupervised, and Ensemble learning techniques.',
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      color: "indigo",
      themeClass: "from-indigo-600/10 to-transparent border-indigo-500/20 hover:border-indigo-500/40 glow-indigo",
      quizzes: [
        ...mcqQuizzes.filter(q => q.subjectId === 'ml'),
        ...customQuizzes.filter(q => q.subjectId === 'ml')
      ]
    },
    {
      id: 'db',
      title: 'Introduction to Database',
      description: 'Relational databases, SQL, normalization, and indexing.',
      icon: <Database className="w-6 h-6 text-purple-400" />,
      color: "purple",
      themeClass: "from-purple-600/10 to-transparent border-purple-500/20 hover:border-purple-500/40 glow-purple",
      quizzes: [
        ...mcqQuizzes.filter(q => q.subjectId === 'db'),
        ...customQuizzes.filter(q => q.subjectId === 'db')
      ]
    },
    {
      id: 'os',
      title: 'Operating Systems',
      description: 'Memory management, processes, CPU scheduling, and file systems.',
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      color: "emerald",
      themeClass: "from-emerald-600/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40 glow-emerald",
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
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.onerror = () => {
      setImportError("Failed to read file.");
    };
    reader.readAsText(file);
  };

  const handleStartQuiz = (quiz: MCQQuiz) => {
    setActiveQuizId(quiz.id);
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
      
      const expectedNum = parseFloat(expected);
      const actualNum = parseFloat(actual);
      if (!isNaN(expectedNum) && !isNaN(actualNum)) {
        return Math.abs(expectedNum - actualNum) < 0.005;
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

  const scrollToQuestion = (idx: number) => {
    const el = questionRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Compute aggregate stats for beautiful welcome dashboard
  const aggregateStats = React.useMemo(() => {
    let totalAttempts = 0;
    let completedQuizzes = 0;
    let totalScoreObtained = 0;
    let totalPossibleScore = 0;

    Object.values(analytics.quizzes).forEach(quizStats => {
      totalAttempts += quizStats.attemptsCount;
      if (quizStats.attemptsCount > 0) {
        completedQuizzes++;
        totalScoreObtained += quizStats.lastScore;
        totalPossibleScore += quizStats.lastTotal;
      }
    });

    const accuracy = totalPossibleScore > 0 ? Math.round((totalScoreObtained / totalPossibleScore) * 100) : 0;

    return {
      totalAttempts,
      completedQuizzes,
      accuracy
    };
  }, [analytics]);

  return (
    <div className="flex flex-col h-full bg-[#08090d] overflow-hidden flex-1 relative font-sans">
      {!currentQuiz ? (
        <div className="flex-1 flex flex-col items-center p-6 sm:p-10 overflow-y-auto w-full custom-scrollbar">
          
          {/* Welcome and Global Dashboard Banner */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mb-10 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/60"
          >
            <div>
              <h1 className="text-3.5xl font-bold font-display text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5">
                Practice Sandbox <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400/10 animate-pulse" />
              </h1>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Master complex theoretical constructs across machine learning core parameters, database indices, and system kernel parameters.
              </p>
            </div>
            
            {/* Quick Stats Bento widget */}
            <div className="grid grid-cols-3 gap-3 bg-[#0d1017]/90 p-4 rounded-xl border border-slate-800/75 shadow-lg backdrop-blur shrink-0 min-w-[320px]">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800/40">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-indigo-400" /> Done
                </span>
                <span className="text-lg font-bold text-slate-100 mt-1">{aggregateStats.completedQuizzes}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800/40">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Hash className="w-3 h-3 text-purple-400" /> Tries
                </span>
                <span className="text-lg font-bold text-slate-100 mt-1">{aggregateStats.totalAttempts}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800/40">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" /> Acc%
                </span>
                <span className="text-lg font-bold text-emerald-400 mt-1">{aggregateStats.accuracy}%</span>
              </div>
            </div>
          </motion.div>

          {/* Core Content Layout */}
          <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait">
              {!selectedSubject ? (
                // Subjects Grid
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {subjects.map((subject) => {
                    const practicedCount = subject.quizzes.filter(q => analytics.quizzes[q.id]?.attemptsCount > 0).length;
                    return (
                      <div 
                        key={subject.id}
                        onClick={() => setSelectedSubject(subject.id)}
                        className={cn(
                          "bg-[#0e111a] border rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-72 shadow-xl",
                          subject.themeClass
                        )}
                      >
                        {/* Soft glowing absolute background layer */}
                        <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-current opacity-[0.02] filter blur-xl group-hover:opacity-[0.06] transition-opacity duration-300" />
                        
                        <div>
                          <div className={cn(
                            "mb-5 inline-flex p-3 rounded-xl transition-all duration-300 group-hover:scale-110",
                            subject.id === 'ml' ? "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20" :
                            subject.id === 'db' ? "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20" :
                            "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20"
                          )}>
                            {subject.icon}
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-100 font-display tracking-tight group-hover:text-white mb-2">
                            {subject.title}
                          </h3>
                          <p className="text-xs text-slate-400 leading-relaxed max-h-16 overflow-hidden">
                            {subject.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">AVAILABLE</span>
                            <span className="text-sm font-bold text-slate-300">
                              {subject.quizzes.length} Quizzes <span className="text-xs text-slate-500 font-normal">({practicedCount} done)</span>
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-[#151926] group-hover:border-slate-700 transition-colors">
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-100 transition-colors" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                // Inside Subject Quiz Catalog
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Category Header Back breadcrumb */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/30 p-4 rounded-xl border border-slate-800/60 shadow-inner">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={handleBackToSubjects}
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-[#11141b] hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                        title="Back to Subjects"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">SUBJECT PATHWAY</div>
                        <h2 className="text-lg font-bold text-slate-100 font-display tracking-tight">
                          {subjects.find(s => s.id === selectedSubject)?.title}
                        </h2>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowAddModal(true)}
                      className="inline-flex items-center gap-2 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 hover:border-indigo-500/40 px-4 py-2 rounded-lg text-xs font-bold transition-all"
                    >
                      <Plus className="w-4 h-4" /> ADD CUSTOM EXAM
                    </button>
                  </div>

                  {/* Quizzes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjects.find(s => s.id === selectedSubject)?.quizzes.map((quiz) => {
                      const stats = analytics.quizzes[quiz.id];
                      return (
                        <div 
                          key={quiz.id}
                          onClick={() => handleStartQuiz(quiz)}
                          className="bg-[#0c0e15] border border-slate-800 hover:border-indigo-500/30 hover:bg-[#121520] rounded-xl p-5 cursor-pointer transition-all duration-200 group flex flex-col justify-between shadow-md"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors mb-0.5 truncate font-display tracking-tight">
                                {quiz.title}
                              </h3>
                              <p className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5 text-slate-600" /> {quiz.questions.length} Concepts mapped
                              </p>
                            </div>
                          </div>
                          
                          {/* Attempt logs panel representation */}
                          {stats ? (
                            <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[#080a10]/60 border border-slate-900/80">
                              <div className="flex flex-col">
                                <span className="text-[9px] text-slate-500 font-bold uppercase">Attempts</span>
                                <span className="text-xs font-bold text-slate-300 font-mono">{stats.attemptsCount}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[9px] text-slate-500 font-bold uppercase">Last Score</span>
                                <span className={cn(
                                  "text-xs font-bold font-mono",
                                  stats.lastScore > stats.lastTotal / 2 ? "text-emerald-400" : "text-amber-400"
                                )}>
                                  {stats.lastScore}/{stats.lastTotal}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[9px] text-slate-500 font-bold uppercase">Last Taken</span>
                                <span className="text-[10px] font-medium text-slate-400 truncate">
                                  {new Date(stats.lastAttemptDate).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="text-[10px] text-slate-500 italic py-2">
                              Not attempted yet. Choose to start exploring this concept path.
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        // ******************* ACTIVE EXAM UI *******************
        <div className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Header Bar */}
          <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-slate-800 bg-[#0d1017]/95 shadow-md">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToQuizzes}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800"
              >
                ← EXIT
              </button>
              <div className="w-px h-4 bg-slate-800" />
              <h2 className="text-sm font-bold text-slate-200 font-display tracking-tight leading-none max-w-sm truncate">
                {currentQuiz.title}
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              {currentQuiz.subjectId === 'db' && (
                <button 
                  onClick={() => setShowSchema(!showSchema)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
                    showSchema 
                      ? "bg-purple-600 border-purple-500 text-white shadow-lg" 
                      : "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                  )}
                >
                  <Database className="w-3.5 h-3.5" /> SCHEMA REF
                </button>
              )}
              {submitted && (
                <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 py-1 px-3 rounded-lg">
                  <span className="text-xs font-medium text-slate-400">
                    Grade: <span className={cn("font-bold font-mono text-sm", score > total / 2 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold")}>{score}/{total}</span>
                  </span>
                  <button 
                    onClick={handleRetry}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold py-1 px-2.5 rounded transition-colors"
                  >
                    <RefreshCcw className="w-3 h-3" /> RETRY
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Master Split View layout with Collapsible Nav sidebar map */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* Sidebar Question Selector Card Map */}
            <div className="w-64 border-r border-slate-800/70 bg-[#090b10] flex flex-col p-4 shrink-0 hidden md:flex shrink-0">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 block">Question Navigator</span>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 pb-4">
                <div className="grid grid-cols-4 gap-2">
                  {currentQuiz.questions.map((_, idx) => {
                    const hasAns = answers[idx] !== undefined && (Array.isArray(answers[idx]) ? (answers[idx] as number[]).length > 0 : true);
                    const isCorrectAns = submitted ? isCorrect(idx) : false;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToQuestion(idx)}
                        className={cn(
                          "h-10 rounded-lg flex flex-col items-center justify-center text-xs font-bold transition-all font-mono border",
                          submitted
                            ? isCorrectAns 
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" 
                              : "bg-red-500/10 border-red-500 text-red-400"
                            : hasAns
                              ? "bg-indigo-500/20 border-indigo-500 text-indigo-300"
                              : "bg-slate-900/60 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300"
                        )}
                      >
                        {idx + 1}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Progress counter footer of Sidebar */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
                  <span>PROGRESS STATUS</span>
                  <span>{Object.keys(answers).length} of {total} filled</span>
                </div>
                <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-300"
                    style={{ width: `${(Object.keys(answers).length / total) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Questions Scroller Panel */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8 pb-32 relative">
                
                {/* Embedded Schema View if toggled */}
                {showSchema && currentQuiz.subjectId === 'db' && (
                  <div className="sticky top-0 z-20 mb-6 p-4 bg-[#11141b] border-2 border-purple-500/20 rounded-xl shadow-2xl backdrop-blur-md glow-purple">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                        <Database className="w-3.5 h-3.5" /> Database Relational Schema Overview
                      </h3>
                      <button onClick={() => setShowSchema(false)} className="text-slate-500 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">movies</span>
                        <div className="text-[10px] font-mono text-slate-400 bg-slate-950/80 p-2 rounded border border-slate-800 leading-tight">
                          id, title, genre, release_year, imdb_rating, duration_mins
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">users</span>
                        <div className="text-[10px] font-mono text-slate-400 bg-slate-950/80 p-2 rounded border border-slate-800 leading-tight">
                          id, username, subscription_tier, signup_date
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">watch_history</span>
                        <div className="text-[10px] font-mono text-slate-400 bg-slate-950/80 p-2 rounded border border-slate-800 leading-tight">
                          watch_id, user_id, movie_id, completion_pct, watch_date
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Question List Map */}
                {currentQuiz.questions.map((q, qIndex) => {
                  const hasAnswered = answers[qIndex] !== undefined && (Array.isArray(answers[qIndex]) ? (answers[qIndex] as number[]).length > 0 : true);
                  const correct = submitted ? isCorrect(qIndex) : false;
                  const prevQ = currentQuiz.questions[qIndex - 1];
                  const showDataset = q.dataset && (!prevQ || prevQ.dataset !== q.dataset);

                  return (
                    <div 
                      key={qIndex}
                      id={`q-${qIndex}`}
                      ref={el => { questionRefs.current[qIndex] = el; }}
                      className={cn(
                        "p-6 rounded-2xl border transition-all duration-300 relative",
                        submitted 
                          ? correct 
                            ? "bg-emerald-950/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.03)]" 
                            : "bg-red-950/10 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.03)]"
                          : hasAnswered 
                            ? "bg-[#0b0e15] border-indigo-500/25" 
                            : "bg-[#0b0e15] border-slate-800/80"
                      )}
                    >
                      {/* Dataset Box Header if there is linked data context */}
                      {showDataset && (
                        <div className="mb-5 p-5 bg-[#08090d] border border-slate-800/90 rounded-xl overflow-x-auto text-[11px]">
                          <div className="flex items-center gap-1.5 mb-3 text-slate-500 text-[9px] font-bold uppercase tracking-widest border-b border-slate-800/60 pb-2">
                            <Database className="w-3.5 h-3.5 text-indigo-400" /> Linked Exam Scenario Context
                          </div>
                          <div className="markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.dataset!}</ReactMarkdown>
                          </div>
                        </div>
                      )}

                      {/* Question Header Grid */}
                      <div className="text-base text-slate-100 font-display leading-relaxed font-semibold mb-6 flex items-start gap-3">
                        <span className="text-slate-500 font-mono font-bold text-sm bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md self-start">
                          #{qIndex + 1}
                        </span>
                        
                        <div className="flex-1 pr-2">
                          <div className="markdown-body text-slate-100 font-medium">
                            <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown>
                          </div>
                          
                          {/* MCQ Choice Type Chips */}
                          <div className="flex gap-2 mt-3.5">
                            {q.isMultipleChoice && !submitted && (
                              <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 uppercase font-bold tracking-wider">
                                Choose Multiple Answers
                              </span>
                            )}
                            {q.type === 'text' && !submitted && (
                              <span className="text-[9px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20 uppercase font-bold tracking-wider">
                                Direct Fill in Blank
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Answer Entry Block */}
                      {q.type === 'text' ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            className={cn(
                              "w-full bg-[#08090d] border border-slate-800 text-sm rounded-xl p-4 focus:ring-2 focus:ring-indigo-500/20 text-slate-200 transition-all shadow-inner placeholder-slate-600 font-mono",
                              submitted && (isCorrect(qIndex) ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-300" : "border-red-500/40 bg-red-500/5 text-red-300")
                            )}
                            placeholder="Type numerical value or exact string match..."
                            value={typeof answers[qIndex] === 'string' ? (answers[qIndex] as string) : ""}
                            onChange={(e) => handleTextAnswer(qIndex, e.target.value)}
                            disabled={submitted}
                          />
                          
                          {submitted && (
                            <div className={cn(
                              "flex items-center gap-3 p-4 rounded-xl text-xs border font-mono",
                              isCorrect(qIndex) ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300" : "bg-red-500/5 border-red-500/20 text-red-300"
                            )}>
                              <span className="text-slate-500 font-bold">EXPLICIT ANSWER EXPECTED:</span>
                              <span className="font-bold underline decoration-indigo-400">{q.correctText}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Standard Selection list (Single / MSQ)
                        <div className="space-y-2.5">
                          {q.options.map((opt, oIndex) => {
                            const ans = answers[qIndex];
                            const isSelected = Array.isArray(ans) ? ans.includes(oIndex) : ans === oIndex;
                            const isOptionCorrect = Array.isArray(q.correctOptionIndex) 
                              ? (q.correctOptionIndex as number[]).includes(oIndex) 
                              : q.correctOptionIndex === oIndex;
                            
                            let bgClass = "bg-[#080a10]/60 border-slate-800 hover:bg-[#11141c] hover:border-slate-700 text-slate-300";
                            let icon = null;
                            let badge = null;
                            
                            if (submitted) {
                              if (isSelected && isOptionCorrect) {
                                bgClass = "bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-medium";
                                icon = <Check className="w-4 h-4 text-emerald-400 shrink-0" />;
                                badge = (
                                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-bold px-2 py-0.5 rounded font-display uppercase tracking-wider">
                                    Your Choice • Correct
                                  </span>
                                );
                              } else if (isSelected && !isOptionCorrect) {
                                bgClass = "bg-red-500/10 border-red-500/50 text-red-300";
                                icon = <X className="w-4 h-4 text-red-400 shrink-0" />;
                                badge = (
                                  <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[9px] font-bold px-2 py-0.5 rounded font-display uppercase tracking-wider">
                                    Your Choice • Incorrect
                                  </span>
                                );
                              } else if (!isSelected && isOptionCorrect) {
                                bgClass = "bg-amber-500/5 border-amber-500/40 text-amber-200";
                                icon = <Check className="w-4 h-4 text-amber-400 shrink-0 opacity-80" />;
                                badge = (
                                  <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] font-bold px-2 py-0.5 rounded font-display uppercase tracking-wider">
                                    Correct Option • Missed
                                  </span>
                                );
                              } else {
                                bgClass = "bg-slate-900/20 border-slate-900 text-slate-600 opacity-40";
                                icon = null;
                                badge = null;
                              }
                            } else if (isSelected) {
                              bgClass = "bg-indigo-600/15 border-indigo-500/60 text-indigo-200 shadow-md";
                              icon = <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5 text-slate-100" /></div>;
                            }

                            return (
                              <button
                                key={oIndex}
                                onClick={() => handleSelectOption(qIndex, oIndex, !!q.isMultipleChoice)}
                                disabled={submitted}
                                className={cn(
                                  "w-full flex items-center text-left p-3.5 rounded-lg border text-sm transition-all duration-150 gap-3",
                                  bgClass,
                                  !submitted && "cursor-pointer"
                                )}
                              >
                                <span className="w-6 shrink-0 text-slate-500 font-mono font-bold text-xs select-none">
                                  {String.fromCharCode(65 + oIndex)}.
                                </span>
                                <span className="flex-1 markdown-body prose prose-invert max-w-none pr-3 select-text">
                                  <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown>
                                </span>
                                <div className="flex items-center gap-2 shrink-0 ml-auto">
                                  {badge}
                                  {icon}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Response Evaluation Card */}
                      {submitted && q.type !== 'text' && (
                        <div className="mt-4 p-4 bg-[#08090d]/80 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-550 font-bold uppercase text-[9px] tracking-wider">YOUR SUBMISSION:</span>
                              {(() => {
                                const ans = answers[qIndex];
                                if (Array.isArray(ans)) {
                                  if (ans.length === 0) return <span className="text-slate-600 italic">No Selection</span>;
                                  return (
                                    <div className="flex gap-1">
                                      {ans.map(i => (
                                        <span key={i} className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300 font-bold text-[10px]">
                                          {String.fromCharCode(65 + i)}
                                        </span>
                                      ))}
                                    </div>
                                  );
                                } else if (typeof ans === 'number') {
                                  return (
                                    <span className="bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded text-slate-300 font-bold text-[10px]">
                                      {String.fromCharCode(65 + ans)}
                                    </span>
                                  );
                                }
                                return <span className="text-slate-650 italic">No Selection</span>;
                              })()}
                            </div>

                            <div className="hidden sm:block w-px h-4 bg-slate-800" />

                            <div className="flex items-center gap-2">
                              <span className="text-indigo-400 font-bold uppercase text-[9px] tracking-wider">CORRECT ANSWER:</span>
                              {(() => {
                                const corr = q.correctOptionIndex;
                                if (Array.isArray(corr)) {
                                  return (
                                    <div className="flex gap-1">
                                      {corr.map(i => (
                                        <span key={i} className="bg-emerald-500/10 border border-emerald-500/35 px-2 py-0.5 rounded text-emerald-400 font-bold text-[10px]">
                                          {String.fromCharCode(65 + i)}
                                        </span>
                                      ))}
                                    </div>
                                  );
                                } else if (typeof corr === 'number') {
                                  return (
                                    <span className="bg-emerald-500/10 border border-emerald-500/35 px-2.5 py-0.5 rounded text-emerald-400 font-bold text-[10px]">
                                      {String.fromCharCode(65 + corr)}
                                    </span>
                                  );
                                }
                                return null;
                              })()}
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center">
                            {correct ? (
                              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 font-display">
                                <Check className="w-3.5 h-3.5" /> ACCURATE
                              </span>
                            ) : (
                              <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 font-display">
                                <X className="w-3.5 h-3.5" /> MISMATCHED
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Explanation Block */}
                      {submitted && q.explanation && (
                        <div className={cn(
                          "mt-5 p-4 rounded-xl text-xs leading-relaxed border font-mono",
                          correct ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-250/90" : "bg-red-500/5 border-red-500/20 text-red-250/90"
                        )}>
                          <span className="font-bold text-slate-100 mb-2 block tracking-wider uppercase flex items-center gap-1.5 text-[10px]">
                            <Info className="w-4 h-4 text-indigo-400" /> Explanatory Statement
                          </span>
                          <div className="markdown-body text-slate-300">
                            <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.explanation}</ReactMarkdown>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Glowing bottom prompt action if not submitted */}
          {!submitted && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#08090d] via-[#08090d] to-transparent flex justify-center pb-8 border-t border-slate-900/50">
              <div className="bg-[#0b0e15] rounded-full px-6 py-3.5 flex items-center gap-8 border border-slate-800 shadow-2xl backdrop-blur">
                <span className="text-xs font-medium text-slate-400">
                  Concept Mapping: <span className="text-white font-bold font-mono text-sm">{Object.keys(answers).length}</span> of {total} Complete
                </span>
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] px-6 py-2 rounded-full transition-all tracking-wider shadow-lg shadow-indigo-600/20 cursor-pointer uppercase font-display"
                >
                  SUBMIT ANSWERS FOR EVALUATION
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upload/Add custom Quiz Modals with designer gloss style */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-800 bg-slate-900/20 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-100 font-display flex items-center gap-1.5">
                  <Plus className="w-5 h-5 text-indigo-400" /> Integrate Custom Markdown Quiz
                </h2>
                <p className="text-xs text-slate-500 mt-1">Direct file transfer or text synchronization</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 custom-scrollbar flex-1">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 py-3 bg-[#08090d] hover:bg-slate-900 text-slate-300 rounded-xl transition-all text-xs font-semibold border border-slate-800"
                >
                  <Upload className="w-4 h-4 text-indigo-400" /> Upload markdown file (.md)
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
                  className="flex items-center justify-center gap-2 py-3 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 rounded-xl transition-all text-xs font-semibold border border-indigo-500/10"
                >
                  <Copy className="w-4 h-4" /> Copy structured AI Prompt
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Markdown Input Block</label>
                <textarea
                  value={customMd}
                  onChange={(e) => setCustomMd(e.target.value)}
                  placeholder="Paste Markdown here. Follow structured parser rules..."
                  className="w-full h-52 bg-[#08090d] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-350 focus:border-indigo-500/50 resize-none shadow-inner"
                />
                {importError && (
                  <p className="text-xs text-red-400 font-sans font-medium flex items-center gap-1">
                    ⚠️ {importError}
                  </p>
                )}
              </div>
            </div>

            <div className="p-5 border-t border-slate-800 flex justify-end gap-3 bg-slate-900/10">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2 text-xs font-semibold text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                CLOSE
              </button>
              <button
                onClick={handleAddQuiz}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer uppercase"
              >
                CREATE EXAM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
