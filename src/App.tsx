import React, { useState, useEffect } from 'react';
import { Play, FileCode2, Link as LinkIcon, Loader2, CheckCircle2, XCircle, Send, Clock, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import Editor from 'react-simple-code-editor';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from "react-resizable-panels";
// @ts-ignore
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import { cn } from './lib/utils';
import { fetchAndGenerateProblems } from './lib/gemini';
import { runPythonCode, type ProblemData, type TestResult } from './lib/pythonRunner';
import { quiz1Problems } from './lib/quiz1';

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

export default function App() {
  const [url, setUrl] = useState('https://www.w3resource.com/python-exercises/pandas/index-dataframe.php');
  const [numQuestions, setNumQuestions] = useState<number>(3);
  const [difficulty, setDifficulty] = useState<string>('Easy');
  const [loading, setLoading] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  
  const [problems, setProblems] = useState<ProblemData[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [codes, setCodes] = useState<string[]>([]);
  const [draftCode, setDraftCode] = useState('');
  // Record of test results per problem index
  const [testResults, setTestResults] = useState<Record<number, TestResult[]>>({});
  
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'problem'|'solution'>('problem');
  
  const [timerMode, setTimerMode] = useState<string>('Auto');
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [sessionEnded, setSessionEnded] = useState(false);

  const calculateInitialTime = (diff: string, qs: number, mode: string) => {
    if (mode === 'Auto') {
        const mins = diff === 'Easy' ? 5 : diff === 'Medium' ? 10 : 15;
        return mins * qs * 60;
    }
    return parseInt(mode) * 60;
  }

  useEffect(() => {
    let interval: any;
    if (problems && !loading && timeRemaining !== null && timeRemaining > 0 && !sessionEnded) {
       interval = setInterval(() => {
          setTimeRemaining(t => {
            if (t !== null && t <= 1) {
                setSessionEnded(true);
                return 0;
            }
            return t === null ? null : t - 1;
          });
       }, 1000);
    }
    return () => clearInterval(interval);
  }, [problems, loading, timeRemaining, sessionEnded]);

  useEffect(() => {
    if (problems && codes.length > currentIndex) {
      setDraftCode(codes[currentIndex]);
    }
  }, [currentIndex, problems, codes]);

  const handleGenerate = async (e?: React.FormEvent, overrideUrl?: string, overrideNumQ?: number) => {
    if (e) e.preventDefault();
    const targetUrl = overrideUrl || url;
    const targetQ = overrideNumQ || numQuestions;
    if (!targetUrl) return;

    if (targetUrl === 'quiz1') {
      try {
        setLoading(true);
        setTestResults({});
        setProblems(null);
        setSessionEnded(false);
        setTimeRemaining(calculateInitialTime(difficulty, targetQ, timerMode));
        
        setProblems(quiz1Problems);
        const initialCodes = quiz1Problems.map(d => d.initialCode || "");
        setCodes(initialCodes);
        setCurrentIndex(0);
        setDraftCode(initialCodes[0] || "");
      } catch (err: any) {
        alert(err.message || "Failed to load quiz");
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setTestResults({});
      setProblems(null);
      setSessionEnded(false);
      setTimeRemaining(calculateInitialTime(difficulty, targetQ, timerMode));
      const data = await fetchAndGenerateProblems(targetUrl, targetQ, difficulty, setProgressMsg);
      setProblems(data);
      const initialCodes = data.map(d => d.initialCode);
      setCodes(initialCodes);
      setCurrentIndex(0);
      setDraftCode(initialCodes[0]);
      setActiveTab('problem');
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRunSample = async () => {
    if (!problems) return;
    const currentProblem = problems[currentIndex];
    const visibleCases = currentProblem.testCases.filter(c => !c.isHidden);
    const casesToRun = visibleCases.length > 0 ? visibleCases : [currentProblem.testCases[0]];
    
    try {
      setRunning(true);
      const res = await runPythonCode(draftCode, casesToRun);
      setTestResults(prev => ({...prev, [currentIndex]: res}));
    } catch (err: any) {
      alert(`Execution Error: ${err.message || err}`);
    } finally {
      setRunning(false);
    }
  };

  const handleSubmitCode = async () => {
    if (!problems) return;
    const currentProblem = problems[currentIndex];
    
    try {
      setSubmitting(true);
      // Save draft code to codes array
      setCodes(prev => {
        const copy = [...prev];
        copy[currentIndex] = draftCode;
        return copy;
      });

      const res = await runPythonCode(draftCode, currentProblem.testCases);
      setTestResults(prev => ({...prev, [currentIndex]: res}));
    } catch (err: any) {
      alert(`Execution Error: ${err.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  const problem = problems ? problems[currentIndex] : null;
  const code = codes.length > 0 ? codes[currentIndex] : '';
  const results = testResults[currentIndex] || null;

  return (
    <div className="flex flex-col h-screen w-full bg-[#0d0f14] text-gray-300 font-sans">
      <nav className="h-12 border-b border-gray-800 flex items-center px-4 justify-between bg-[#11141b] shrink-0">
        <div className="flex items-center gap-3 w-64 shrink-0">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-xs text-white">
            P
          </div>
          <span className="text-sm font-semibold tracking-tight hidden sm:block">PYTHON PRACTICE LOCAL</span>
        </div>
        
        <form id="extractor-form" onSubmit={handleGenerate} className="flex-1 max-w-4xl px-2 flex gap-2">
          <div className="flex h-8 bg-[#1a1d23] border border-gray-700 rounded-md overflow-hidden flex-1">
            <div className="flex items-center px-3 text-gray-500 bg-gray-800/30">
              <LinkIcon className="w-3 h-3" />
            </div>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Docs or Tutorial URL..."
              className="bg-transparent border-none outline-none flex-1 text-xs px-2 text-gray-400 focus:ring-0 w-full min-w-0"
              required
            />
          </div>
          <select 
            value={numQuestions} 
            onChange={e => setNumQuestions(Number(e.target.value))} 
            className="h-8 bg-[#1a1d23] border border-gray-700 text-gray-400 text-xs px-2 rounded outline-none"
          >
            {[...Array(30)].map((_, i) => <option key={i+1} value={i+1}>{i+1} Qs</option>)}
          </select>
          <select 
             value={difficulty} 
             onChange={e => setDifficulty(e.target.value)} 
             className="h-8 w-24 bg-[#1a1d23] border border-gray-700 text-gray-400 text-xs px-2 rounded outline-none shrink-0"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select 
             value={timerMode} 
             onChange={e => setTimerMode(e.target.value)} 
             className="h-8 w-24 bg-[#1a1d23] border border-gray-700 text-gray-400 text-xs px-2 rounded outline-none shrink-0"
          >
            <option value="Auto">Auto Time</option>
            <option value="15">15 mins</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="h-8 bg-blue-600 text-white text-xs px-4 font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 rounded"
          >
            {loading ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                <span className="hidden sm:inline">{progressMsg || 'EXTRACTING...'}</span>
              </>
            ) : (
              'EXTRACT TOPICS'
            )}
          </button>
        </form>

        <div className="flex items-center gap-4 hidden lg:flex w-48 shrink-0 justify-end">
          <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Local AI Active
          </div>
        </div>
      </nav>

      <main className="flex flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!problems && !loading && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#0d0f14] overflow-y-auto"
             >
                <div className="w-16 h-16 shrink-0 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                  <FileCode2 className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 shrink-0">Paste a URL to generate a challenge test</h2>
                <p className="text-xs text-gray-500 max-w-md shrink-0 mb-8">Our AI extracts content from coding tutorials and instantly generates custom practice tests. Select the number of questions and difficulty level above.</p>
                
                <div className="w-full max-w-4xl text-left">
                  <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Recommended Practice Sets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { title: "Quiz 1 Practice Set", url: "quiz1", q: 13 },
                      { title: "Python Pandas DataFrame", url: "https://www.w3resource.com/python-exercises/pandas/index-dataframe.php", q: 15 },
                      { title: "Python Pandas Data Series", url: "https://www.w3resource.com/python-exercises/pandas/index-data-series.php", q: 15 },
                      { title: "Pandas Joining & Merging", url: "https://www.w3resource.com/python-exercises/pandas/joining-and-merging/index.php", q: 15 },
                      { title: "Pandas Advanced Grouping", url: "https://www.w3resource.com/python-exercises/pandas/advanced-grouping-and-aggregation/index.php", q: 15 },
                      { title: "Python List Exercise (GFG)", url: "https://www.geeksforgeeks.org/python/python-list-exercise/", q: 20 },
                    ].map((preset, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setUrl(preset.url);
                          setNumQuestions(preset.q);
                          handleGenerate(undefined, preset.url, preset.q);
                        }}
                        className="bg-[#1a1d23] hover:bg-gray-800 border border-gray-800 hover:border-gray-700 p-4 rounded-lg text-left transition-colors flex flex-col group"
                      >
                        <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors mb-1 truncate">{preset.title}</span>
                        <span className="text-[10px] text-gray-500 truncate">{preset.url}</span>
                        <div className="mt-4 flex items-center gap-2">
                           <span className="text-[10px] bg-gray-900 px-2 py-0.5 rounded text-gray-400">{preset.q} Questions</span>
                           <span className="text-[10px] bg-blue-900/20 px-2 py-0.5 rounded text-blue-400 font-medium ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             Practice Now <Play className="w-2.5 h-2.5" />
                           </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
             </motion.div>
          )}

          {loading && (
            <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="absolute inset-0 flex items-center justify-center bg-[#0d0f14] z-10"
            >
              <div className="flex flex-col items-center gap-4 text-gray-400">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                <span className="text-xs font-mono tracking-wider uppercase">{progressMsg || "Processing..."}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {problems && problem && (
          <PanelGroup orientation="horizontal" className="flex-1 w-full relative">
            {/* Sidebar List */}
            <Panel defaultSize={15} minSize={10} className="flex flex-col bg-[#0d0f14] hidden md:flex shrink-0">
              <div className="p-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Extracted Exercises</div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-3 pt-0">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(35px,1fr))] gap-2">
                  {problems.map((prob, i) => {
                    const isPassed = testResults[i] && testResults[i].length === prob.testCases.length && testResults[i].every(r => r.passed);
                    return (
                      <div 
                        key={i} 
                        onClick={() => { setCurrentIndex(i); setActiveTab('problem'); }} 
                        className={cn("flex flex-col items-center justify-center p-2 rounded cursor-pointer transition-colors border aspect-square", 
                           currentIndex === i ? "bg-blue-600/20 border-blue-500 text-blue-400" : 
                           isPassed ? "bg-green-900/20 border-green-800 text-green-500" : 
                           "bg-[#1a1d23] border-gray-700 text-gray-400 hover:bg-gray-800")}
                      >
                         <span className="text-[11px] font-bold">{i + 1}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="p-3 border-t border-gray-800 text-center relative">
                <div className={cn("rounded-md p-3 flex flex-col items-center border transition-colors", sessionEnded || timeRemaining === 0 ? "bg-red-900/20 border-red-900/50" : "bg-gray-900 border-gray-800")}>
                  <span className="flex items-center gap-1 font-bold tracking-tighter text-[10px] text-gray-400 mb-1"><Clock className="w-3 h-3"/> TIME REMAINING</span>
                  <span className={cn("font-mono text-xl", sessionEnded || timeRemaining === 0 ? "text-red-500 font-bold" : "text-white")}>
                     {timeRemaining !== null ? `${Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:${(timeRemaining % 60).toString().padStart(2, '0')}` : '00:00'}
                  </span>
                </div>
                {(sessionEnded || timeRemaining === 0) ? (
                   <div className="mt-2 text-[10px] uppercase text-green-500 font-bold bg-green-900/20 py-2 rounded">Test Submitted</div>
                ) : (
                   <button 
                     onClick={() => {
                        setTimeRemaining(0);
                        setSessionEnded(true);
                     }}
                     className="mt-2 w-full py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors border border-blue-500/50 shadow-lg shadow-blue-900/20"
                   >
                     <Trophy className="w-3.5 h-3.5" /> Submit Test
                   </button>
                )}
              </div>
            </Panel>
            <ResizeHandle />

            {/* Middle Col: Description */}
            <Panel defaultSize={35} minSize={20} className="flex flex-col bg-[#0d0f14]">
              <div className="p-5 overflow-y-auto custom-scrollbar flex flex-col flex-1 h-full">
                <h1 className="text-lg font-bold text-white mb-2 leading-tight">{currentIndex + 1}. {problem.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                  <span className={cn("text-[10px] px-2 py-0.5 rounded border uppercase font-medium", difficulty === 'Easy' ? "bg-green-900/30 text-green-400 border-green-800/50" : difficulty === 'Medium' ? "bg-yellow-900/30 text-yellow-400 border-yellow-800/50" : "bg-red-900/30 text-red-400 border-red-800/50")}>
                    {difficulty}
                  </span>
                  {(problem.topics || []).slice(0,3).map(topic => (
                    <span key={topic} className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded border border-gray-700 uppercase font-medium">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-b border-gray-800 mb-4 shrink-0">
                  <button 
                    onClick={() => setActiveTab('problem')} 
                    className={cn("pb-2 text-xs font-semibold tracking-wide uppercase transition-colors border-b-2", activeTab === 'problem' ? "text-blue-400 border-blue-400" : "text-gray-500 border-transparent hover:text-gray-300")}
                  >
                    Description
                  </button>
                  <button 
                    onClick={() => setActiveTab('solution')} 
                    className={cn("pb-2 text-xs font-semibold tracking-wide uppercase transition-colors border-b-2", activeTab === 'solution' ? "text-blue-400 border-blue-400" : "text-gray-500 border-transparent hover:text-gray-300")}
                  >
                    Solution
                  </button>
                </div>

                <div className="flex-1 overflow-x-hidden min-h-0">
                  {activeTab === 'problem' ? (
                    <div className="markdown-body">
                      <Markdown>{problem.description}</Markdown>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-xs text-gray-400">Reference solution provided by AI:</p>
                      <div className="bg-[#0d0f14] p-3 border border-gray-800 rounded">
                        <pre className="text-[11px] font-mono text-green-300 whitespace-pre-wrap">
                          {problem.solutionCode}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Panel>
            <ResizeHandle />

            {/* Right Col: Editor + Console */}
            <Panel defaultSize={50} minSize={30} className="flex flex-col bg-[#1a1d23] min-w-0">
              <PanelGroup orientation="vertical">
                {/* Editor Section */}
                <Panel defaultSize={60} minSize={20} className="flex flex-col flex-1 relative min-h-0">
                  {/* Editor Header */}
                  <div className="h-14 bg-[#0d0f14] border-b border-gray-800 flex items-center px-4 justify-between shrink-0 select-none">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md">
                        <FileCode2 className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-mono text-gray-300">main.py</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] rounded uppercase font-bold tracking-wider">
                        Python 3.10
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={handleRunSample}
                        disabled={running || submitting || sessionEnded || timeRemaining === 0}
                        className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-gray-300 text-xs font-semibold py-1.5 px-4 rounded-md transition-all border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {running ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4 text-gray-400"/>}
                        {running ? 'Running...' : 'Run Sample'}
                      </button>
                      <button 
                        onClick={handleSubmitCode}
                        disabled={running || submitting || sessionEnded || timeRemaining === 0}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold py-1.5 px-4 rounded-md transition-all border border-green-500 shadow-[0_0_15px_rgba(22,163,74,0.2)] hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Send className="w-4 h-4 text-green-200"/>}
                        {submitting ? 'Submitting...' : 'Submit Code'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Editor Body */}
                  <div className="flex-1 font-mono text-[13px] leading-relaxed overflow-hidden relative">
                    <Editor
                      value={draftCode}
                      onValueChange={setDraftCode}
                      highlight={c => highlight(c, languages.python, 'python')}
                      padding={16}
                      disabled={sessionEnded || timeRemaining === 0}
                      className={cn("min-h-full w-full h-full custom-scrollbar overflow-y-auto outline-none border-none focus:outline-none", (sessionEnded || timeRemaining === 0) ? "opacity-75" : "")}
                      textareaClassName="focus:outline-none focus:border-none focus:ring-0"
                      style={{
                        fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
                        backgroundColor: 'transparent',
                        outline: 'none',
                      }}
                    />
                    {(sessionEnded || timeRemaining === 0) && (
                       <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center backdrop-blur-[1px]"></div>
                    )}
                  </div>
                </Panel>
                
                <ResizeHandleVertical />

                {/* Console Section */}
                <Panel defaultSize={40} minSize={20} className="flex flex-col bg-[#0d0f14] min-h-0">
                  <div className="h-8 border-b border-gray-800 flex items-center px-4 shrink-0 justify-between bg-[#0d0f14]">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Console / Local Output</span>
                    {results && (
                       <span className={cn("text-[10px] font-bold", results.every(r => r.passed) ? "text-green-500" : "text-gray-500")}>
                          {results.filter(r => r.passed).length} / {results.length} PASSED
                       </span>
                    )}
                  </div>
                  <div className="flex-1 p-3 font-mono text-[11px] text-gray-500 overflow-y-auto custom-scrollbar space-y-2 pb-10">
                    {!results && !running && !submitting && (
                      <div className="text-gray-600">Waiting for execution...</div>
                    )}
                    {(running || submitting) && (
                      <div className="text-gray-400">Executing code locally in Pyodide...</div>
                    )}
                    {(results && !running && !submitting) && results.map((res, i) => {
                      const caseInfo = problem.testCases[i];
                      
                      return (
                        <div key={i} className="mb-6 border border-gray-800 rounded bg-gray-900/30 p-3">
                          {/* Show details for sample test cases whether passed or failed */}
                          {!caseInfo.isHidden && (
                            <div className="space-y-4 mb-4 border-b border-gray-800 pb-4">
                              {/* Input block */}
                              {res.input && (
                                <div>
                                  <span className="text-gray-600 text-[10px] font-bold uppercase mb-1 block">Input:</span>
                                  <div className="text-gray-300 whitespace-pre overflow-x-auto custom-scrollbar pb-1">{res.input}</div>
                                </div>
                              )}
                              {/* Expected and Actual blocks in 2 columns */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col min-w-0">
                                  <span className="text-gray-600 text-[10px] font-bold uppercase mb-1 block">Expected Output:</span>
                                  <div className="text-gray-300 whitespace-pre flex-1 bg-gray-900/50 p-2 rounded border border-gray-800 overflow-x-auto custom-scrollbar pb-1">{res.expectedOutput || '(empty)'}</div>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="text-gray-600 text-[10px] font-bold uppercase mb-1 block">Code Output:</span>
                                  <div className={cn("whitespace-pre flex-1 bg-gray-900/50 p-2 rounded border border-gray-800 overflow-x-auto custom-scrollbar pb-1", res.error ? "text-red-400 line-clamp-none max-h-64 overflow-y-auto" : "text-gray-300")}>
                                    {res.error ? (res.actualOutput ? res.actualOutput + "\n\n=== Error ===\n" + res.error : res.error) : (res.actualOutput || '(empty)')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {(caseInfo.isHidden && !res.passed) && (
                            <div className="mb-4 border-b border-gray-800 pb-4">
                              <span className="text-gray-600 text-[10px] font-bold uppercase mb-1 block">Hidden Test Case:</span>
                              <div className="text-gray-500 italic text-[10px]">Test case details are hidden.</div>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2">
                            {res.passed ? (
                              <span className="text-green-500 bg-green-500/10 px-2 py-1.5 rounded flex items-center gap-2 font-bold w-full">
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">Test {i + 1} Passed {caseInfo.isHidden && "(Hidden)"}</span>
                              </span>
                            ) : (
                              <span className="text-red-500 bg-red-500/10 px-2 py-1.5 rounded flex items-center gap-2 font-bold w-full">
                                <XCircle className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">Test {i + 1} Failed {caseInfo.isHidden && "(Hidden)"}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                    {results && (
                       <div className="mt-4 pt-2 border-t border-gray-800 text-gray-600 italic">
                          {">>"} Process finished with exit code {results.every(r => r.passed) ? 0 : 1}.
                       </div>
                    )}
                  </div>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        )}

        {/* Session Ended Modal */}
        <AnimatePresence>
          {sessionEnded && problems && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-[#11141b] border border-gray-800 rounded-xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4 border border-blue-500/20">
                  <Trophy className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Time's Up!</h2>
                <p className="text-sm text-gray-400 mb-6">Your coding session has ended.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#1a1d23] border border-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      {Object.values(testResults).filter(res => res.length > 0).length}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-500">Attempted</div>
                  </div>
                  <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      {problems.filter((p, i) => testResults[i] && testResults[i].length === p.testCases.length && testResults[i].every(r => r.passed)).length}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-green-600/80">Completed</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded p-3 mb-6 flex justify-between items-center border border-gray-800">
                  <span className="text-xs text-gray-400">Total Questions</span>
                  <span className="text-sm font-bold text-white">{problems.length}</span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setSessionEnded(false)}
                    className="flex-1 py-2 rounded font-semibold text-xs border border-gray-700 hover:bg-gray-800 transition-colors text-white"
                  >
                    Review Code
                  </button>
                  <button 
                    onClick={() => {
                        setProblems(null);
                        setSessionEnded(false);
                    }}
                    className="flex-1 py-2 rounded font-semibold text-xs bg-blue-600 hover:bg-blue-700 transition-colors text-white"
                  >
                    New Session
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
