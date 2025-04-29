import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/topics`);
      setTopics(res.data);
    }
    fetchTopics();
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      {topics.map((topic) => (
        <div key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
