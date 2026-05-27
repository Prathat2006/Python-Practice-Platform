import type { MCQQuiz, MCQProblem } from './mcqQuizzes';

export function parseMarkdownQuiz(id: string, markdown: string): MCQQuiz {
  const lines = markdown.split('\n');
  let title = "Quiz";
  let hasSetTitle = false;
  const questions: MCQProblem[] = [];
  
  let currentDataset: { content: string, start?: number, end?: number } | null = null;
  let datasetLines: string[] = [];
  
  let currentQ: string[] = [];
  let options: string[] = [];
  let correctIndex: number | number[] | null = null;
  let correctText: string | null = null;
  let explanation = "";
  let questionNumber: number | null = null;
  
  let state: 'title' | 'question' | 'options' | 'answer' | 'explanation' | 'dataset' | 'idle' = 'idle';

  const pushQuestion = () => {
    if (currentQ.length === 0) return;
    const qText = currentQ.join('\n').trim();
    const isMultipleChoice = qText.toLowerCase().includes('select all that apply') || (Array.isArray(correctIndex) && correctIndex.length > 1);
    
    // Check if current dataset applies to this question
    let datasetToApply: string | undefined = undefined;
    if (currentDataset) {
      if (currentDataset.start && currentDataset.end && questionNumber) {
        if (questionNumber >= currentDataset.start && questionNumber <= currentDataset.end) {
          datasetToApply = currentDataset.content;
        }
      } else {
        datasetToApply = currentDataset.content;
      }
    }

    questions.push({
      question: qText,
      options: [...options],
      correctOptionIndex: correctIndex ?? undefined,
      correctText: correctText ?? undefined,
      explanation: explanation.trim(),
      isMultipleChoice,
      type: correctText !== null ? 'text' : 'mcq',
      dataset: datasetToApply
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      if (state === 'question') currentQ.push('');
      else if (state === 'explanation') explanation += '\n\n';
      else if (state === 'dataset') datasetLines.push('');
      continue;
    }

    if (line.startsWith('### ')) {
      if (!hasSetTitle) {
        title = line.replace('### ', '').trim();
        hasSetTitle = true;
      }
      continue;
    }

    // Dataset detection
    const datasetMatch = line.match(/^\*\*Dataset for Questions (\d+)-(\d+)/i);
    if (datasetMatch || (line.match(/^\*\*Dataset/i) && state !== 'question') || (line.startsWith('|') && state === 'idle')) {
      state = 'dataset';
      datasetLines = [];
      if (datasetMatch) {
        currentDataset = { content: "", start: parseInt(datasetMatch[1]), end: parseInt(datasetMatch[2]) };
      } else {
        currentDataset = { content: "" };
      }
      datasetLines.push(line);
      continue;
    }

    if (line === '---' || line === '***') {
      if (state === 'dataset') {
        if (currentDataset) currentDataset.content = datasetLines.join('\n').trim();
        state = 'idle';
      } else {
        if (line === '***') currentDataset = null;
      }
      continue;
    }

    const qMatch = line.match(/^\*\*Question\s+(\d+)\*\*/i) || line.match(/^\*\*Q\s*(\d+)\*\*/i) || line.match(/^\*\*(\d+)\.\*\*/);
    if (qMatch || line.startsWith('**Question') || line.startsWith('**Q')) {
      pushQuestion();
      
      currentQ = [];
      options = [];
      correctIndex = null;
      correctText = null;
      explanation = "";
      questionNumber = qMatch ? parseInt(qMatch[1]) : null;
      state = 'question';
      
      // If we don't have a dataset range, stay with current dataset until next dataset or reset
      if (currentDataset && currentDataset.end && questionNumber && questionNumber > currentDataset.end) {
          currentDataset = null;
      }
      continue;
    }

    const optMatch = line.match(/^[\*\-]\s+\*\*([A-G])\*\*\s*(.*)/i) || 
                     line.match(/^[\*\-]\s+([A-G])[\.\)]\s*(.*)/i) ||
                     line.match(/^([A-G])[\.\)]\s*(.*)/i) ||
                     line.match(/^\*\*([A-G])\*\*\s*(.*)/i);
    if (optMatch && state !== 'explanation' && state !== 'answer' && state !== 'dataset') {
      state = 'options';
      options.push(optMatch[2].trim());
      continue;
    }

    const ansLabelMatch = line.match(/^\*\*Answer:\*\*\s*(.*)/i) || line.match(/^Answer:\s*(.*)/i);
    if (ansLabelMatch) {
      state = 'answer';
      const ansVal = ansLabelMatch[1].trim();
      
      const choiceMatch = ansVal.match(/^[A-G](?:\s*,\s*[A-G])*$/i);
      if (choiceMatch) {
          if (ansVal.includes(',') || ansVal.length > 1) {
              correctIndex = ansVal.split(/[, ]+/).filter(Boolean).map(a => a.toUpperCase().charCodeAt(0) - 65);
          } else {
              correctIndex = ansVal.toUpperCase().charCodeAt(0) - 65;
          }
      } else {
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
    } else if (state === 'dataset') {
      datasetLines.push(line);
    } else if (state === 'options') {
      if (options.length > 0 && !line.match(/^[\*\-]\s/) && !line.match(/^([A-G])[\.\)]/i) && !line.match(/^\*\*([A-G])\*\*/i)) {
        options[options.length - 1] += ' ' + line;
      }
    }
  }

  pushQuestion();

  return {
    id,
    title,
    questions
  };
}
