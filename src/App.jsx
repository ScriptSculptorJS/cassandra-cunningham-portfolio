import React from 'react';
import Header from './components/header.jsx';
import ContactBar from './components/contact-bar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <ContactBar />

      <Routes>
        <Route path='/cassandra-cunningham-portfolio/' element={<Home />} />
        <Route path='/cassandra-cunningham-portfolio/about' element={<About />} />
        <Route path='/cassandra-cunningham-portfolio/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App