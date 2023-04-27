import { FC, useEffect } from "react";
import { useForm } from "@mantine/form";
import { NativeSelect, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { Button, TextInput } from "shared/ui";
import {
  ADD_EMPLOYEE_STATUS,
  formSelectKeys,
  useFormInitialValues,
  useFormInputKeys,
} from "../../const";
import { IAddEmployeeProps, IFormValues } from "../../types";
import {
  $addEmployeeIsLoading,
  $addEmployeeStatus,
  addEmployee,
  resetAddEmployeeStatus,
} from "../../model";
import { AddEmployeeStatus } from "..";

export const AddEmployeeForm: FC<IAddEmployeeProps> = (props) => {
  /*** store ***/
  const isLoading = useStore($addEmployeeIsLoading);
  const status = useStore($addEmployeeStatus);
  const disabled = status === ADD_EMPLOYEE_STATUS.SUCCESS;

  /*** form ***/
  const initialValues = useFormInitialValues(props);
  const inputKeys = useFormInputKeys({ disabled, userInfo: props.userInfo });
  const form = useForm<IFormValues>({
    initialValues,
  });

  useEffect(() => {
    resetAddEmployeeStatus();
  }, []);

  const onSubmit = async (formValues: IFormValues) => {
    await addEmployee(formValues);
  };

  return (
    <Stack>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput {...inputKeys.email} />
          <TextInput
            disabled={disabled}
            {...inputKeys.firstName}
            {...form.getInputProps("firstName")}
          />
          <TextInput
            disabled={disabled}
            {...inputKeys.lastName}
            {...form.getInputProps("lastName")}
          />
          <TextInput
            disabled={disabled}
            {...inputKeys.phone}
            {...form.getInputProps("phone")}
          />
          {!("fullName" in props.userInfo) && (
            <TextInput
              disabled={disabled}
              {...inputKeys.password}
              {...form.getInputProps("password")}
            />
          )}
          <NativeSelect
            disabled={disabled}
            {...formSelectKeys.roles}
            {...form.getInputProps("roles")}
          />
          <Button
            fullWidth
            mt="xl"
            type="submit"
            loading={isLoading}
            disabled={status !== ADD_EMPLOYEE_STATUS.IDLE}
          >
            Add user
          </Button>
        </Stack>
      </form>
      <AddEmployeeStatus />
    </Stack>
  );
};
