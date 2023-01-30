export interface IHouse {
  url: string;
  name: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  currentLord: string;
}

export type IProps = { houses: IHouse[] };
