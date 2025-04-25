import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    // State to hold the list of questions retrieved from the API.
    const [questions, setQuestions] = useState([]); // Initialize as an empty array.

    // useEffect runs once on component mount.
    useEffect(() => {
        // Make a GET request to fetch the questions from the backend API.
        axios.get(`${import.meta.env.VITE_API_URL}/api/questions`)
            .then(res => {
                // Check if the response data is an array before updating state.
                setQuestions(Array.isArray(res.data) ? res.data : []);
            })
            .catch(err => {
                // Log any errors to the console for debugging purposes.
                console.error(err);
                // On error, ensure questions state is set to an empty array.
                setQuestions([]);
            });
    }, []); // Empty dependency array ensures this runs only once on mount.
    // Without the empty array, useEffect would run on every render.
    // It wont run again unless the component is unmounted and remounted.

    const renderQuestions = () => {
        // Check if questions array exists and contains at least one question.
        if (Array.isArray(questions) && questions.length > 0) {
            // Map over each question to create a list item with a link.
            return questions.map((q) => (
                <li key={q._id || Math.random()}>
                    <Link to={`/questions/${q._id}`}>
                        {q.title}
                    </Link>
                </li>
            ));
        }
        // If no questions exist, return a fallback message.
        return <li>No questions available</li>;
    };

    return (
        <div>
            <h1>Code Practice</h1>
            <ul>
                {renderQuestions()}
            </ul>
        </div>
    );
}