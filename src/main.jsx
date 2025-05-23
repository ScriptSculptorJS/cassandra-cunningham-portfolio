import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/header.css';
import './styles/contact-bar.css';
import './styles/greeting.css';
import './styles/about-me.css';
import './styles/project.css';
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router basename="/cassandra-cunningham-portfolio">
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
)
