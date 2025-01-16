import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// If the server (or react-snap) has already pre-rendered content in #root,
// we "hydrate" that content. Otherwise, we do a normal "render".
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  // For normal client rendering in React 18, use createRoot:
  createRoot(rootElement).render(<StrictApp />);
}
