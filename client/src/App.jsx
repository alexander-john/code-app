import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/technologies" />} />
                <Route path="/technologies" element={<HomePage />} />

                <Route path="/technologies/:languageSlug/books" element={<BooksPage />} />

                <Route path="/technologies/:languageSlug/:bookSlug/features" element={<FeaturesPage />} />

                {/* <Route path="/topics/:topicSlug/:subtopicSlug" element={<FeaturesPage />} />
                <Route path="topics/:topicSlug/:subtopicSlug/:featureSlug" element={<FeatureLayoutPage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
