import { FC, useEffect } from "react";
import { useStore } from "effector-react";
import { Loader, Stack } from "@mantine/core";

import { $getEmployeesIsLoading, $employees, getEmployees } from "../../model";
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
      {employees.map((employee) => (
        <EmployeePreviewCard {...employee} key={employee.employee_id} />
      ))}
    </Stack>
  );
};
