import { ACTIONTYPE, Action, State } from 'types';

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONTYPE.SETCARDS:
      return { ...state, ...action.payload };
    case ACTIONTYPE.SETFORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const initialState: State = {
  movies: [],
  isLoading: false,
  searchValue: '',
  page: 1,
  totalPages: 0,
  sort: '',
  moviesCount: 20,
  formCards: [],
  isSavingForm: false,
  formName: '',
  formSurname: '',
  formDate: '',
  formCountry: '',
  formGender: '',
  formCheckbox: false,
};

export { reducer, initialState };
