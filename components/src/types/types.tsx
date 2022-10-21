import { ReactNode } from 'react';

type CardProps = {
  key?: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

type SearchProps = {
  searchCards: (value: string) => void;
};

type CardForm = {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  file: string;
};

type CardListProps = {
  cards: CardProps[];
  isLoading: boolean;
};

type FormCardListProps = {
  cards: CardForm[];
};

type FormProps = {
  updateCards: (card: CardForm) => void;
  save: boolean;
};

type Modal = {
  closeModal: () => void;
};

type LayoutProps = {
  children: ReactNode;
};

type ModalProps = Omit<CardProps, 'key'> & Modal;

export {
  CardProps,
  SearchProps,
  CardForm,
  FormCardListProps,
  FormProps,
  ModalProps,
  LayoutProps,
  CardListProps,
};
