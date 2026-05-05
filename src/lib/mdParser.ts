import type { MCQQuiz, MCQProblem } from './mcqQuizzes';

export function parseMarkdownQuiz(id: string, markdown: string): MCQQuiz {
  const lines = markdown.split('\n');
  let title = "Quiz";
  const questions: MCQProblem[] = [];
  
  let currentQ: string[] = [];
  let options: string[] = [];
  let correctIndex = 0;
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

    if (line.startsWith('**Question')) {
      if (currentQ.length > 0 && options.length > 0) {
        questions.push({
          question: currentQ.join('\n').trim(),
          options: [...options],
          correctOptionIndex: correctIndex,
          explanation: explanation.trim()
        });
      }
      currentQ = [];
      options = [];
      correctIndex = 0;
      explanation = "";
      state = 'question';
      continue;
    }

    const optMatch = line.match(/^[\*\-]\s+\*\*([A-D])\*\*\s*(.*)/i) || 
                     line.match(/^[\*\-]\s+([A-D])[\.\)]\s*(.*)/i) ||
                     line.match(/^([A-D])[\.\)]\s*(.*)/i) ||
                     line.match(/^\*\*([A-D])\*\*\s*(.*)/i);
    if (optMatch) {
      state = 'options';
      options.push(optMatch[2].trim());
      continue;
    }

    const ansMatch = line.match(/\*\*Answer:\*\*\s*([A-D])/i) || line.match(/Answer:\s*([A-D])/i) || line.match(/^\*\*([A-D])\*\*\s+is the correct/i);
    if (ansMatch) {
      state = 'answer';
      correctIndex = ansMatch[1].toUpperCase().charCodeAt(0) - 65;
      continue;
    }

    const expMatch = line.match(/\*\*Explanation:\*\*\s*(.*)/i) || line.match(/Explanation:\s*(.*)/i);
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
      if (options.length > 0 && !line.match(/^[\*\-]\s/) && !line.match(/^([A-D])[\.\)]/i) && !line.match(/^\*\*([A-D])\*\*/i)) {
        options[options.length - 1] += ' ' + line;
      }
    }
  }

  if (currentQ.length > 0 && options.length > 0) {
    questions.push({
      question: currentQ.join('\n').trim(),
      options: [...options],
      correctOptionIndex: correctIndex,
      explanation: explanation.trim()
    });
  }

  return {
    id,
    title,
    questions
  };
}
