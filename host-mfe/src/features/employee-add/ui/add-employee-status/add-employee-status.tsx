import { useStore } from "effector-react";

import { $addEmployeeStatus, $addEmployeeError } from "../../model";
import { ADD_EMPLOYEE_STATUS } from "../../const";

import { Title } from "shared/ui";

export const AddEmployeeStatus = () => {
  const status = useStore($addEmployeeStatus);
  const error = useStore($addEmployeeError);

  if (status === ADD_EMPLOYEE_STATUS.SUCCESS)
    return (
      <Title order={5} color="green">
        Сотрудник был успешно добавлен
      </Title>
    );

  if (status === ADD_EMPLOYEE_STATUS.ERROR && error)
    return (
      <Title order={5} color="red">
        {error}
      </Title>
    );

  return null;
};
