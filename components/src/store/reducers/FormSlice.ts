import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardForm, FormInputs, FormState } from 'types';

const initialState: FormState = {
  formCards: [],
  isSavingForm: false,
  formName: '',
  formSurname: '',
  formDate: '',
  formCountry: '',
  formGender: '',
  formCheckbox: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormInputs(state, action: PayloadAction<Omit<FormInputs, 'file'>>) {
      state.formName = action.payload.name;
      state.formSurname = action.payload.surname;
      state.formDate = action.payload.date;
      state.formCountry = action.payload.country;
      state.formGender = action.payload.gender;
      state.formCheckbox = action.payload.checkbox;
    },
    toggleIsSaveForm(state, action: PayloadAction<boolean>) {
      state.isSavingForm = action.payload;
    },
    addFormCard(state, action: PayloadAction<CardForm>) {
      state.formCards = [...state.formCards, action.payload];
    },
  },
});

export default formSlice.reducer;
