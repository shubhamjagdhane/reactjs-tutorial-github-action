import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paraElement = screen.getByText("This is Simple (CI\/CD) Github Action Tutorial", document.querySelector("p"));
  expect(paraElement).toBeInTheDocument();
});
