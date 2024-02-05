import { ICard } from '../../core/types/core-server.types';

export const shuffleArray = (array: ICard[]) => {
  let currentIndex: number = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
