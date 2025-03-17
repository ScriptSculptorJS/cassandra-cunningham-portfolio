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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App