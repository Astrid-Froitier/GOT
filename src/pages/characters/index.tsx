import React, { Fragment } from 'react';
import { GetStaticProps } from 'next';

import CharacterList from '../../../components/characters/characters-list';
import { IProps } from '../../../interfaces/ICharacter';
import { getAllCharacters } from '../../utils/functions';

function Characters({ characters }: IProps): JSX.Element {
  return (
    <div className="h-full text-white bg-black">
      <Fragment>
        <h1 className="flex items-center justify-center h-40 text-6xl ">Characters</h1>
        <CharacterList characters={characters} />
      </Fragment>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const characters: [] = [];
  const allCharacters = await getAllCharacters(characters);
  return {
    props: {
      characters: allCharacters,
    },
  };
};

export default Characters;
