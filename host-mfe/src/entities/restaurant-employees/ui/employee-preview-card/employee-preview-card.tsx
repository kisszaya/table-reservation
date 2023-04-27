import { IRestaurantEmployee } from "kisszaya-table-reservation/lib/interfaces";
import { ActionIcon, Badge, Card, Group, Loader, Stack } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useStore } from "effector-react";

import { Title, Text } from "shared/ui";

import { removeEmployee, $removingEmployeeId } from "../../model";

export const EmployeePreviewCard = (props: IRestaurantEmployee) => {
  const { email, roles, fullName, employee_id } = props;
  const removingEmployee = useStore($removingEmployeeId);

  const onRemove = () => {
    removeEmployee(employee_id.toString());
  };

  if (removingEmployee && removingEmployee === employee_id.toString()) {
    return <Loader />;
  }

  return (
    <Card withBorder>
      <Group position="apart">
        <Stack spacing={4} align="start">
          <Title order={5}>{fullName}</Title>
          <Text size="sm">{email}</Text>
          <Badge mt="md">{roles}</Badge>
        </Stack>
        <ActionIcon color="red" onClick={onRemove}>
          <IconTrash />
        </ActionIcon>
      </Group>
    </Card>
  );
};
