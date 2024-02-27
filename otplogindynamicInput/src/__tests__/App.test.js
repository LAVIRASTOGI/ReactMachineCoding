import { logRoles, render, screen } from "@testing-library/react";
import App from "../App";

test("renders App component", () => {
  //  const {container}=render(<App />);
  //  //log roles what can be
  //  logRoles(container)
  render(<App />);
});

test("renders DataComponent component", () => {
  render(<App />);
  expect(screen.getByText("OTP LOGIN")).toBeInTheDocument();
});

