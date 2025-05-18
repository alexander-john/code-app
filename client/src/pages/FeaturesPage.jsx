import { useParams, Link } from 'react-router-dom';
import { technologies } from '../data/technologies';

function ChapterPage() {
    const { languageSlug, bookSlug, chapterSlug } = useParams();
    const language = technologies[languageSlug];
    const book = language?.books?.[bookSlug];
    const chapter = book?.chapters?.[chapterSlug];

    if (!language) return <div>Language not found.</div>;
    if (!book) return <div>Book not found.</div>;
    if (!chapter) return <div>Chapter not found.</div>;

    return (
        <div>
            <h1>{chapter.title}</h1>
            <h2>Features</h2>
            {chapter.features ? (
                <ul>
                    {Object.entries(chapter.features).map(([featureSlug, feature]) => (
                        <li key={featureSlug}>
                            <Link to={`/technologies/${languageSlug}/${bookSlug}/${chapterSlug}/${featureSlug}`}>
                                {feature.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No features found for this chapter.</p>
            )}
        </div>
    );
}

export default ChapterPage;