/**
 * App.jsx
 * 
 * PURPOSE:
 * This is the main entry point for the React application. It defines the routing structure
 * for the app using React Router, enabling navigation between different pages.
 * 
 * HOW IT WORKS:
 * - React Router is used to create a Single Page Application (SPA), where navigation
 *   between pages does not require a full page reload.
 * - The `BrowserRouter` component provides the routing context for the app.
 * - The `Routes` component contains all the route definitions.
 * - Each `Route` maps a specific URL path to a React component, rendering the appropriate
 *   page based on the current URL.
 * - Dynamic route parameters (e.g., `:topicSlug`, `:subtopicSlug`) allow for flexible
 *   and dynamic URLs, enabling the app to handle nested content like topics and subtopics.
 * 
 * KEY COMPONENTS:
 * - `HomePage`: The landing page of the application.
 * - `SubtopicsPage`: Displays subtopics for a selected topic.
 * - `FeaturesPage`: Displays features for a selected subtopic.
 * - `ComingSoonPage`: Placeholder for features that are under development.
 * 
 * HOW TO READ THIS FILE:
 * 1. The `Router` wraps the entire app, enabling routing functionality.
 * 2. The `Routes` component defines all the possible routes in the app.
 * 3. Each `Route` specifies a `path` (URL) and the corresponding `element` (React component).
 * 4. Dynamic segments in the `path` (e.g., `:topicSlug`) are placeholders for URL parameters.
 */

import React from 'react';
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
