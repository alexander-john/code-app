import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor.jsx';

export default function QuestionPage() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/questions/${id}`)
            .then(res => {
                setQuestion(res.data);
                setUserCode(res.data.starterCode);
            })
            .catch(console.error);
    }, [id]);

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/code/submit`, {
                questionId: id,
                userCode
            });
            setResult(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    if (!question) return <p>Loading...</p>;

    return (
        <div>
            <Link to="/">← Back to Home</Link>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <CodeEditor code={userCode} onChange={setUserCode} />
            <button onClick={handleSubmit}>Submit</button>
            {result && (
                <div>
                    <h3>Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
