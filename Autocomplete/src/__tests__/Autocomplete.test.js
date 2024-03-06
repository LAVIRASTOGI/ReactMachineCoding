import { fireEvent, render, screen } from "@testing-library/react";
import Autocomplete from "../Components/Autocomplete";

test('renders without crashing', () => {
    render(<Autocomplete options={[]} />);
  });

  test('input field accepts input', () => {
    render(<Autocomplete options={[]} />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('ResultContainer is rendered when there are filtered results', async () => {
    render(<Autocomplete options={[{productName: 'Test Product'}]} />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'Test' } });
    const item = await screen.findByText('Test Product');
    expect(item).toBeInTheDocument();
  });

  test('ResultContainer is not rendered when there are no filtered results', () => {
    render(<Autocomplete options={[]} />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'test' } });
    const resultContainer = screen.queryByText('test');
    expect(resultContainer).toBeNull();
  });

  test('ResultContainer change Event tiggred', async() => {
    render(<Autocomplete options={[{productName: 'Test Product'}]} />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'test' } });
    const resultContainerItem = await screen.findByText('Test Product');
    fireEvent.click(resultContainerItem);
    expect(input.value).toBe('Test Product');
  });

  test('ResultContainer change Event tiggred and filteredData length is empty', async() => {
    render(<Autocomplete options={[{productName: 'Test Product'}]} />);
    const input = screen.getByPlaceholderText('Type something...');
    fireEvent.change(input, { target: { value: 'test' } });
    const resultContainerItem = await screen.findByText('Test Product');
    fireEvent.click(resultContainerItem);
    const resultContainer = screen.queryByText('Test Product');
    expect(resultContainer).toBeNull();

  });