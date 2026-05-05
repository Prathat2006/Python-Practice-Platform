import React, { useState } from 'react';
import { mcqQuizzes, type MCQQuiz } from '../lib/mcqQuizzes';
import { Check, X, RefreshCcw, FileText, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

export function MCQSection() {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const activeQuiz = mcqQuizzes.find(q => q.id === activeQuizId);

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const calculateScore = () => {
    if (!activeQuiz) return 0;
    return activeQuiz.questions.filter((q, i) => answers[i] === q.correctOptionIndex).length;
  };

  const handleBack = () => {
    setActiveQuizId(null);
    setAnswers({});
    setSubmitted(false);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  if (!activeQuiz) {
    return (
      <div className="flex-1 flex flex-col items-center p-8 bg-[#0d0f14] overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-100 mb-2">Practice Quizzes</h1>
        <p className="text-sm text-gray-500 mb-8 max-w-lg text-center">
          Test your knowledge with multiple-choice questions based on various topics. 
          Select a quiz below to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {mcqQuizzes.map((quiz) => (
            <div 
              key={quiz.id}
              onClick={() => setActiveQuizId(quiz.id)}
              className="bg-[#11141b] border border-gray-800 hover:border-blue-500/50 hover:bg-[#1a1d23] rounded-xl p-6 cursor-pointer transition-all group flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">{quiz.title}</h3>
                <p className="text-xs text-gray-500">{quiz.questions.length} questions</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const score = calculateScore();
  const total = activeQuiz.questions.length;

  return (
    <div className="flex flex-col h-full bg-[#0d0f14] overflow-hidden flex-1 relative">
      <div className="h-14 shrink-0 flex items-center justify-between px-6 border-b border-gray-800 bg-[#11141b]">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="text-xs font-semibold text-gray-500 hover:text-white transition-colors"
          >
            ← BACK TO QUIZZES
          </button>
          <div className="w-px h-4 bg-gray-800"></div>
          <h2 className="text-sm font-semibold text-gray-200">{activeQuiz.title}</h2>
        </div>
        {submitted && (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              Score: <span className={cn("font-bold", score > total / 2 ? "text-green-400" : "text-yellow-400")}>{score}/{total}</span>
            </span>
            <button 
              onClick={handleRetry}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition-colors"
            >
              <RefreshCcw className="w-3 h-3" /> RETRY
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-3xl mx-auto space-y-8 pb-32">
          {activeQuiz.questions.map((q, qIndex) => {
            const isAnswered = answers[qIndex] !== undefined;
            const isCorrect = answers[qIndex] === q.correctOptionIndex;
            
            return (
              <div 
                key={qIndex} 
                className={cn(
                  "p-6 rounded-xl border bg-[#11141b] transition-colors",
                  submitted 
                    ? isCorrect ? "border-green-500/30" : "border-red-500/30"
                    : isAnswered ? "border-blue-500/30" : "border-gray-800"
                )}
              >
                <div className="text-sm text-gray-200 leading-relaxed font-medium mb-4 whitespace-pre-wrap flex items-start gap-2">
                  <span className="text-gray-500 font-semibold">{qIndex + 1}.</span>
                  <div className="flex-1 markdown-body prose prose-invert prose-sm max-w-none prose-p:my-0">
                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {q.options.map((opt, oIndex) => {
                    const isSelected = answers[qIndex] === oIndex;
                    const isCorrectOpt = oIndex === q.correctOptionIndex;
                    
                    let bgClass = "bg-[#161a22] border-gray-800 hover:bg-[#1a1f29]";
                    let icon = null;
                    
                    if (submitted) {
                      if (isCorrectOpt) {
                        bgClass = "bg-green-500/10 border-green-500/50 text-green-200";
                        icon = <Check className="w-4 h-4 text-green-400 ml-auto shrink-0" />;
                      } else if (isSelected && !isCorrectOpt) {
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
                        onClick={() => handleSelectOption(qIndex, oIndex)}
                        disabled={submitted}
                        className={cn(
                          "w-full flex items-center text-left p-3 rounded-lg border text-sm transition-all",
                          bgClass,
                          !submitted && "cursor-pointer"
                        )}
                      >
                        <span className="w-8 shrink-0 text-gray-500 font-mono text-xs">
                          {String.fromCharCode(65 + oIndex)}.
                        </span>
                        <span className="flex-1 markdown-body prose prose-invert prose-sm max-w-none prose-p:my-0">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown>
                        </span>
                        {icon}
                      </button>
                    );
                  })}
                </div>

                {submitted && q.explanation && (
                  <div className={cn(
                    "mt-4 p-4 rounded-lg text-xs leading-relaxed border",
                    isCorrect ? "bg-green-500/5 border-green-500/20 text-green-100/80" : "bg-red-500/5 border-red-500/20 text-red-100/80"
                  )}>
                    <span className="font-semibold mb-2 block">Explanation:</span>
                    <div className="markdown-body prose prose-invert prose-sm max-w-none prose-p:my-0">
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
              onClick={() => setSubmitted(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2 rounded-full transition-colors"
            >
              SUBMIT QUIZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
