const cards = [
  {
    overview:
      'The story of an ancient war that is reignited when a young farmhand unwittingly opens a gateway between our world and a fearsome race of giants. Unleashed on the Earth for the first time in centuries, the giants strive to reclaim the land they once lost, forcing the young man, Jack into the battle of his life to stop them. Fighting for a kingdom, its people, and the love of a brave princess, he comes face to face with the unstoppable warriors he thought only existed in legend–and gets the chance to become a legend himself.',
    poster_path: '/xLbVsFpAlwf6khU3gG1yaRBPeC.jpg',
    title: 'Jack the Giant Slayer',
    vote_average: 5.8,
  },
  {
    overview:
      'When Major Susan Turner is arrested for treason, ex-investigator Jack Reacher undertakes the challenging task to prove her innocence and ends up exposing a shocking conspiracy.',
    poster_path: '/bvCEEs5l3ylNIgH4foqOmQk0qdi.jpg',
    title: 'Jack Reacher: Never Go Back',
    vote_average: 5.9,
  },
  {
    overview:
      "Jack Sadelstein, a successful advertising executive in Los Angeles with a beautiful wife and kids, dreads one event each year: the Thanksgiving visit of his twin sister Jill. Jill's neediness and passive-aggressiveness is maddening to Jack, turning his normally tranquil life upside down.",
    poster_path: '/kFeAxmZvu0TE4iuLRHQD6Cej8Wf.jpg',
    title: 'Jack and Jill',
    vote_average: 4.3,
  },
];

const formCards = [
  {
    name: 'Ivan',
    surname: 'Ivanov',
    date: '2022-10-08',
    country: 'Russia',
    gender: 'male',
    file: '',
  },
  {
    name: 'Ivan',
    surname: 'Ivanov',
    date: '2022-10-08',
    country: 'Russia',
    gender: 'male',
    file: 'ivan',
  },
  {
    name: 'Ivan',
    surname: 'Ivanov',
    date: '2022-10-08',
    country: 'Russia',
    gender: 'male',
    file: '',
  },
];
const apiKey = '0d5da78d3ffd7f7454f49e8eb45260f5';

const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const popularUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

const defaultValue = 'j';

export { cards, searchUrl, formCards, popularUrl, defaultValue };
