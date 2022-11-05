import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from 'Components/pages/about';
import Home from 'Components/pages/home';
import FormPage from 'Components/pages/FormPage';
import NotFound from 'Components/pages/NotFound';
import CardElement from 'Components/CardElement';
import { useAppSelector } from 'hooks/redux';

export default function App() {
  const { page } = useAppSelector((state) => state.MovieSlice);
  return (
    <div className="App">
      <Routes>
        <Route path={`movies/page=${page}&id=:id`} element={<CardElement />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
