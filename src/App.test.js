import { render, screen } from '@testing-library/react';
import App from './App';


describe('Counter Testing Suite', () => {
  test('Renders title of counter', () => {
    render(<App />);
    const linkElement = screen.getByText('This is counter app');
    expect(linkElement).toBeInTheDocument();
  });
});
