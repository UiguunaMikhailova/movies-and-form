import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'Components/Pages/Home';
import NotFound from 'Components/Pages/NotFound';
import About from 'Components/Pages/About';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
