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

const initialState = {
  movies: [],
  isLoading: false,
  searchValue: '',
  formCards: [],
  isSavingForm: false,
  page: 1,
  totalPages: 0,
  sort: '',
  formName: '',
  formSurname: '',
  formDate: '',
  formCountry: '',
  formGender: '',
  formCheckbox: false,
};

export { reducer, initialState };
