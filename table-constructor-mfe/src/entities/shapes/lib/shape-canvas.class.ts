import { Shape } from "./shape.class";
import { TABLE_VARIANT } from "shared/types";
import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";

interface IShapeCanvas {
  shape: Shape;
  canvas: HTMLCanvasElement;
  canvasHeight: number;
  canvasWidth: number;
  heightUnit: number;
  widthUnit: number;
  plusSize: number;
  tableIndent: number;
}

export class ShapeCanvas implements IShapeCanvas {
  shape: Shape;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  canvasHeight: number;
  canvasWidth: number;
  heightUnit: number;
  widthUnit: number;
  plusSize: number;
  tableIndent: number;

  constructor(props: IShapeCanvas) {
    this.shape = props.shape;
    this.canvas = props.canvas;
    this.ctx = props.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.heightUnit = props.heightUnit;
    this.widthUnit = props.widthUnit;

    this.canvasHeight = (props.shape.table.height + 2) * props.heightUnit;
    this.canvasWidth = (props.shape.table.width + 2) * props.widthUnit;

    this.plusSize = props.plusSize;
    this.tableIndent = props.tableIndent;
  }

  public drawVerticalLine(x: number) {
    this.ctx.beginPath();
    this.ctx.setLineDash([5, 5]);

    this.ctx.moveTo(x * this.widthUnit, 0);
    this.ctx.lineTo(x * this.widthUnit, this.canvasHeight);
    this.ctx.stroke();
  }

  public drawHorizontalLine(y: number) {
    this.ctx.beginPath();
    this.ctx.setLineDash([5, 5]);
    this.ctx.moveTo(0, y * this.heightUnit);
    this.ctx.lineTo(this.canvasWidth, y * this.heightUnit);
    this.ctx.stroke();
  }

  public drawPlus(x: number, y: number) {
    // add plus horizontal line
    this.ctx.beginPath();
    this.ctx.setLineDash([]);
    this.ctx.moveTo(
      (x - 1) * this.widthUnit + this.widthUnit / 2,
      (y - 1) * this.heightUnit + this.heightUnit / 2 - this.plusSize / 2
    );
    this.ctx.lineTo(
      (x - 1) * this.widthUnit + this.widthUnit / 2,
      (y - 1) * this.heightUnit + this.heightUnit / 2 + this.plusSize / 2
    );
    this.ctx.stroke();

    // add plus vertical line
    this.ctx.beginPath();
    this.ctx.setLineDash([]);
    this.ctx.moveTo(
      (x - 1) * this.widthUnit + this.widthUnit / 2 - this.plusSize / 2,
      (y - 1) * this.heightUnit + this.heightUnit / 2
    );
    this.ctx.lineTo(
      (x - 1) * this.widthUnit + this.widthUnit / 2 + this.plusSize / 2,
      (y - 1) * this.heightUnit + this.heightUnit / 2
    );
    this.ctx.stroke();
  }

  public drawTable() {
    const tableWidth = this.shape.table.width;
    const tableHeight = this.shape.table.height;

    switch (this.shape.table.variant) {
      case TABLE_VARIANT.SQUARE:
        this.ctx.beginPath();
        this.ctx.setLineDash([]);
        this.ctx.rect(
          DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT - this.tableIndent,
          DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT - this.tableIndent,
          DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT * tableWidth +
            this.tableIndent * 2,
          DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT * tableHeight +
            this.tableIndent * 2
        );
        this.ctx.fill();
        this.ctx.stroke();
        break;
      case TABLE_VARIANT.ROUND:
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.canvasWidth / 2,
          this.canvasHeight / 2,
          (DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT * tableWidth +
            this.tableIndent * 2) /
            2,
          (DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT * tableHeight +
            this.tableIndent * 2) /
            2,
          0,
          0,
          2 * Math.PI
        );

        this.ctx.fill();
        this.ctx.stroke();
        break;
    }
  }
}
