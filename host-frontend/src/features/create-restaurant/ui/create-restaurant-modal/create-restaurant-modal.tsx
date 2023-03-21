import { useForm } from "@mantine/form";
import { Stack } from "@mantine/core";
import {
  FormValues,
  initialValues,
  useCreateRestaurant,
} from "features/create-restaurant/lib";

import { Button, TextInput } from "shared/ui";

export const CreateRestaurantModal = () => {
  const { createRestaurant, inputKeys } = useCreateRestaurant();
  const form = useForm<FormValues>({
    initialValues,
  });
  return (
    <form onSubmit={form.onSubmit(createRestaurant)}>
      <Stack>
        <TextInput {...inputKeys.name} {...form.getInputProps("name")} />
        <TextInput {...inputKeys.phone} {...form.getInputProps("phone")} />
        <TextInput {...inputKeys.city} {...form.getInputProps("city")} />
        <TextInput {...inputKeys.address} {...form.getInputProps("address")} />
        <Button fullWidth mt="xl" type="submit">
          Create restaurant
        </Button>
      </Stack>
    </form>
  );
};
