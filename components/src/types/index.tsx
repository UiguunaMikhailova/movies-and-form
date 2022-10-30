import React, { ReactNode } from 'react';

type CardProps = {
  key?: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
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
  file: FileList;
  checkbox: boolean;
};

type Modal = {
  closeModal: (event: React.MouseEvent) => void;
};

type LayoutProps = {
  children: ReactNode;
};

type ModalProps = Omit<CardProps, 'key'> & Modal;

type State = {
  movies: CardProps[];
  isLoading: boolean;
  searchValue: string;
  formCards: CardForm[];
  isSavingForm: boolean;
  page: number;
  totalPages: number;
};

type Action = {
  type: string;
  payload: Partial<State>;
};

type TContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export {
  CardProps,
  SearchProps,
  CardForm,
  ModalProps,
  LayoutProps,
  FormInputs,
  State,
  Action,
  TContext,
};
