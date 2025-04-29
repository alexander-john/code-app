import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SubtopicsPage() {
  const { topicId } = useParams();
  const [subtopics, setSubtopics] = useState([]);

  useEffect(() => {
    async function fetchSubtopics() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/topics/${topicId}/subtopics`);
      setSubtopics(res.data);
    }
    fetchSubtopics();
  }, [topicId]);

  return (
    <div>
      <h1>Subtopics</h1>
      {subtopics.map((subtopic) => (
        <div key={subtopic._id}>
          <Link to={`/topics/${topicId}/${subtopic._id}`}>{subtopic.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default SubtopicsPage;
