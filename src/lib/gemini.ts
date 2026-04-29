import { GoogleGenAI, Type } from "@google/genai";
import type { ProblemData } from "./pythonRunner";
import cachedUrls from "./cached_urls.json";

export async function fetchAndGenerateProblems(url: string, numQuestions: number, difficulty: string, onProgress: (msg: string) => void): Promise<ProblemData[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  const ai = new GoogleGenAI({ apiKey });

  let contentToProcess = "";
  if (cachedUrls && url in cachedUrls && (cachedUrls as any)[url]) {
    onProgress("Using cached content for URL...");
    contentToProcess = String((cachedUrls as any)[url]).slice(0, 500000);
  } else {
    onProgress("Fetching content from URL...");
    const response = await fetch("/api/fetch-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || "Failed to fetch URL");
    }

    const { text } = await response.json();
    contentToProcess = String(text || "").slice(0, 500000); 
  }

  onProgress(`Analyzing and extracting ${numQuestions} ${difficulty} problems...`);
  
  const systemInstruction = `You are an expert coding instructor. Your task is to extract or create ${numQuestions} Python coding exercises from the provided content at a "${difficulty}" difficulty level. You must return the output as a JSON array of objects fulfilling the schema.

Make sure the first test case in each problem is a "Sample" test case (visible to the user, isHidden=false) and the rest are hidden test cases (isHidden=true).
For each test case, you MUST provide BOTH \`expectedOutput\` (the string representation of the expected result) AND \`testCode\` (a Python expression that calls the user's function with the test case inputs, e.g. \`solve(1, "abc")\`). DO NOT include assertions in testCode. The system will evaluate \`testCode\` and compare its printed result to \`expectedOutput\`.
Provide an \`initialCode\` stub (e.g., \`def solve(a, b):\n    pass\`).
Provide a correct \`solutionCode\` serving as a reference.`;

  const result = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Source Content Extract:\n\n${contentToProcess}\n\nPlease extract/create exactly ${numQuestions} Python coding problems of "${difficulty}" difficulty from this content. Make sure to generate strong test cases (1 sample test case and 3-4 hidden test cases per problem). Return a JSON array.`,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            topics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            description: { 
              type: Type.STRING,
              description: "Markdown formatted description of the problem, required inputs, and outputs. Must clearly specify the sample input and expected sample output so the user understands."
            },
            initialCode: {
               type: Type.STRING,
               description: "Starter python code stub, e.g. def func(): pass"
            },
            solutionCode: {
              type: Type.STRING,
            },
            testCases: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  input: { type: Type.STRING, description: "Simulated standard input, if any. Otherwise leave empty." },
                  expectedOutput: { type: Type.STRING, description: "Expected string out if doing string match. (e.g. '5' or '[1, 2]')" },
                  testCode: { type: Type.STRING, description: "Python expression that calls the user's function, e.g. 'my_func(1)'. Do NOT write 'assert'. The system evaluates this expression." },

                  isHidden: { type: Type.BOOLEAN, description: "True if hidden, False if public sample test case." }
                },
                required: ["input", "expectedOutput", "isHidden"]
              }
            }
          },
          required: ["title", "topics", "description", "initialCode", "solutionCode", "testCases"]
        }
      }
    }
  });

  if (!result.text) {
     throw new Error("Failed to generate problems from AI");
  }

  const probs: ProblemData[] = JSON.parse(result.text.trim());
  return probs;
}
