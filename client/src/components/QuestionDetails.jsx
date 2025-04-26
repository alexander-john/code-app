import React from 'react';

export default function QuestionDetails({ question }) {
    return (
        <div>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
        </div>
    );
}