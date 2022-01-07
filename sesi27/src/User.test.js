import { render, screen, waitFor } from '@testing-library/react';
import Users from '../src/pages/Users';

test('Render halaman Users dengan benar', async () => {
  render(<Users />);

  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Back to Home')
  
  const user = await waitFor(()=>{
      return screen.findByText('Leanne Graham')
  },{timeout:5000})
  expect(user).toBeInTheDocument()
});