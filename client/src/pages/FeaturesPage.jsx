import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function FeaturesPage() {
  const { topicSlug, subtopicSlug } = useParams();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/subtopics/${subtopicSlug}/features`);
      setFeatures(res.data);
    }
    fetchFeatures();
  }, [subtopicSlug]);

  return (
    <div>
      <h1>Features</h1>
      {features.map((feature) => (
        <div key={feature.slug}>
          <Link to={`/topics/${topicSlug}/${subtopicSlug}/${feature.slug}`}>{feature.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default FeaturesPage;
