import React, { useState } from 'react';
// If using @monaco-editor/react, install it: npm install @monaco-editor/react
import MonacoEditor from '@monaco-editor/react';

function CodeChallengeLayout({ feature }) {
  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  if (!feature) return <div>Challenge not found.</div>;

  const challenges = feature.challenges || [];
  const challenge = challenges[current];

  const handleNext = () => {
    setShowSolution(false);
    setCode('');
    setCurrent((prev) => (prev + 1 < challenges.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setShowSolution(false);
    setCode('');
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <h1>{feature.title}</h1>
      <h2>Challenge {current + 1} of {challenges.length}</h2>
      <div style={{ marginBottom: '1em' }}>{challenge.prompt}</div>
      <MonacoEditor
        height="200px"
        defaultLanguage="javascript"
        value={code}
        onChange={value => setCode(value)}
        options={{ minimap: { enabled: false } }}
      />
      <div style={{ margin: '1em 0' }}>
        <button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution && (
          <pre style={{ background: '#f4f4f4', padding: '1em', marginTop: '1em' }}>
            {challenge.solution}
          </pre>
        )}
      </div>
      <div>
        <button onClick={handlePrev} disabled={current === 0}>Previous</button>
        <button onClick={handleNext} disabled={current === challenges.length - 1} style={{ marginLeft: '1em' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CodeChallengeLayout;