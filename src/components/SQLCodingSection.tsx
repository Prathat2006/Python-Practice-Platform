import React, { useState, useEffect } from 'react';
import { Play, Database, FileCode2, CheckCircle2, XCircle, Loader2, Table as TableIcon } from 'lucide-react';
import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-sql';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from "react-resizable-panels";
import { cn } from '../lib/utils';
import { getSqlJs, runSQLQuery, MOVIE_DB_SCHEMA, type SQLTestResult } from '../lib/sqlRunner';
import { sqlQuizzes, type SQLProblem, type SQLQuiz } from '../lib/sqlQuizzes';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

const ResizeHandle = () => (
  <PanelResizeHandle className="w-2 bg-gray-800 hover:bg-blue-600 transition-colors flex flex-col justify-center items-center group cursor-col-resize z-10 shrink-0">
    <div className="w-0.5 h-8 bg-gray-600 group-hover:bg-blue-300 rounded" />
  </PanelResizeHandle>
);

const ResizeHandleVertical = () => (
  <PanelResizeHandle className="h-2 bg-gray-800 hover:bg-blue-600 transition-colors flex justify-center items-center group cursor-row-resize z-10 shrink-0">
    <div className="h-0.5 w-8 bg-gray-600 group-hover:bg-blue-300 rounded" />
  </PanelResizeHandle>
);

export function SQLCodingSection() {
  const [db, setDb] = useState<any>(null);
  
  // Load selectedQuizId initially from URL search parameter
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get('mode');
    if (m === 'sql') {
      return params.get('quiz');
    }
    return null;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [draftCode, setDraftCode] = useState('');
  const [codes, setCodes] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, SQLTestResult>>({});
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState<'console' | 'schema'>('console');
  const [error, setError] = useState<string | null>(null);

  // Synchronize on browser path/back/forward popstate
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const m = params.get('mode');
      if (m === 'sql') {
        const quiz = params.get('quiz');
        if (quiz !== selectedQuizId) {
          setSelectedQuizId(quiz);
          setCurrentIndex(0);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedQuizId]);

  // Synchronize selectedQuizId state changes to the URL parameter 'quiz'
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get('mode');
    if (m === 'sql') {
      const existingQuizId = params.get('quiz');
      if (existingQuizId !== selectedQuizId) {
        const url = new URL(window.location.href);
        if (selectedQuizId) {
          url.searchParams.set('quiz', selectedQuizId);
        } else {
          url.searchParams.delete('quiz');
        }
        window.history.pushState({}, '', url.toString());
      }
    }
  }, [selectedQuizId]);

  const selectedQuiz = sqlQuizzes.find(q => q.id === selectedQuizId);
  const currentProblems = selectedQuiz?.problems || [];
  const currentProblem = currentProblems[currentIndex];

  useEffect(() => {
    async function init() {
      try {
        const SQL = await getSqlJs();
        const database = new SQL.Database();
        database.run(MOVIE_DB_SCHEMA);
        setDb(database);
      } catch (err) {
        console.error("Failed to init SQL", err);
        setError("Failed to initialize SQL engine. This usually happens if the WebAssembly file couldn't be loaded from the CDN. Please ensure you have a stable internet connection and try reloading.");
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (currentProblem) {
      setDraftCode(codes[currentProblem.id] || currentProblem.initialCode);
    }
  }, [currentIndex, selectedQuizId]);

  const handleRun = async () => {
    if (!db || !currentProblem) return;
    setRunning(true);
    try {
      const res = await runSQLQuery(db, draftCode, currentProblem.expectedQuery);
      setResults(prev => ({ ...prev, [currentProblem.id]: res }));
      // Save code
      setCodes(prev => ({ ...prev, [currentProblem.id]: draftCode }));
    } catch (err) {
      console.error(err);
    } finally {
      setRunning(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0d0f14]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
          <span className="text-xs font-mono text-gray-500">INITIALIZING SQL ENGINE...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0d0f14] p-6">
        <div className="max-w-md w-full bg-red-500/10 border border-red-500/20 rounded-lg p-6 flex flex-col items-center gap-4 text-center">
          <XCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-xl font-bold text-white">Initialization Error</h2>
          <p className="text-sm text-gray-400">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md text-sm font-bold transition-colors"
          >
            RELOAD APPLICATION
          </button>
        </div>
      </div>
    );
  }

  if (!selectedQuizId) {
    return (
      <div className="flex-1 overflow-y-auto bg-[#0d0f14] p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Database className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">SQL Mastery Quizzes</h1>
              <p className="text-gray-400 text-sm">Practice real-world SQL queries in our sandboxed environment.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sqlQuizzes.map((quiz, idx) => (
              <motion.button
                key={quiz.id}
                whileHover={{ scale: 1.02, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedQuizId(quiz.id);
                  setCurrentIndex(0);
                }}
                className="group relative flex flex-col text-left bg-[#11141b] border border-gray-800 rounded-xl overflow-hidden transition-colors hover:border-purple-500/50 p-6"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database className="w-24 h-24 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-purple-500/20 text-purple-400 uppercase tracking-wider mb-2">
                    Quiz {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{quiz.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{quiz.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1">
                      <FileCode2 className="w-3.5 h-3.5" />
                      {quiz.problems.length} Challenges
                    </span>
                    <span className="flex items-center gap-1 text-green-500/80">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {quiz.problems.filter(p => results[p.id]?.passed).length} Comp.
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Start <Play className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentResult = results[currentProblem?.id];

  return (
    <div className="flex flex-1 overflow-hidden bg-[#0d0f14]">
      <PanelGroup orientation="horizontal" className="flex-1">
        {/* Sidebar */}
        <Panel defaultSize={15} minSize={10} className="flex flex-col bg-[#0d0f14] border-r border-gray-800">
          <div className="p-3 flex items-center justify-between border-b border-gray-800 bg-[#11141b]/50">
             <button 
                onClick={() => setSelectedQuizId(null)}
                className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-1"
             >
                <XCircle className="w-3 h-3" /> BACK TO LIST
             </button>
             <span className="text-[10px] font-mono text-purple-500/60 font-bold uppercase tracking-widest">{selectedQuiz.title}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
            {currentProblems.map((prob, i) => {
              const passed = results[prob.id]?.passed;
              return (
                <button
                  key={prob.id}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-[11px] font-medium transition-colors flex items-center gap-2",
                    currentIndex === i ? "bg-purple-600/20 text-purple-400 shadow-[inset_0_0_10px_rgba(147,51,234,0.1)]" : "text-gray-400 hover:bg-gray-800"
                  )}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full shrink-0",
                    passed ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : passed === false ? "bg-red-500 shadow-[0_0_8px_rgba(239,44,44,0.5)]" : "bg-gray-700"
                  )} />
                  <span className="truncate">{currentIndex === i ? prob.title : `${i + 1}. ${prob.title}`}</span>
                </button>
              );
            })}
          </div>
        </Panel>
        <ResizeHandle />

        {/* Problem Description */}
        <Panel defaultSize={30} minSize={20} className="flex flex-col bg-[#0d0f14]">
          <div className="p-6 overflow-y-auto flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-bold text-white">{currentIndex + 1}. {currentProblem.title}</h2>
            </div>
            <div className="markdown-body prose prose-invert max-w-none">
              <Markdown>{currentProblem.description}</Markdown>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                <TableIcon className="w-3 h-3" /> Database Schema
              </h3>
              <div className="bg-[#11141b] border border-gray-800 rounded-lg p-4 space-y-4">
                <div>
                  <div className="text-[10px] text-purple-400 font-bold mb-1">movies</div>
                  <div className="text-[11px] text-gray-400 font-mono">id, title, genre, release_year, imdb_rating, duration_mins</div>
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 font-bold mb-1">users</div>
                  <div className="text-[11px] text-gray-400 font-mono">id, username, subscription_tier, signup_date</div>
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 font-bold mb-1">watch_history</div>
                  <div className="text-[11px] text-gray-400 font-mono">watch_id, user_id, movie_id, completion_pct, watch_date</div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
        <ResizeHandle />

        {/* Editor & Results */}
        <Panel defaultSize={55} minSize={30} className="flex flex-col bg-[#11141b]">
          <PanelGroup orientation="vertical">
            <Panel defaultSize={60} minSize={20} className="flex flex-col">
              <div className="h-14 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0d0f14]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">query.sql</span>
                </div>
                <button
                  onClick={handleRun}
                  disabled={running}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-md transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50"
                >
                  {running ? <Loader2 className="w-3 h-3 animate-spin"/> : <Play className="w-3 h-3"/>}
                  RUN QUERY
                </button>
              </div>

              <div className="flex-1 relative overflow-auto bg-[#0d0f14]">
                <Editor
                  value={draftCode}
                  onValueChange={setDraftCode}
                  highlight={c => highlight(c, languages.sql, 'sql')}
                  padding={20}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 13,
                    minHeight: '100%',
                  }}
                  className="outline-none"
                />
              </div>
            </Panel>
            <ResizeHandleVertical />
            <Panel defaultSize={40} minSize={20} className="flex flex-col bg-[#0d0f14]">
              <div className="h-10 border-b border-gray-800 flex items-center px-4 gap-4 bg-[#11141b]">
                <button 
                  onClick={() => setActiveRightTab('console')}
                  className={cn("text-[10px] font-bold uppercase tracking-widest pb-px border-b-2 transition-colors", activeRightTab === 'console' ? "text-purple-400 border-purple-400" : "text-gray-500 border-transparent hover:text-gray-300")}
                >
                  Console Output
                </button>
                <button 
                  onClick={() => setActiveRightTab('schema')}
                  className={cn("text-[10px] font-bold uppercase tracking-widest pb-px border-b-2 transition-colors", activeRightTab === 'schema' ? "text-purple-400 border-purple-400" : "text-gray-500 border-transparent hover:text-gray-300")}
                >
                  Query Results
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                {activeRightTab === 'console' ? (
                  <div className="space-y-4">
                    {!currentResult && !running && (
                      <div className="text-gray-600 text-xs italic">Run a query to see results...</div>
                    )}
                    {running && (
                      <div className="text-purple-400 text-xs animate-pulse">Executing SQL...</div>
                    )}
                    {currentResult && (
                      <div className="space-y-4">
                        <div className={cn(
                          "flex items-center gap-2 p-3 rounded-md text-xs font-bold",
                          currentResult.passed ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                        )}>
                          {currentResult.passed ? <CheckCircle2 className="w-4 h-4"/> : <XCircle className="w-4 h-4"/>}
                          {currentResult.passed ? "Query successful - Results match expected output!" : (currentResult.error ? `Error: ${currentResult.error}` : "Query incorrect - Results do not match expected output.")}
                        </div>

                        {currentResult.actual && (
                          <div className="border border-gray-800 rounded-lg overflow-hidden">
                            <table className="w-full text-left text-[11px] border-collapse">
                              <thead className="bg-[#11141b] text-gray-500">
                                <tr>
                                  {Object.keys(currentResult.actual[0] || {}).map(k => (
                                    <th key={k} className="px-3 py-2 border-b border-gray-800 font-bold">{k}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="bg-[#0d0f14]">
                                {currentResult.actual.map((row, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    {Object.values(row).map((v: any, j) => (
                                      <td key={j} className="px-3 py-2 border-b border-gray-800 text-gray-300 font-mono">
                                        {v === null ? <span className="text-red-500/50 italic text-[10px]">NULL</span> : String(v)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {currentResult.actual.length === 0 && (
                              <div className="p-4 text-center text-gray-600 italic">No rows returned</div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase">Target Results Comparison</h4>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <div className="text-[10px] text-gray-500 mb-1">YOUR OUTPUT</div>
                          <pre className="text-[9px] bg-gray-900 p-2 rounded max-h-40 overflow-auto">{JSON.stringify(currentResult?.actual, null, 2)}</pre>
                       </div>
                       <div>
                          <div className="text-[10px] text-gray-500 mb-1">EXPECTED OUTPUT</div>
                          <pre className="text-[9px] bg-gray-900 p-2 rounded max-h-40 overflow-auto">{JSON.stringify(currentResult?.expected, null, 2)}</pre>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}
