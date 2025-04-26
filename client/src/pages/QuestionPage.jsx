import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor.jsx';
import QuestionDetails from '../components/QuestionDetails.jsx';

export default function QuestionPage() {
    // Extract the question id from the URL parameters.
    const { id } = useParams();

    // Local state to store the question data, user code, and the submission result.
    const [question, setQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [result, setResult] = useState(null);

    // Fetch the question details from the backend API when the component mounts or when id changes.
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/questions/${id}`)
            .then(res => {
                // Set the question data from the response.
                setQuestion(res.data);
                // Initialize the code editor with the starter code provided by the question.
                setUserCode(res.data.starterCode);
            })
            .catch(err => {
                // Log any errors during the fetch operation.
                console.error('Error fetching question:', err);
            });
    }, [id]); // Dependency array makes sure the effect runs when id changes.

    // Function to submit user code for execution.
    const handleSubmit = async () => {
        try {
            // Post the user code and question id to the API endpoint.
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/code/submit`, {
                questionId: id,
                userCode
            });
            // Update the result state with the response data.
            setResult(res.data);
        } catch (err) {
            // Log any errors that occur during the code submission.
            console.error('Error submitting code:', err);
        }
    };

    // If question data has not been fetched yet, display a loading message.
    if (!question) return <p>Loading...</p>;

    return (
        <div>
            {/* Link to navigate back to the homepage */}
            <Link to="/">← Back to Home</Link>

            {/* Display the question title and description */}
            <QuestionDetails question={question} />

            {/* Code editor component for user code input */}
            <CodeEditor code={userCode} onChange={setUserCode} />

            {/* Button for submitting the code */}
            <button onClick={handleSubmit}>Submit</button>

            {/* Conditional rendering of the result after code submission */}
            {result && (
                <div>
                    <h3>Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
