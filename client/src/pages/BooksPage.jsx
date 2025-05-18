import { useParams, Link } from 'react-router-dom';
import { technologies } from '../data/technologies';

function BooksPage() {
    const { languageSlug } = useParams();
    const language = technologies[languageSlug];

    if (!language) {
        return <div>Language not found.</div>;
    }

    return (
        <div>
            <h1>{language.title} Books</h1>
            <ul>
                {Object.entries(language.books).map(([bookSlug, book]) => (
                    <li key={bookSlug}>
                        <Link to={`/technologies/${languageSlug}/${bookSlug}`}>
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BooksPage;