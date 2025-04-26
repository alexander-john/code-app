import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewHome() {
    const [topics, setTopics] = useState([]); // State to store topics

    // Fetch topics from the backend API when the component mounts
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/topics`)
            .then(res => {
                setTopics(res.data); // Set the fetched topics in state
            })
            .catch(err => {
                console.error('Error fetching topics:', err);
            });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1>New Home</h1>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.name}>
                        <Link to={`/${topic.name}`}>{topic.title}</Link>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}