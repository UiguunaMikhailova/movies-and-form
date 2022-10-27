import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from 'Components/pages/about';
import Home from 'Components/pages/home';
import FormPage from 'Components/pages/FormPage';
import NotFound from 'Components/pages/NotFound';
import { reducer } from 'Reducer';
import { Action, State } from 'types';

export const Context = React.createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: { movies: [], isLoading: false, searchValue: '', formCards: [], isSavingForm: false },
  dispatch: () => null,
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    isLoading: false,
    searchValue: '',
    formCards: [],
    isSavingForm: false,
  });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}
