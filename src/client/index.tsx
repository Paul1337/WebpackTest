import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../shared/App';
import './index.css';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
const root = createRoot(rootNode);

root.render(<App />);
