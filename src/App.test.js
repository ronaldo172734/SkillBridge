// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SkillBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SkillBridge/i);
    expect(titleElement).toBeInTheDocument();
});
