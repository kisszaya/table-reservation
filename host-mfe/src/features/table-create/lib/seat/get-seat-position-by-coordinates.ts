import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { ISeatCreateProps } from "../../ui";

interface Props extends ISeatCreateProps {
  tableHeight: number;
  tableWidth: number;
}

type Return = {
  position: SEAT_POSITION_VARIANT;
  position_id: number;
} | null;

export const getSeatPositionByCoordinates = (props: Props): Return => {
  const {
    tableWidth,
    widthNumber: width,
    heightNumber: height,
    tableHeight,
  } = props;

  if (width === 1 && height === 1) {
    return {
      position: SEAT_POSITION_VARIANT.TOP_LEFT,
      position_id: -1,
    };
  }

  if (width === 1 && height === tableHeight + 2) {
    return {
      position: SEAT_POSITION_VARIANT.BOTTOM_LEFT,
      position_id: -1,
    };
  }

  if (width === tableWidth + 2 && height === tableHeight + 2) {
    return {
      position: SEAT_POSITION_VARIANT.BOTTOM_RIGHT,
      position_id: -1,
    };
  }

  if (width === tableWidth + 2 && height === 1) {
    return {
      position: SEAT_POSITION_VARIANT.TOP_RIGHT,
      position_id: -1,
    };
  }

  if (width === 1) {
    return {
      position: SEAT_POSITION_VARIANT.LEFT,
      position_id: height - 2,
    };
  }

  if (width === tableWidth + 2) {
    return {
      position: SEAT_POSITION_VARIANT.RIGHT,
      position_id: height - 2,
    };
  }

  if (height === 1) {
    return {
      position: SEAT_POSITION_VARIANT.TOP,
      position_id: width - 2,
    };
  }

  if (height === tableHeight + 2) {
    return {
      position: SEAT_POSITION_VARIANT.BOTTOM,
      position_id: width - 2,
    };
  }

  return null;
};
