import { Group, Stack } from "@mantine/core";
import { closeModal } from "@mantine/modals";
import { SEAT_POSITION_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { Button, Title } from "shared/ui";
import { SEAT_DELETE_MODAL_ID } from "../../const";
import { removeTableSeat } from "../../model";

export interface ISeatDeleteProps {
  position: SEAT_POSITION_VARIANT;
  position_id: number;
}

export const SeatDelete = (props: ISeatDeleteProps) => {
  const { position_id, position } = props;

  const onDelete = () => {
    removeTableSeat({ position, position_id });
    closeModal(SEAT_DELETE_MODAL_ID);
  };

  const onCancel = () => {
    closeModal(SEAT_DELETE_MODAL_ID);
  };

  return (
    <Stack align="center">
      <Title align="center" order={3}>
        Хотите удалить стул?
      </Title>
      <Group my="lg">
        <Button onClick={onDelete}>Удалить</Button>
        <Button onClick={onCancel} variant="light">
          Отменить
        </Button>
      </Group>
    </Stack>
  );
};
