import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import axios from 'axios';
import { vi } from 'vitest';

vi.mock('axios');

test('renders topics from API', async () => {
  axios.get.mockResolvedValueOnce({
    data: [{ title: 'JavaScript', slug: 'javascript' }]
  });

  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const topic = await screen.findByText('JavaScript');
  expect(topic).toBeInTheDocument();
});
