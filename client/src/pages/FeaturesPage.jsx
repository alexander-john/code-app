import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FeaturesPage() {
  const { subtopicId } = useParams();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/subtopics/${subtopicId}/features`);
      setFeatures(res.data);
    }
    fetchFeatures();
  }, [subtopicId]);

  return (
    <div>
      <h1>Features</h1>
      {features.map((feature) => (
        <div key={feature._id}>{feature.title}</div>
      ))}
    </div>
  );
}

export default FeaturesPage;
