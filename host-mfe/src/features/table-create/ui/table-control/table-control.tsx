import { useStore } from "effector-react";
import { FormEvent } from "react";
import {
  Group,
  NativeSelect,
  NumberInput,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { Button } from "shared/ui";
import { TableTagsSelect } from "entities/table-tag";

import { tableFields, tableEvents, createTable } from "../../model";
import { tableVariantsData } from "../../const";

export const TableControl = () => {
  const variant = useStore(tableFields.$tableVariant);
  const tableTags = useStore(tableFields.$tableTags);
  const title = useStore(tableFields.$tableTitle);
  const height = useStore(tableFields.$tableHeight);
  const width = useStore(tableFields.$tableWidth);
  const personsCount = useStore(tableFields.$tablePersonsCount);
  const description = useStore(tableFields.$tableDescription);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTable();
  };

  const disabled = !title || !description || !personsCount;

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Group noWrap>
          <NumberInput
            value={height}
            onChange={tableEvents.changeTableHeight}
            label="Высота стола"
            max={4}
            min={1}
          />
          <NumberInput
            max={5}
            min={1}
            value={width}
            onChange={tableEvents.changeTableWidth}
            label="Длина стола"
          />
          <NativeSelect
            value={variant}
            label="Форма стола"
            data={tableVariantsData}
            onChange={(event) =>
              tableEvents.changeTableVariant(
                event.target.value as TABLE_VARIANT
              )
            }
          />
        </Group>
        <Group noWrap position="apart">
          <TextInput
            required
            label="Название стола (видно только сотрудникам)"
            value={title}
            onChange={(event) =>
              tableEvents.changeTableTitle(event.target.value)
            }
          />
          <NumberInput
            required
            min={0}
            label="Максимум человек за столом"
            value={personsCount}
            onChange={tableEvents.changeTablePersonsCount}
          />
        </Group>
        <Textarea
          required
          label="Описание стола (видно клиентам)"
          value={description}
          onChange={(event) =>
            tableEvents.changeTableDescription(event.target.value)
          }
        />
        <TableTagsSelect
          mt="xl"
          tags={tableTags}
          setTags={tableEvents.changeTableTags}
          label="Теги по которым пользователи будут выбирать столики"
          placeholder="Выберите тэги"
        />
        <Button disabled={disabled} type="submit">
          Добавить стол
        </Button>
      </Stack>
    </form>
  );
};
