import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from 'Components/pages/about';
import Home from 'Components/pages/home';
import FormPage from 'Components/pages/FormPage';
import NotFound from 'Components/pages/NotFound';
import CardElement from 'Components/CardElement';
import { initialState, reducer } from 'Reducer';
import { TContext } from 'types';

export const Context = React.createContext<TContext>({
  state: initialState,
  dispatch: () => null,
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routes>
          <Route path={`movies/page=${state.page}&id=:id`} element={<CardElement />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}
