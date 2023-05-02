import { useForm } from "@mantine/form";
import { useCallback, useMemo } from "react";

import { restaurantStore } from "entities/restaurant";
import { useAuthStore } from "shared/lib/hooks";
import {
  EDITABLE_INPUTS_FIELD_VARIANT,
  EditableInputs,
  IEditableInputsField,
  IEditableInputsEdit,
} from "widgets/editable-inputs";

import { IFormValues } from "../../types";
import { formInputKeys, useFormInitialValues } from "../../const";

export const ChangeGeneralSettingsForm = () => {
  const restaurant = useAuthStore(restaurantStore.$restaurantInfo);
  const formInitialValues = useFormInitialValues(restaurant);

  const form = useForm<IFormValues>({
    initialValues: formInitialValues,
  });

  const fields: IEditableInputsField[] = useMemo(
    () => [
      {
        ...formInputKeys.name,
        ...form.getInputProps("name"),
        variant: EDITABLE_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        ...formInputKeys.city,
        ...form.getInputProps("city"),
        variant: EDITABLE_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        ...formInputKeys.address,
        ...form.getInputProps("address"),
        variant: EDITABLE_INPUTS_FIELD_VARIANT.TEXT,
      },
    ],
    [form]
  );

  const onSubmit = useCallback(() => {
    console.log("TEST save values", form.values);
  }, [form.values]);

  const onCancel = useCallback(() => {
    form.reset();
  }, [form]);

  const edit: IEditableInputsEdit = useMemo(
    () => ({
      onSave: onSubmit,
      onCancel: onCancel,
      title: "Основные настройки",
      defaultIsEditable: false,
    }),
    [onCancel, onSubmit]
  );

  return <EditableInputs fields={fields} edit={edit} />;
};
