import { Fragment } from 'react';
import Link from 'next/link';

import { IHouse } from '../../interfaces/IHouse';
import { getIdHouse } from '../../src/utils/functions';
type IProps = { house: IHouse };

function HouseCard({ house }: IProps) {
  function getOneHouse() {
    const fullPath = `/houses/${getIdHouse(house)}`;
    return fullPath;
  }
  return (
    <div className="py-3 pl-3 border border-white solid rounded-3xl h-52">
      <Fragment>
        <Link href={getOneHouse()}>
          <a href="Super Stephane">
            <Fragment>
              <h1 className="flex justify-center pb-3 text-2xl italic">{house.name}</h1>
              <p>Lord : {house.currentLord}</p>
              <p>Coast of Arms : {house.coatOfArms}</p>
              <p>Words : {house.words}</p>
            </Fragment>
          </a>
        </Link>
      </Fragment>
    </div>
  );
}
export default HouseCard;
