import type { MCQQuiz, MCQProblem } from './mcqQuizzes';

export function parseMarkdownQuiz(id: string, markdown: string): MCQQuiz {
  const lines = markdown.split('\n');
  let title = "Quiz";
  const questions: MCQProblem[] = [];
  
  let currentQ: string[] = [];
  let options: string[] = [];
  let correctIndex: number | number[] | null = null;
  let correctText: string | null = null;
  let explanation = "";
  
  let state: 'title' | 'question' | 'options' | 'answer' | 'explanation' | 'idle' = 'idle';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (state === 'question') {
          currentQ.push('');
      } else if (state === 'explanation') {
          explanation += '\n\n';
      }
      continue;
    }

    if (line.startsWith('### ')) {
      title = line.replace('### ', '').trim();
      continue;
    }

    if (line.startsWith('**Question') || line.startsWith('**Q') || line.match(/^\*\*\d+\.\*\*/)) {
      if (currentQ.length > 0 && (options.length > 0 || correctText !== null)) {
        const qText = currentQ.join('\n').trim();
        const isMultipleChoice = qText.toLowerCase().includes('select all that apply') || (Array.isArray(correctIndex) && correctIndex.length > 1);
        
        questions.push({
          question: qText,
          options: [...options],
          correctOptionIndex: correctIndex ?? undefined,
          correctText: correctText ?? undefined,
          explanation: explanation.trim(),
          isMultipleChoice,
          type: correctText !== null ? 'text' : 'mcq'
        });
      }
      currentQ = [];
      options = [];
      correctIndex = null;
      correctText = null;
      explanation = "";
      state = 'question';
      continue;
    }

    const optMatch = line.match(/^[\*\-]\s+\*\*([A-G])\*\*\s*(.*)/i) || 
                     line.match(/^[\*\-]\s+([A-G])[\.\)]\s*(.*)/i) ||
                     line.match(/^([A-G])[\.\)]\s*(.*)/i) ||
                     line.match(/^\*\*([A-G])\*\*\s*(.*)/i);
    if (optMatch && state !== 'explanation' && state !== 'answer') {
      state = 'options';
      options.push(optMatch[2].trim());
      continue;
    }

    const ansLabelMatch = line.match(/^\*\*Answer:\*\*\s*(.*)/i) || line.match(/^Answer:\s*(.*)/i);
    if (ansLabelMatch) {
      state = 'answer';
      const ansVal = ansLabelMatch[1].trim();
      
      // Check if it's a simple A/B/C/D or A, B, D
      const choiceMatch = ansVal.match(/^[A-G](?:\s*,\s*[A-G])*$/i);
      if (choiceMatch) {
          if (ansVal.includes(',') || ansVal.length > 1) {
              correctIndex = ansVal.split(/[, ]+/).filter(Boolean).map(a => a.toUpperCase().charCodeAt(0) - 65);
          } else {
              correctIndex = ansVal.toUpperCase().charCodeAt(0) - 65;
          }
      } else {
          // If it doesn't match A/B/C pattern, it's text
          correctText = ansVal;
      }
      continue;
    }

    const expMatch = line.match(/\*\*Explanation:\*\*\s*(.*)/i) || line.match(/Explanation:\s*(.*)/i) || line.match(/^\*\*Solution:\*\*\s*(.*)/i);
    if (expMatch) {
      state = 'explanation';
      explanation = expMatch[1] + ' ';
      continue;
    }

    if (state === 'question') {
      currentQ.push(line);
    } else if (state === 'explanation') {
      explanation += line + ' ';
    } else if (state === 'options') {
      if (options.length > 0 && !line.match(/^[\*\-]\s/) && !line.match(/^([A-G])[\.\)]/i) && !line.match(/^\*\*([A-G])\*\*/i)) {
        options[options.length - 1] += ' ' + line;
      }
    }
  }

  if (currentQ.length > 0 && (options.length > 0 || correctText !== null)) {
    const qText = currentQ.join('\n').trim();
    const isMultipleChoice = qText.toLowerCase().includes('select all that apply') || (Array.isArray(correctIndex) && (correctIndex as number[]).length > 1);
    
    questions.push({
      question: qText,
      options: [...options],
      correctOptionIndex: correctIndex ?? undefined,
      correctText: correctText ?? undefined,
      explanation: explanation.trim(),
      isMultipleChoice,
      type: correctText !== null ? 'text' : 'mcq'
    });
  }

  return {
    id,
    title,
    questions
  };
}
