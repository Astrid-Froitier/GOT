export const Base_Characters = 'https://anapioficeandfire.com/api/characters';

export const Base_Houses = 'https://anapioficeandfire.com/api/houses';

export const getId = (url: string) => {
  const id = url.split('/').pop() ?? null;
  return id;
};
