import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import ChaptersPage from './pages/ChaptersPage';
import FeaturesPage from './pages/FeaturesPage';
import TrueOrFalsePage from './pages/TrueOrFalsePage';
import FeatureLayoutPage from './pages/FeatureLayoutPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/technologies" />} />
                <Route path="/technologies" element={<HomePage />} />

                <Route path="/technologies/:languageSlug/books" element={<BooksPage />} />

                <Route path="/technologies/:languageSlug/:bookSlug" element={<ChaptersPage />} />

                <Route path="/technologies/:languageSlug/:bookSlug/:chapterSlug" element={<FeaturesPage />} />

                <Route path="/technologies/:languageSlug/:bookSlug/:chapterSlug/:featureSlug" element={<FeatureLayoutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
