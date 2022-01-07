import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button in on state', () => {
  render(<App />);
  const linkElement = screen.getByText(/on/i);
  expect(linkElement).toBeInTheDocument();
});
