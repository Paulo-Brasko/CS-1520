import { render, screen } from '@testing-library/react';
import App from './App';

test('starts off with loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/table loading/i);
  expect(linkElement).toBeInTheDocument();
});
