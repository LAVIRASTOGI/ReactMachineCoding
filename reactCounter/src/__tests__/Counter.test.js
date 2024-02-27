import { render, fireEvent } from '@testing-library/react';
import Counter from '../Components/Counter';

test('counter component renders ', () => {
    const { getByText } = render(<Counter />);
    
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    const counterDisplay = getByText(/Counter:/i);
  
    expect(incrementButton.textContent).toBe('+');
    expect(decrementButton.textContent).toBe('-');
    expect(counterDisplay).toBeInTheDocument();
  });
test('initial value of counter', () => {
  const { getByText } = render(<Counter />);
  
  const counterDisplay = getByText(/Counter:/i);

  expect(counterDisplay.textContent).toBe('Counter:0');
});
test('counter increments when the button is clicked', () => {
    const { getByText } = render(<Counter />);
    
    const incrementButton = getByText('+');
    const counterDisplay = getByText(/Counter:/i);
  
    // Test increment
    fireEvent.click(incrementButton);
    expect(counterDisplay.textContent).toBe('Counter:1');
  
  });
  test('counter decrements when the button is clicked', () => {
    const { getByText } = render(<Counter />);
    
    const decrementButton = getByText('-');
    const counterDisplay = getByText(/Counter:/i);
  
  
    // Test decrement
    fireEvent.click(decrementButton);
    expect(counterDisplay.textContent).toBe('Counter:-1');
  });