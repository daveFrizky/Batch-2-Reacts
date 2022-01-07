import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Render halaman home dengan benar', () => {
  render(<App />);

  const title = screen.getByText(/why do we need test ?/i)
  expect(title).toBeInTheDocument();

  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Users List')

  fireEvent.click(button)

  const backToHomeButton = screen.getByRole('button')
  expect(backToHomeButton).toBeInTheDocument()
  expect(backToHomeButton).toHaveTextContent('Back to Home')

});