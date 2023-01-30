import React, { Fragment } from 'react';

import { IProps } from '../../interfaces/IHouse';
import HouseCard from './house-card';

function HouseList({ houses }: IProps): JSX.Element {
  return (
    <Fragment>
      <div className="grid items-center h-full grid-cols-3 gap-4 pb-4 mx-4">
        {houses &&
          houses.map((house) => {
            return (
              <div key={house.url} className="flex flex-col items-left">
                <HouseCard house={house} />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}

export default HouseList;
