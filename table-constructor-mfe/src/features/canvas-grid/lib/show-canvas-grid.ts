import { CANVAS_GRID_SETTINGS, WORKING_AREA_SETTINGS } from "shared/consts";

export const showCanvasGrid = (ctx: CanvasRenderingContext2D) => {
  for (
    let i = 0;
    i <= WORKING_AREA_SETTINGS.WIDTH;
    i = i + CANVAS_GRID_SETTINGS.FREQUENCY
  ) {
    ctx.strokeStyle = CANVAS_GRID_SETTINGS.COLOR;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, WORKING_AREA_SETTINGS.HEIGHT);
    ctx.stroke();
  }

  for (
    let i = 0;
    i <= WORKING_AREA_SETTINGS.HEIGHT;
    i = i + CANVAS_GRID_SETTINGS.FREQUENCY
  ) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(WORKING_AREA_SETTINGS.WIDTH, i);
    ctx.stroke();
  }
};
