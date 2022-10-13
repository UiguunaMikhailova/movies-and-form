import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from 'Components/pages/about';
import Home from 'Components/pages/home';
import NotFound from 'Components/pages/NotFound';
import FormPage from 'Components/pages/FormPage/FormPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
