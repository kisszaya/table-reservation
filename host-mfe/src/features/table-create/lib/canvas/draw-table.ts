import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";
import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";

const heightUnit = TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT;
const widthUnit = TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT;
const tableIndent = TABLE_CONSTRUCTOR_SETTINGS.TABLE_INDENT;

interface Props {
  tableWidth: number;
  tableHeight: number;
  canvasWidth: number;
  canvasHeight: number;
  tableVariant: TABLE_VARIANT;
  ctx: CanvasRenderingContext2D;
}

export const drawTable = (props: Props) => {
  const {
    tableHeight,
    tableWidth,
    tableVariant,
    ctx,
    canvasHeight,
    canvasWidth,
  } = props;

  switch (tableVariant) {
    case TABLE_VARIANT.SQUARE:
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.rect(
        widthUnit - tableIndent,
        heightUnit - tableIndent,
        widthUnit * tableWidth + tableIndent * 2,
        heightUnit * tableHeight + tableIndent * 2
      );
      ctx.fill();
      ctx.stroke();
      break;
    case TABLE_VARIANT.ROUND:
      ctx.beginPath();
      ctx.ellipse(
        canvasWidth / 2,
        canvasHeight / 2,
        (widthUnit * tableWidth + tableIndent * 2) / 2,
        (heightUnit * tableHeight + tableIndent * 2) / 2,
        0,
        0,
        2 * Math.PI
      );

      ctx.fill();
      ctx.stroke();
      break;
  }
};
