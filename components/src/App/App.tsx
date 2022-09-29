import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/header/header';
import Home from 'components/pages/home/home';
import About from 'components/pages/about/about';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
