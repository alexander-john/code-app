import { useParams, Link } from 'react-router-dom';
import { technologies } from '../data/technologies';

function FeaturesPage() {
    const { languageSlug, bookSlug } = useParams();
    const language = technologies[languageSlug];
    const book = language?.books?.[bookSlug];

    if (!language) return <div>Language not found.</div>;
    if (!book) return <div>Book not found.</div>;

    // If chapters exist, list them
    if (book.chapters) {
        return (
            <div>
                <h1>Chapters in {book.title}</h1>
                <ul>
                    {Object.entries(book.chapters).map(([chapterSlug, chapter], idx) => (
                        <li key={chapterSlug}>
                            <Link to={`/technologies/${languageSlug}/${bookSlug}/${chapterSlug}`}>
                                {`Chapter ${idx + 1}: ${chapter.title}`}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return <div>No chapters found for this book.</div>;
}

export default FeaturesPage;