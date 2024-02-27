import { render } from "@testing-library/react";
import App from "../App";

test('counter component renders', () => {
    const { getByText } = render(<App />);
    
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    const counterDisplay = getByText(/Counter:/i);
  
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(counterDisplay).toBeInTheDocument();
  });