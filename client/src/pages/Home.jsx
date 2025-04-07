import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [questions, setQuestions] = useState([]); // Initialize as an empty array

    useEffect(() => {
        axios.get('/api/questions')
            .then(res => {
                // Ensure data is an array before setting state
                setQuestions(Array.isArray(res.data) ? res.data : []);
            })
            .catch(err => {
                console.error(err); // Log the error
                setQuestions([]); // Fallback to an empty array on error
            });
    }, []);

    return (
        <div>
            <h1>Code Practice</h1>
            <ul>
                {Array.isArray(questions) && questions.length > 0 ? (
                    questions.map(q => (
                        <li key={q._id || Math.random()}> {/* Fallback key */}
                            <Link to={`/questions/${q._id}`}>{q.title}</Link>
                        </li>
                    ))
                ) : (
                    <li>No questions available</li>
                    )}
            </ul>
        </div>
    );
}