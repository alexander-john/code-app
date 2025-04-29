import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SubtopicsPage() {
  const { topicSlug } = useParams();
  const [subtopics, setSubtopics] = useState([]);

  useEffect(() => {
    async function fetchSubtopics() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/topics/${topicSlug}/subtopics`);
      setSubtopics(res.data);
    }
    fetchSubtopics();
  }, [topicSlug]);

  return (
    <div>
      <h1>Subtopics</h1>
      {subtopics.map((subtopic) => (
        <div key={subtopic.slug}>
          <Link to={`/topics/${topicSlug}/${subtopic.slug}`}>{subtopic.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default SubtopicsPage;
