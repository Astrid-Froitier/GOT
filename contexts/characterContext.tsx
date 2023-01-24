import { createContext } from 'react';

import ICharacters from '../interfaces/ICharacters';

type CharacterContent = {
  character: ICharacters;
  setCharacter: React.Dispatch<React.SetStateAction<ICharacters>>;
};

const CharacterContext = createContext<CharacterContent>({
  character: {
    name: '',
    gender: '',
    culture: '',
    born: '',
    died: '',
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
