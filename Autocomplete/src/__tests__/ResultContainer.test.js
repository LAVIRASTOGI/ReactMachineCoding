
import { render, fireEvent, screen } from '@testing-library/react';
import ResultContainer from '../Components/ResultContainer';


  test('renders the results', () => {
    const mockSelectHandler = jest.fn();
    const results = [
      { productName: 'Product 1' },
      { productName: 'Product 2' },
    ];

    render(
      <ResultContainer results={results} selectHandler={mockSelectHandler} />
    );

    // Check if the products are rendered
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

  });
  test('renders and responds to click events', () => {
    const mockSelectHandler = jest.fn();
    const results = [
      { productName: 'Product 1' },
      { productName: 'Product 2' },
    ];

    render(
      <ResultContainer results={results} selectHandler={mockSelectHandler} />
    );

    // Check if the products are rendered
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    // Simulate a click event on one of the items
    fireEvent.click(screen.getByText('Product 1'));

    // Check if the selectHandler was called
    expect(mockSelectHandler).toHaveBeenCalled();
  });