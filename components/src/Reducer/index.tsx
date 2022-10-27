import { Action, State } from 'types';

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setCards':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const initialState = {
  movies: [],
  isLoading: false,
  searchValue: '',
  formCards: [],
  isSavingForm: false,
};

export { reducer, initialState };
