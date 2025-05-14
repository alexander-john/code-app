/**
 * HomePage.jsx
 * 
 * PURPOSE:
 * This component renders the homepage of the application, displaying a list of topics fetched from the backend API.
 * It allows users to navigate to individual topic pages by clicking on the topic links.
 * 
 * HOW IT WORKS:
 * - The `useEffect` hook is used to fetch the list of topics from the backend API when the component mounts.
 * - The `useState` hook manages the state of the topics, storing the fetched data.
 * - The `axios` library is used to make an HTTP GET request to the API endpoint defined in the `VITE_API_URL` environment variable.
 * - The `Link` component from `react-router-dom` is used to create navigation links for each topic, enabling client-side routing.
 * 
 * KEY COMPONENTS:
 * - `useEffect`: Executes the `fetchTopics` function after the component is rendered to fetch data from the API.
 * - `useState`: Manages the `topics` state, which holds the list of topics fetched from the API.
 * - `axios`: Simplifies making HTTP requests to the backend API.
 * - `Link`: Generates clickable links for each topic, allowing users to navigate to topic-specific pages.
 * 
 * HOW TO READ THIS FILE:
 * 1. The `useState` hook initializes the `topics` state as an empty array.
 * 2. The `useEffect` hook defines and calls the `fetchTopics` function to fetch data from the API.
 * 3. The `topics` state is updated with the fetched data, triggering a re-render of the component.
 * 4. The `topics.map` function iterates over the list of topics, rendering a `Link` for each topic.
 * 5. Each `Link` navigates to a dynamic route based on the topic's `slug`.
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/topics`);
      setTopics(res.data);
    }
    fetchTopics();
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      {topics.map((topic) => (
        <div key={topic.slug}>
          <Link to={`/${topic.slug}`}>{topic.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
