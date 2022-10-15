type CardProps = {
  key: number;
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

type FormCardListProps = {
  cards: CardForm[];
};

type FormProps = {
  updateCards: (card: CardForm) => void;
};

export { CardProps, SearchProps, CardForm, FormCardListProps, FormProps };
