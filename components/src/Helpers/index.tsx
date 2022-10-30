import { CardProps } from 'types';

function sortItems(sort: string, movies: CardProps[]) {
  const sortedItems = [];
  switch (sort) {
    case 'average-desc':
      sortedItems.push(
        ...movies.sort((a: CardProps, b: CardProps) => a.vote_average - b.vote_average)
      );
      break;
    case 'average-asc':
      sortedItems.push(
        ...movies.sort((a: CardProps, b: CardProps) => b.vote_average - a.vote_average)
      );
      break;
    case 'count-desc':
      sortedItems.push(...movies.sort((a: CardProps, b: CardProps) => a.vote_count - b.vote_count));
      break;
    case 'count-asc':
      sortedItems.push(...movies.sort((a: CardProps, b: CardProps) => b.vote_count - a.vote_count));
      break;
    case 'title-desc':
      sortedItems.push(
        ...movies.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
      );
      break;
    case 'title-asc':
      sortedItems.push(
        ...movies.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        })
      );
      break;
    default:
      sortedItems.push(...movies);
  }
  return sortedItems;
}

export { sortItems };
