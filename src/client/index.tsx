import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../shared/App';
import './index.css';

const domNode = document.getElementById('root') as HTMLElement;
const root = hydrateRoot(domNode, <App />);
