import { FC, useEffect } from "react";
import { Loader, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { Title, TITLE_VARIANT } from "shared/ui";
import { $employees, $getEmployeesIsLoading, getEmployees } from "../../model";
import { EmployeePreviewCard } from "..";

export const Employees: FC = () => {
  const employees = useStore($employees);
  const isLoading = useStore($getEmployeesIsLoading);

  useEffect(() => {
    getEmployees();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Stack>
      <Title variant={TITLE_VARIANT.DRAWER_TITLE}>Сотрудники</Title>
      {employees.map((employee) => (
        <EmployeePreviewCard {...employee} key={employee.employee_id} />
      ))}
    </Stack>
  );
};
