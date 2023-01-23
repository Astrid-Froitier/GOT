import React, { Fragment } from 'react';

import HouseList from '../../../components/houses/houses-list';
import SearchHouse from '../../../components/houses/houses-search';

function Houses() {
  return (
    <Fragment>
      <h1>Houses</h1>
      <HouseList />
      <SearchHouse />
    </Fragment>
  );
}

export default Houses;
