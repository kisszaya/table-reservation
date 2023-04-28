import { Seat } from "entities/seats";
import { Table } from "entities/tables";
import { IShape } from "shared/types";
import { ShapeCanvas } from "./shape-canvas.class";

type ShapeType = IShape & {
  table: Table;
  seats: Seat[];
};

export class Shape implements IShape {
  id?: string | undefined;
  description: string;
  personsCount: number;
  number: number;
  title: string;
  table: Table;
  seats: Seat[];

  constructor(props: ShapeType) {
    this.id = props.id;
    this.description = props.description;
    this.personsCount = props.personsCount;
    this.number = props.number;
    this.title = props.title;
    this.table = props.table;
    this.seats = props.seats;
  }
}
