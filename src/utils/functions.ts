import axios from 'axios';

import { ICharacter } from '../../interfaces/ICharacter';
import { IHouse } from '../../interfaces/IHouse';
import { Base_Characters, Base_Houses } from './constants';

export const getId = (character: ICharacter) => {
  const id = character.url.split('/').pop() ?? null;
  return id;
};
// const getHouse = async (allegiances: string[]) => {
//   if (allegiances.length > 0) {
//     const house = await axios.get(allegiances[0]);
//     return house.data.name;
//   }
//   return null;
// };

// const inflateHouse = async (characters: ICharacter[]) => {
//   const inflatedCharacters = await (
//     characters.map(async (character) => {
//       const house = await getHouse(character.allegiances); // I know it's wrong...
//       return { ...character, house };
//     }),
//   );
//   return inflatedCharacters;
// };

export const getAllCharacters = async (characters: ICharacter[]) => {
  const response = await axios.get(`${Base_Characters}?pageSize=50&page=1`);
  characters = await response.data;
  return characters;
};

export const getHouses = async (houses: IHouse[]) => {
  const response = await axios.get(`${Base_Houses}?pageSize=50&page1`);
  houses = await response.data;
  return houses;
};

export const getIdHouse = (house: IHouse) => {
  const id = house.url.split('/').pop() ?? null;
  return id;
};
