// HomePage: Lists all available technologies (languages) with links to their books.

import { technologies } from '../data/technologies';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Technologies</h1>
      {/* Render a link for each technology */}
      {Object.entries(technologies).map(([slug, technology]) => (
        <div key={slug}>
          <Link to={`/technologies/${slug}/books`}>{technology.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
