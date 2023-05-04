import { useCallback } from "react";
import { useStore } from "effector-react";
import { closeModal } from "@mantine/modals";
import { SEAT_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { ISeatCreateProps } from "../../ui";
import { addTableSeat, tableFields } from "../../model";
import { getSeatPositionByCoordinates } from ".";
import { SEAT_MODAL_ID } from "../../const";

export const useAddSeat = (props: ISeatCreateProps) => {
  const tableHeight = useStore(tableFields.$tableHeight);
  const tableWidth = useStore(tableFields.$tableWidth);

  const addSeat = useCallback(
    (variant: SEAT_VARIANT) => {
      const coords = getSeatPositionByCoordinates({
        widthNumber: props.widthNumber,
        heightNumber: props.heightNumber,
        tableHeight,
        tableWidth,
      });

      if (!coords) return;

      addTableSeat({
        variant,
        position_id: coords.position_id,
        position: coords.position,
      });
      closeModal(SEAT_MODAL_ID);
    },
    [props.heightNumber, props.widthNumber, tableHeight, tableWidth]
  );

  return { addSeat };
};
