import React, { Fragment } from 'react';

import CharacterList from '../../../components/characters/characters-list';
import SearchCaracter from '../../../components/characters/characters-search';

function Characters() {
  return (
    <Fragment>
      <h1>Characters</h1>
      <CharacterList />
      <SearchCaracter />
    </Fragment>
  );
}

export default Characters;
