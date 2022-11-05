import { ReactNode } from 'react';

type Data = {
  page: number;
  results: CardProps[];
  total_pages: number;
  total_results: number;
};

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
  searchCards: (value: string, page?: number) => void;
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
  file?: FileList;
  checkbox: boolean;
};

type LayoutProps = {
  children: ReactNode;
};

type MovieState = {
  movies: CardProps[];
  isLoading: boolean;
  error: string;
  searchValue: string;
  page: number;
  totalPages: number;
  sort: string;
  moviesCount: number;
};

type FormState = {
  formCards: CardForm[];
  isSavingForm: boolean;
  formName: string;
  formSurname: string;
  formDate: string;
  formCountry: string;
  formGender: string;
  formCheckbox: boolean;
};

export { CardProps, SearchProps, CardForm, LayoutProps, FormInputs, MovieState, FormState, Data };
