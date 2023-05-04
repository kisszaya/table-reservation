import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

export const SEAT_POSITION_OPTIONS: Record<
  SEAT_POSITION_VARIANT,
  {
    x: (x: number, tw: number) => number;
    y: (y: number, th: number) => number;
    dx: (iw: number) => number;
    dy: (ih: number) => number;
    angle: number;
  }
> = {
  [SEAT_POSITION_VARIANT.TOP]: {
    x: (x, tw) => x + 2,
    y: (_, th) => 1,
    dx: (iw) => -iw,
    dy: (ih) => -ih,
    angle: 180,
  },
  [SEAT_POSITION_VARIANT.BOTTOM]: {
    x: (x, tw) => x + 2,
    y: (y, th) => th + 2,
    dx: (iw) => 0,
    dy: (ih) => 0,
    angle: 0,
  },
  [SEAT_POSITION_VARIANT.LEFT]: {
    x: (x, tw) => 1,
    y: (y, th) => y + 2,
    dx: (iw) => 0,
    dy: (ih) => -ih,
    angle: 90,
  },
  [SEAT_POSITION_VARIANT.TOP_LEFT]: {
    x: (x, tw) => 1,
    y: (y, th) => 1,
    dx: (iw) => -iw / 4,
    dy: (ih) => -ih * 1.25,
    angle: 135,
  },
  [SEAT_POSITION_VARIANT.RIGHT]: {
    x: (x, tw) => tw + 2,
    y: (y, th) => y + 2,
    dx: (iw) => -iw,
    dy: (ih) => 0,
    angle: 270,
  },
  [SEAT_POSITION_VARIANT.TOP_RIGHT]: {
    x: (x, tw) => tw + 2,
    y: (y, th) => 1,
    dx: (iw) => -iw * 1.25,
    dy: (ih) => -ih / 2,
    angle: 225,
  },
  [SEAT_POSITION_VARIANT.BOTTOM_LEFT]: {
    x: (x, tw) => 1,
    y: (y, th) => th + 2,
    dx: (iw) => iw / 4,
    dy: (ih) => -(ih / 2),
    angle: 45,
  },
  [SEAT_POSITION_VARIANT.BOTTOM_RIGHT]: {
    x: (x, tw) => tw + 2,
    y: (y, th) => th + 2,
    dx: (iw) => -iw / 2,
    dy: (ih) => ih / 4,
    angle: 315,
  },
};
