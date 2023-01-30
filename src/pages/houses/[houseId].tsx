import React, { Fragment } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

import { IHouse } from '../../../interfaces/IHouse';
import { Base_Houses } from '../../utils/constants';

type IProps = { house: IHouse };

function HouseDetailPage({ house }: IProps): JSX.Element {
  return (
    <Fragment>
      <div className="h-screen text-white bg-black">
        <h1 className="flex items-center justify-center h-40 text-4xl italic">{house.name}</h1>
        <div className="flex flex-col gap-2 pl-12">
          <p>{house.currentLord}</p>
          <p>{house.coatOfArms}</p>
        </div>
      </div>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const houseId = JSON.stringify(params?.houseId);
  const id = JSON.parse(houseId);

  const oneHouse = await axios.get(`${Base_Houses}/${id}`);
  const house = oneHouse.data;

  return {
    props: {
      id: id,
      house: house,
    },
  };
};

export default HouseDetailPage;
