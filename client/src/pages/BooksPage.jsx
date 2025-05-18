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
            {Object.entries(language.books).map(([bookSlug, book]) => (
                <div key={bookSlug}>
                    <h2>{book.title}</h2>
                    {book.chapters ? (
                        <ul>
                            {Object.entries(book.chapters).map(([chapterSlug, chapter], idx) => (
                                <li key={chapterSlug}>
                                    <Link to={`/technologies/${languageSlug}/${bookSlug}/${chapterSlug}`}>
                                        {`Chapter ${idx + 1}: ${chapter.title}`}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No chapters found.</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default BooksPage;