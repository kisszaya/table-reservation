import { useStore } from "effector-react";
import {
  Group,
  NativeSelect,
  NumberInput,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { tableFields, tableEvents } from "../../model";
import { tableVariantsData } from "../../const";

export const TableControl = () => {
  const variant = useStore(tableFields.$tableVariant);
  const title = useStore(tableFields.$tableTitle);
  const height = useStore(tableFields.$tableHeight);
  const width = useStore(tableFields.$tableWidth);
  const personsCount = useStore(tableFields.$tablePersonsCount);
  const description = useStore(tableFields.$tableDescription);

  return (
    <Stack>
      <Group noWrap>
        <NumberInput
          value={height}
          onChange={tableEvents.changeTableHeight}
          label="Высота стола"
        />
        <NumberInput
          value={width}
          onChange={tableEvents.changeTableWidth}
          label="Длина стола"
        />
        <NativeSelect
          value={variant}
          label="Форма стола"
          data={tableVariantsData}
          onChange={(event) =>
            tableEvents.changeTableVariant(event.target.value as TABLE_VARIANT)
          }
        />
      </Group>
      <Group noWrap>
        <TextInput
          label="Название стола (будет видно только сотрудникам)"
          value={title}
          onChange={(event) => tableEvents.changeTableTitle(event.target.value)}
        />
        <NumberInput
          label="Максимум человек за столом"
          value={personsCount}
          onChange={tableEvents.changeTablePersonsCount}
        />
      </Group>
      <Textarea
        label="Описание стола (будет видно клиентам)"
        value={description}
        onChange={(event) =>
          tableEvents.changeTableDescription(event.target.value)
        }
      />
    </Stack>
  );
};
