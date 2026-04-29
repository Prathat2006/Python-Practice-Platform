export interface TestCase {
  input: string;
  expectedOutput: string;
  testCode?: string; // Optional: custom validation code instead of string matching
  isHidden: boolean;
}

export interface ProblemData {
  title: string;
  topics?: string[];
  description: string;
  initialCode?: string;
  solutionCode?: string;
  testCases: TestCase[];
}

export interface TestResult {
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  error?: string;
}

let worker: Worker | null = null;
let resolveRunningTest: ((result: TestResult[]) => void) | null = null;
let rejectRunningTest: ((error: string) => void) | null = null;

let currentMessageId = 0;

export async function runPythonCode(code: string, testCases: TestCase[]): Promise<TestResult[]> {
  if (!worker) {
    worker = new Worker('/python-worker.js');
    worker.onmessage = (event) => {
      const { id, result, error } = event.data;
      // We assume one test running at a time for simplicity
      if (error) {
        if (rejectRunningTest) rejectRunningTest(error);
      } else {
        if (resolveRunningTest) resolveRunningTest(result);
      }
      resolveRunningTest = null;
      rejectRunningTest = null;
    };
  }

  return new Promise((resolve, reject) => {
    resolveRunningTest = resolve;
    rejectRunningTest = reject;
    worker!.postMessage({ id: ++currentMessageId, code, testCases });
  });
}
