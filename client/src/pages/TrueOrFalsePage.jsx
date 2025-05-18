import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { technologies } from '../data/technologies';

function TrueOrFalsePage() {
  const { languageSlug, bookSlug, chapterSlug } = useParams();
  const featureSlug = 'true-false-quiz';

  const feature =
    technologies?.[languageSlug]
      ?.books?.[bookSlug]
      ?.chapters?.[chapterSlug]
      ?.features?.[featureSlug];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!feature) return <div>True/False Quiz not found for this chapter.</div>;

  const questions = feature.questions || [];
  const isLast = current === questions.length - 1;

  const handleChange = (value) => {
    setAnswers({ ...answers, [current]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!isLast) {
      setCurrent(current + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrent(0);
  };

  if (submitted) {
    return (
      <div>
        <h1>{feature.title}</h1>
        <h2>Results</h2>
        <ul>
          {questions.map((q, idx) => (
            <li key={idx}>
              {q.question}
              <div>
                {String(q.answer) === answers[idx]
                  ? <span style={{ color: 'green' }}>Correct!</span>
                  : <span style={{ color: 'red' }}>Incorrect. Correct answer: {q.answer ? 'True' : 'False'}</span>
                }
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{feature.title}</h1>
      <form onSubmit={handleNext}>
        <div>
          <strong>Question {current + 1} of {questions.length}</strong>
          <div style={{ margin: '1em 0' }}>{questions[current]?.question}</div>
          <label>
            <input
              type="radio"
              name={`q${current}`}
              value="true"
              checked={answers[current] === 'true'}
              onChange={() => handleChange('true')}
            />
            True
          </label>
          <label style={{ marginLeft: '1em' }}>
            <input
              type="radio"
              name={`q${current}`}
              value="false"
              checked={answers[current] === 'false'}
              onChange={() => handleChange('false')}
            />
            False
          </label>
        </div>
        <button type="submit" disabled={answers[current] === undefined}>
          {isLast ? 'Submit' : 'Next'}
        </button>
      </form>
    </div>
  );
}

export default TrueOrFalsePage;