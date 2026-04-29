importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js");

let pyodideReadyPromise;

async function load() {
  self.pyodide = await loadPyodide();
  // Set up standard wrapper to run tests
  await self.pyodide.runPythonAsync(`
import sys
import io
import traceback
import json

def run_user_code(code, test_cases_json_str):
    test_cases = json.loads(test_cases_json_str)
    results = []
    
    for case in test_cases:
        input_data = case.get("input", "")
        
        # Redirect stdout
        out = io.StringIO()
        sys.stdout = out
        
        # Redirect stdin
        sys.stdin = io.StringIO(input_data)
        
        # Fresh globals for each run
        user_globals = {}
        
        actual_output = ""
        passed = False
        error_msg = ""
        
        try:
            exec(code, user_globals)
            
            if "testCode" in case and case["testCode"]:
                try:
                    test_expr = case["testCode"].strip()
                    if test_expr.startswith("assert "):
                        test_expr = test_expr[7:].split("==")[0].strip()
                        
                    res = eval(test_expr, user_globals)
                    
                    printed_out = out.getvalue().strip()
                    if res is not None:
                        actual_output = str(res).strip()
                        if printed_out:
                            actual_output = printed_out + "\\n" + actual_output
                    else:
                        actual_output = printed_out

                    expected = str(case.get("expectedOutput", "")).strip()
                    
                    lines = actual_output.split("\\n")
                    if lines:
                        passed = (lines[-1].strip() == expected) or (actual_output == expected)
                        
                except Exception as e:
                    passed = False
                    error_msg = traceback.format_exc()
                    actual_output = out.getvalue().strip()
            else:
                actual_output = out.getvalue().strip()
                expected = str(case.get("expectedOutput", "")).strip()
                passed = (actual_output == expected)
            
        except Exception as e:
            passed = False
            error_msg = traceback.format_exc()
            actual_output = out.getvalue().strip()
        finally:
            sys.stdout = sys.__stdout__
            sys.stdin = sys.__stdin__
            
        results.append({
            "input": input_data,
            "expectedOutput": str(case.get("expectedOutput", "")).strip(),
            "actualOutput": actual_output,
            "passed": passed,
            "error": error_msg
        })
        
    return json.dumps(results)
  `);
}

pyodideReadyPromise = load();

self.onmessage = async (event) => {
  const { id, code, testCases } = event.data;
  try {
    await pyodideReadyPromise;
    
    // Attempt to automatically load any packages imported by user code (like pandas, numpy)
    let packagesToLoad = code;
    for (const testCase of testCases) {
      if (testCase.testCode) {
        packagesToLoad += '\n' + testCase.testCode;
      }
    }
    await self.pyodide.loadPackagesFromImports(packagesToLoad);

    const testCasesStr = JSON.stringify(testCases);
    const runFunc = self.pyodide.globals.get('run_user_code');
    const resultJson = runFunc(code, testCasesStr);
    self.postMessage({ id, result: JSON.parse(resultJson) });
  } catch (error) {
    self.postMessage({ id, error: error.message || error.toString() });
  }
};
