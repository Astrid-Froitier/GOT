import React, { Fragment } from 'react';

import CharacterList from '../../../components/characters/characters-list';
import SearchCaracter from '../../../components/characters/characters-search';
import { Iprops } from '../../../interfaces/ICharacter';
import { getAllCharacters } from '../../utils/functions';

function Characters({ characters }: Iprops): JSX.Element {
  return (
    <div className="h-full text-white bg-black">
      <Fragment>
        <h1 className="flex items-center justify-center h-40 text-6xl ">Characters</h1>
        <SearchCaracter />
        <CharacterList characters={characters} />
      </Fragment>
    </div>
  );
}

export async function getStaticProps() {
  const characters: [] = [];
  const allCharacters = await getAllCharacters(characters);
  return {
    props: {
      characters: allCharacters,
    },
  };
}

export default Characters;
