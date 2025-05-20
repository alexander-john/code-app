import React, { useState } from 'react';

function MultipleChoicePage({ feature }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!feature) return <div>Quiz not found.</div>;

  const handleChange = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>{feature.title}</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {feature.questions?.map((q, idx) => (
            <li key={idx} style={{ marginBottom: '1.5em' }}>
              <div>{q.question}</div>
              {q.options.map((option, oIdx) => (
                <label key={oIdx} style={{ display: 'block', marginLeft: '1em' }}>
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={option}
                    checked={answers[idx] === option}
                    onChange={() => handleChange(idx, option)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              ))}
              {submitted && (
                <div>
                  {answers[idx] === q.answer
                    ? <span style={{ color: 'green' }}>Correct!</span>
                    : <span style={{ color: 'red' }}>Incorrect. Correct answer: {q.answer}</span>
                  }
                </div>
              )}
            </li>
          ))}
        </ul>
        {!submitted && (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
}

export default MultipleChoicePage;