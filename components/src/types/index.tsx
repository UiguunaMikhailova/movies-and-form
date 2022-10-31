import React, { ReactNode } from 'react';

type CardProps = {
  key?: number;
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  vote_count: number;
};

type SearchProps = {
  searchCards: (value: string, page?: number, sort?: string) => void;
};

type CardForm = {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  file: string;
  checkbox?: boolean;
};

type FormInputs = {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  file: FileList;
  checkbox: boolean;
};

type LayoutProps = {
  children: ReactNode;
};

type State = {
  movies: CardProps[];
  isLoading: boolean;
  searchValue: string;
  formCards: CardForm[];
  isSavingForm: boolean;
  page: number;
  totalPages: number;
  sort: string;
  formName: string;
  formSurname: string;
  formDate: string;
  formCountry: string;
  formGender: string;
  formCheckbox: boolean;
};

type Action = {
  type: string;
  payload: Partial<State>;
};

type TContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export { CardProps, SearchProps, CardForm, LayoutProps, FormInputs, State, Action, TContext };
