import { render } from "@testing-library/react";
import App from "../App";

test('app component renders', () => {
    const screen = render(<App />);
    
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    const counterDisplay = screen.getByText(/Counter:/i);
  
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(counterDisplay).toBeInTheDocument();
  });