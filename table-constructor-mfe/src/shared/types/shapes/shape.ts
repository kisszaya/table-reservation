import { ISeat, ITable } from ".";

export interface IShape {
  id?: string;
  description: string;
  personsCount: number;
  number: number;
  title: string;
  table: ITable;
  seats: ISeat[];
}
