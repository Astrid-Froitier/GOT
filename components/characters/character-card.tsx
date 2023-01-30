import { Fragment } from 'react';
import Link from 'next/link';

import { ICharacter } from '../../././interfaces/ICharacter';
import { getId } from '../../src/utils/functions';

type Iprops = { character: ICharacter };

function CharacterCard({ character }: Iprops): JSX.Element {
  function getOneCharacter() {
    const fullPath = `/characters/${getId(character)}`;
    return fullPath;
  }

  return (
    <div className="h-48 py-3 pl-3 border border-white solid rounded-3xl">
      <Fragment>
        <Link href={getOneCharacter()} passHref>
          <a href={'Super Johanna'}>
            <Fragment>
              <h1 className="flex justify-center pb-3 text-2xl italic">{character.name}</h1>
              <p>Gender : {character.gender}</p>
              <p>Culture : {character.culture}</p>
              <p>Title : {character.titles[0]}</p>
              <p>Aliase : {character.aliases[0]}</p>
            </Fragment>
          </a>
        </Link>
      </Fragment>
    </div>
  );
}

export default CharacterCard;
