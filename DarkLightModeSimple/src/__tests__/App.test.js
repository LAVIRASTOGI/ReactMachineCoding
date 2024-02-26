import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders NavBar Component', () => {
  render(<App />);
  const navElement = screen.getByText("Home");
  expect(navElement).toBeInTheDocument();
});

test('renders DataComponent', () => {
  render(<App />);
  const darkComponent = screen.getByText('Lavi Rastogi');
  expect(darkComponent).toBeInTheDocument();
});

   