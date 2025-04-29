// React is used to build the component-based UI.
import React from 'react';

// React Router is used for client-side routing to create a single-page application (SPA).
// - `BrowserRouter` provides the routing context for the app.
// - `Routes` is used to define multiple routes.
// - `Route` maps a specific path to a component.
// - Dynamic route parameters (e.g., `:id` and `:name`) allow for flexible and dynamic URLs.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SubtopicsPage from './pages/SubTopicsPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/topics/:topicSlug" element={<SubtopicsPage />} />
                <Route path="/topics/:topicSlug/:subtopicSlug" element={<FeaturesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
