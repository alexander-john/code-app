import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Test that HomePage renders topics from the technologies data file
test('renders topics from technologies data', () => {
  // Render HomePage inside a MemoryRouter for routing context
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  // Assert that known topics from the technologies file appear in the document
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
  expect(screen.getByText('Python')).toBeInTheDocument();
  expect(screen.getByText('Linux')).toBeInTheDocument();
});
