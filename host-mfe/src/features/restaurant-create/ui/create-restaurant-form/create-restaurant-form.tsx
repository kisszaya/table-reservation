import { useForm } from "@mantine/form";
import { Stack } from "@mantine/core";

import { Button, TextInput } from "shared/ui";

import { IFormValues } from "../../types";
import { formInitialValues, formInputKeys } from "../../const";
import { createRestaurantFx } from "../../model";

export const CreateRestaurantForm = () => {
  const form = useForm<IFormValues>({
    initialValues: formInitialValues,
  });

  return (
    <form onSubmit={form.onSubmit(createRestaurantFx)}>
      <Stack>
        <TextInput {...formInputKeys.name} {...form.getInputProps("name")} />
        <TextInput {...formInputKeys.phone} {...form.getInputProps("phone")} />
        <TextInput {...formInputKeys.city} {...form.getInputProps("city")} />
        <TextInput
          {...formInputKeys.address}
          {...form.getInputProps("address")}
        />
        <Button fullWidth mt="xl" type="submit">
          Create restaurant
        </Button>
      </Stack>
    </form>
  );
};
