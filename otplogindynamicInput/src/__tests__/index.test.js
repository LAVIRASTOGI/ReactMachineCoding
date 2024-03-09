import { render, fireEvent, screen } from "@testing-library/react";
import OTPLogin from "../Components/OTP";

test("renders OTP input fields and handles input", () => {
  render(<OTPLogin otpinputfeilds={4} />);
  const inputFields = screen.getAllByRole("textbox");

  // Check if correct number of input fields are rendered
  expect(inputFields.length).toBe(4);
});

test("renders OTP input fields with no inputOtpFeilds", () => {
    render(<OTPLogin  />);
    const inputFields =  screen.queryByRole("textbox");
    // Check if correct number of input fields are rendered
    expect(inputFields).toBe(null);
  });

test("renders OTP input fields handles input onChange", () => {
  render(<OTPLogin otpinputfeilds={4} />);
  const inputFields = screen.getAllByRole("textbox");

  // Simulate user input
  fireEvent.change(inputFields[0], { target: { value: "1" } });
  fireEvent.change(inputFields[1], { target: { value: "2" } });
  fireEvent.change(inputFields[2], { target: { value: "3" } });
  fireEvent.change(inputFields[3], { target: { value: "4" } });

  // Check if input values are correct
  expect(inputFields[0].value).toBe("1");
  expect(inputFields[1].value).toBe("2");
  expect(inputFields[2].value).toBe("3");
  expect(inputFields[3].value).toBe("4");
});

test("handles NaN values correctly", () => {
  render(<OTPLogin otpinputfeilds={4} />);
  const inputFields = screen.getAllByRole("textbox");

  // Simulate user input
  fireEvent.change(inputFields[0], { target: { value: "1uu" } });

  // Check if input values are correct
  expect(inputFields[0].value).toBe("");

  fireEvent.change(inputFields[0], { target: { value: "1" } });

  expect(inputFields[0].value).toBe("1");
});

test("focuses on the next input when  when a value is entered", () => {
  render(<OTPLogin otpinputfeilds={3} />);
  const inputFields = screen.getAllByRole("textbox");

  fireEvent.change(inputFields[0], { target: { value: "1" } });

  expect(document.activeElement).toBe(inputFields[1]);
});

test("moves focus to the previous input field when Backspace is pressed", () => {
  render(<OTPLogin otpinputfeilds={3} />);
  const inputFields = screen.getAllByRole("textbox");

  fireEvent.change(inputFields[0], { target: { value: "1" } });
  fireEvent.change(inputFields[1], { target: { value: "2" } });
  fireEvent.keyUp(inputFields[1], { code: "Backspace" });

  expect(document.activeElement).toBe(inputFields[0]);
});

test("not moves focus to the previous input field even if Backspace is pressed for first element", () => {
  render(<OTPLogin otpinputfeilds={3} />);
  const inputFields = screen.getAllByRole("textbox");

  fireEvent.change(inputFields[0], { target: { value: "1" } });
  fireEvent.keyUp(inputFields[0], { code: "Backspace" });

   expect(inputFields[0].value).toBe('1');
});
