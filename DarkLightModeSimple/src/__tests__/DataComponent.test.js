import { render, screen } from "@testing-library/react";
import DataComponent from "../Components/DataComponent";

test("renders DataComponent", () => {
  render(<DataComponent />);
  const darkComponent = screen.getByText("Lavi Rastogi");
  expect(darkComponent).toBeInTheDocument();
});

test('displays correct content', () => {
    render(<DataComponent />);
    expect(screen.getByText(/I specialize in turning static designs/i)).toBeInTheDocument();
    expect(screen.getByText('Lavi Rastogi')).toBeInTheDocument();
    // Add more assertions for other static content
  });

test("displays profile image", () => {
  render(<DataComponent />);
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", "profile.jpg");
});
