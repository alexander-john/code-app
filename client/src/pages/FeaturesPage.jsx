import { useParams, Link } from 'react-router-dom';
import { technologies } from '../data/technologies';

function FeaturesPage() {
    const { languageSlug, bookSlug } = useParams();
    const language = technologies[languageSlug];
    const book = language?.books?.[bookSlug];

    if (!language) return <div>Language not found.</div>;
    if (!book) return <div>Book not found.</div>;

    return (
        <div>
            <h1>Features for {book.title}</h1>
            {Object.entries(book.features).map(([featureSlug, feature]) => (
                <div key={featureSlug}>
                    <Link to={`/features/${languageSlug}/${bookSlug}/${featureSlug}`}>
                        {feature.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FeaturesPage;