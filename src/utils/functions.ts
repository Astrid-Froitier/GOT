import axios from 'axios';

import { ICharacter } from '../../interfaces/ICharacter';
import { Base_Characters } from './constants';

const getHouse = async (allegiances: string[]) => {
  if (allegiances.length > 0) {
    const house = await axios.get(allegiances[0]);
    return house.data.name;
  }
  return null;
};

const inflateHouse = async (characters: ICharacter[]) => {
  const inflatedCharacters = await Promise.all(
    characters.map(async (character) => {
      const house = await getHouse(character.allegiances); // I know it's wrong...
      return { ...character, house };
    }),
  );
  return inflatedCharacters;
};

export const getAllCharacters = async (characters: ICharacter[], page: number) => {
  const response = await axios.get(`${Base_Characters}?pagesize=50&page=${page}`);
  let updatedCharacters = characters;
  const inflatedCharacters = await inflateHouse(response.data);
  if (inflatedCharacters.length > 0) {
    updatedCharacters = [...characters, ...inflatedCharacters];
    await getAllCharacters(updatedCharacters, 1);
  } else {
    return updatedCharacters;
  }
  return updatedCharacters;
};
