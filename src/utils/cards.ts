type Card = {
  type: number;
  id: number;
};

export const shuffle = (array: Card[]) => {
  let copy = [...array];
  for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    copy[i] = copy[random];
    copy[random] = temp;
  }
  return copy;
};

export const allCards = [
  { type: 1, id: 1 },
  { type: 1, id: 2 },
  { type: 2, id: 3 },
  { type: 2, id: 4 },
  { type: 3, id: 5 },
  { type: 3, id: 6 },
  { type: 4, id: 7 },
  { type: 4, id: 8 },
  { type: 5, id: 9 },
  { type: 5, id: 10 },
  { type: 6, id: 11 },
  { type: 6, id: 12 },
  { type: 7, id: 13 },
  { type: 7, id: 14 },
  { type: 8, id: 15 },
  { type: 8, id: 16 },
  { type: 9, id: 17 },
  { type: 9, id: 18 },
  { type: 10, id: 19 },
  { type: 10, id: 20 },
  { type: 11, id: 21 },
  { type: 11, id: 22 },
  { type: 12, id: 23 },
  { type: 12, id: 24 },
];
