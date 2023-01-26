import { createContext } from 'react';

import { ICharacter } from '../interfaces/ICharacter';

export type CharacterContent = {
  character: ICharacter;
  setCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
};

const CharacterContext = createContext<CharacterContent>({
  character: {
    url: '',
    name: '',
    gender: '',
    culture: '',
    born: '',
    died: '',
    house: [],
    titles: [],
    aliases: [],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
  },
  setCharacter: () => {
    ('');
  },
});

export default CharacterContext;
