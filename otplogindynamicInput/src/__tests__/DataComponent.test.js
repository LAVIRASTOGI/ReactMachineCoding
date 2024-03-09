import { render, screen } from "@testing-library/react";
import DataComponent from "../Components/DataComponent";

test('renders without crashing', () => {
    render(<DataComponent />);
});

test('renders OTP LOGIN header', () => {
    render(<DataComponent />);
    const linkElement = screen.getByText(/OTP LOGIN/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders OTP input fields', () => {
    render(<DataComponent />);
    const otpInputs = screen.getAllByRole('textbox');
    expect(otpInputs).toHaveLength(5);
  });

  