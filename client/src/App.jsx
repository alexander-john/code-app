import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/QuestionPage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions/:id" element={<Question />} />
            </Routes>
        </Router>
    );
}

export default App;
