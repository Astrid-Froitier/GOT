import React, { Fragment } from 'react';

import { Iprops } from '../../interfaces/ICharacter';
import CharacterCard from './character-card';

function CharacterList({ characters }: Iprops): JSX.Element {
  return (
    <Fragment>
      <div className="grid items-center h-full grid-cols-3 gap-4 pb-4 mx-4">
        {characters &&
          characters
            .filter((char) => char.name !== '')
            .map((char) => {
              return (
                <div key={char.url} className="flex flex-col items-left">
                  <CharacterCard character={char} />
                </div>
              );
            })}
      </div>
    </Fragment>
  );
}

export default CharacterList;
