import { Group } from "@mantine/core";
import { Button, Title, TITLE_VARIANT } from "shared/ui";

import { IEditableInputsEdit } from "../../types";

interface Props {
  title: IEditableInputsEdit["title"];
  editable: boolean;
  setEditable: (value: boolean) => void;
  onCancel?: () => void;
}

export const EditableHeader = (props: Props) => {
  const { title, editable, setEditable, onCancel } = props;

  const onCancelEdit = () => {
    setEditable(false);
    onCancel && onCancel();
  };

  const onEditHandler = () => {
    setEditable(true);
  };

  return (
    <Group position="apart">
      <Title variant={TITLE_VARIANT.DRAWER_TITLE}>{title}</Title>
      {!editable && (
        <Button onClick={onEditHandler} size="xs">
          Редактировать
        </Button>
      )}
      {editable && (
        <Group spacing="xs">
          {onCancel && (
            <Button
              onClick={onCancelEdit}
              size="xs"
              variant="light"
              color="gray"
            >
              Отменить
            </Button>
          )}
          <Button type="submit" size="xs">
            Сохранить
          </Button>
        </Group>
      )}
    </Group>
  );
};
