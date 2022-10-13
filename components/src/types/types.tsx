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

export { CardProps, SearchProps };
