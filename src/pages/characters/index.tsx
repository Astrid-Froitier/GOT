import React, { Fragment } from 'react';

import CharacterList from '../../../components/characters/characters-list';
// import SearchCaracter from '../../../components/characters/characters-search';
import { Iprops } from '../../../interfaces/ICharacter';
import { getAllCharacters } from '../../utils/functions';

function Characters({ characters }: Iprops): JSX.Element {
  return (
    <div className="h-full text-white bg-black">
      <Fragment>
        <h1 className="flex items-center justify-center h-40 text-6xl ">Characters</h1>
        {/* <SearchCaracter /> */}
        <CharacterList characters={characters} />
        <div className="flex items-center justify-center h-16 text-2xl">
          <button
            className="flex justify-center"
            type="submit"
            onClick={() => getAllCharacters(characters, +1)}
          >
            See more
          </button>
        </div>
      </Fragment>
    </div>
  );
}

export async function getStaticProps() {
  const characters: [] = [];
  const allCharacters = await getAllCharacters(characters, 1);

  return {
    props: {
      characters: allCharacters,
    },
  };
}

export default Characters;
