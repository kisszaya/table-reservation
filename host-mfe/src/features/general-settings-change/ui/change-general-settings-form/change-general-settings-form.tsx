import { TextInput } from "shared/ui";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import { restaurantStore } from "entities/restaurant";
import { useAuthStore } from "shared/lib/hooks";

import { IFormValues } from "../../types";
import { formInputKeys, useFormInitialValues } from "../../const";

export const ChangeGeneralSettingsForm = () => {
  const restaurant = useAuthStore(restaurantStore.$restaurantInfo);
  const formInitialValues = useFormInitialValues(restaurant);

  const form = useForm<IFormValues>({
    initialValues: formInitialValues,
  });

  return (
    <form>
      <Stack>
        <TextInput {...formInputKeys.name} {...form.getInputProps("name")} />
        <TextInput {...formInputKeys.city} {...form.getInputProps("city")} />
        <TextInput
          {...formInputKeys.address}
          {...form.getInputProps("address")}
        />
      </Stack>
    </form>
  );
};
