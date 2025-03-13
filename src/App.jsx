import React from 'react';
import Header from './components/header.jsx';
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/projects' element={<h1>Projects</h1>} />
      </Routes>
    </>
  )
}

export default App