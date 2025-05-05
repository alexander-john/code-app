// PURPOSE: This component renders the homepage of the application, displaying a list of topics fetched from the backend API.
// It allows users to navigate to individual topic pages by clicking on the topic links.

import { useEffect, useState } from 'react';
// WHAT: Imports React hooks `useEffect` and `useState`.
// WHY: `useState` is used to manage the state of the topics, and `useEffect` is used to fetch data when the component mounts.
// HOW: These hooks are imported from the React library to enable state management and side effects.

import { Link } from 'react-router-dom';
// WHAT: Imports the `Link` component from `react-router-dom`.
// WHY: The `Link` component is used to create navigation links to other pages in the application.
// HOW: `Link` generates anchor tags (`<a>`) that work with React Router for client-side navigation.

import axios from 'axios';
// WHAT: Imports the `axios` library for making HTTP requests.
// WHY: `axios` is used to fetch data from the backend API.
// HOW: The `axios` library is imported to simplify making GET requests to the API.

function HomePage() {
  const [topics, setTopics] = useState([]);
  // WHAT: Initializes the `topics` state variable as an empty array.
  // WHY: The `topics` state holds the list of topics fetched from the backend API.
  // HOW: The `useState` hook is used to create the `topics` state and its updater function `setTopics`.

  useEffect(() => {
    async function fetchTopics() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/topics`);
      // WHAT: Fetches the list of topics from the backend API.
      // WHY: The application needs to display the topics on the homepage.
      // HOW: The `axios.get` method sends a GET request to the API endpoint defined in the environment variable `VITE_API_URL`.

      setTopics(res.data);
      // WHAT: Updates the `topics` state with the data fetched from the API.
      // WHY: The component needs to re-render with the fetched topics.
      // HOW: The `setTopics` function updates the state, triggering a re-render of the component.
    }
    fetchTopics();
    // WHAT: Calls the `fetchTopics` function when the component mounts.
    // WHY: The topics need to be fetched as soon as the homepage is loaded.
    // HOW: The `useEffect` hook ensures the `fetchTopics` function is executed after the component is rendered.
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      {topics.map((topic) => (
        <div key={topic.slug}>
          <Link to={`/${topic.slug}`}>{topic.title}</Link>
          {/* WHAT: Creates a clickable link for each topic.
              WHY: Allows users to navigate to the page for a specific topic.
              HOW: The `Link` component generates a client-side navigation link using the topic's `slug`. */}
        </div>
      ))}
    </div>
  );
}

export default HomePage;
// WHAT: Exports the `HomePage` component as the default export.
// WHY: This allows the component to be imported and used in other parts of the application.
// HOW: The `export default` statement makes the `HomePage` component available for import.
