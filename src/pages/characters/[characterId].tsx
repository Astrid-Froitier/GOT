import React, { Fragment } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

import { ICharacter } from '../../../interfaces/ICharacter';
import { Base_Characters } from '../../utils/constants';

type IProps = { character: ICharacter };

function CharacterDetailPage({ character }: IProps): JSX.Element {
  return (
    <Fragment>
      <div className="h-screen text-white bg-black">
        <p className="flex justify-end pt-4 pr-4">{character.gender}</p>
        <h1 className="flex items-center justify-center h-40 text-4xl italic">{character.name}</h1>
        <div className="flex flex-col gap-2 pl-12">
          <div className="flex flex-row">
            <p className="italic">born : </p>
            {character.born} - <p className="italic"> died : </p>
            {character.died}
          </div>
          <p></p>
          <p>culture : {character.culture}</p>
          {/* <p>spouse : {character.character.spouse}</p> */}
          <p>aliase : {character.aliases[0]}</p>
          {/* <p>father : {character.character.father}</p>
          <p>mother : {character.character.mother}</p> */}
          <p>title : {character.titles[0]}</p>
          {/* <p>house : {character.character.allegiances[0]}</p> */}
          <p>played by : {character.playedBy}</p>
        </div>
      </div>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const characterId = JSON.stringify(params?.characterId);
  const id = JSON.parse(characterId);

  const oneCharacter = await axios.get(`${Base_Characters}/${id}`);
  const char = oneCharacter.data;

  return {
    props: {
      id: id,
      character: char,
    },
  };
};

export default CharacterDetailPage;
