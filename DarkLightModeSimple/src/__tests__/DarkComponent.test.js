import { render, fireEvent, screen } from '@testing-library/react';
import DarkComponent from '../Components/DarkComponent';


test('renders DarkComponent correctly', () => {
  render(<DarkComponent />);
  expect(screen.getByText('Theme')).toBeInTheDocument()

});
test('renders Component correctly with checkbox false and value light', () => {
    render(<DarkComponent />);
    let checkboxvalue=screen.getByRole('checkbox')
    expect(checkboxvalue.checked).toEqual(false)
  });

test('toggles to dark theme', () => {
  render(<DarkComponent />);
  let checkbox=screen.getByRole('checkbox')
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  expect(document.body.getAttribute('data-theme')).toBe('dark');
});

test('toggles back to light theme', () => {
    render(<DarkComponent />);
    let checkbox=screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
    expect(document.body.getAttribute('data-theme')).toBe('light');
});