import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayComponent from '../Components/DisplayComponent';

test('renders product name and image', () => {
  const product = {
    productName: 'Test Product',
    image: 'test-image.jpg'
  };

  render(<DisplayComponent product={product} />);
 expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByAltText('Test Product')).toHaveAttribute('src', 'test-image.jpg');
});