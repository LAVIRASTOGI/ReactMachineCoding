import { render, screen } from "@testing-library/react";
import Navbar from "../Components/Navbar";

test("renders NavBar component", () => {
  render(<Navbar />);
  const appElement = screen.getByText("Home");
  expect(appElement).toBeInTheDocument();
});

test("renders correct number of links", () => {
  render(<Navbar />);
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(4);
});

test("renders Home link as active", () => {
  render(<Navbar />);
  const activeLink = screen.getByRole("link", { name: /home/i });
  expect(activeLink).toHaveClass("active");
});

test('renders DarkComponent', () => {
    render(<Navbar />);
    const darkComponent = screen.getByText('Theme');
    expect(darkComponent).toBeInTheDocument();
  });
