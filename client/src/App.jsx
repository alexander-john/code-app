// React is used to build the component-based UI.
import React from 'react';

// React Router is used for client-side routing to create a single-page application (SPA).
// - `BrowserRouter` provides the routing context for the app.
// - `Routes` is used to define multiple routes.
// - `Route` maps a specific path to a component.
// - Dynamic route parameters (e.g., `:id` and `:name`) allow for flexible and dynamic URLs.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SubtopicsPage from './pages/SubtopicsPage';
import FeaturesPage from './pages/FeaturesPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:topicSlug" element={<SubtopicsPage />} />
                <Route path="/:topicSlug/:subtopicSlug" element={<FeaturesPage />} />
                <Route path="/:topicSlug/:subtopicSlug/:featureSlug" element={<ComingSoonPage />} />
            </Routes>
        </Router>
    );
}

export default App;
