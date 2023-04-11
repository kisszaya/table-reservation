import {
  CANVAS_SETTINGS,
  DEFAULT_POINT_COORDINATES,
  WORKING_AREA_SETTINGS,
} from "shared/consts";
import { addPoints } from "features/point-handlers";

const { devicePixelRatio: ratio = 1 } = window;

const SCALE_Y = CANVAS_SETTINGS.HEIGHT / WORKING_AREA_SETTINGS.HEIGHT;
const SCALE_X = CANVAS_SETTINGS.WIDTH / WORKING_AREA_SETTINGS.WIDTH;

const DEFAULT_OFFSET_LEFT =
  (WORKING_AREA_SETTINGS.WIDTH / 2 / (SCALE_Y / SCALE_X)) *
  ((SCALE_Y / SCALE_X) * WORKING_AREA_SETTINGS.DEFAULT_SCALE - 1);
const DEFAULT_OFFSET_TOP =
  (WORKING_AREA_SETTINGS.DEFAULT_SCALE - 1) *
  (WORKING_AREA_SETTINGS.HEIGHT / 2);

export namespace CANVAS_RESET_SETTINGS {
  /**
   * Coordinates to display in the center of the canvas on reset
   **/
  export const CENTER_POINT_COORDINATES = addPoints(DEFAULT_POINT_COORDINATES, {
    x: -DEFAULT_OFFSET_LEFT,
    y: -DEFAULT_OFFSET_TOP,
  });

  /**
   * Size based on canvas coordinates and workspace coordinates.
   * Aligned in height considering the DEFAULT_SCALE
   **/
  export const SCALE = WORKING_AREA_SETTINGS.DEFAULT_SCALE * ratio * SCALE_Y;

  /**
   * Width and Height considering ratio
   **/
  export const WIDTH = CANVAS_SETTINGS.WIDTH * ratio;
  export const HEIGHT = CANVAS_SETTINGS.HEIGHT * ratio;
}
