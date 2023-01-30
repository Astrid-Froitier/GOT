import React, { Fragment } from 'react';
import { GetStaticProps } from 'next';

import HouseList from '../../../components/houses/houses-list';
import { IProps } from '../../../interfaces/IHouse';
import { getHouses } from '../../utils/functions';

function Houses({ houses }: IProps): JSX.Element {
  return (
    <div className="h-full text-white bg-black">
      <Fragment>
        <h1 className="flex items-center justify-center h-40 text-6xl ">Houses</h1>
        <HouseList houses={houses} />
      </Fragment>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const houses: [] = [];
  const allHouses = await getHouses(houses);
  return {
    props: {
      houses: allHouses,
    },
  };
};

export default Houses;
