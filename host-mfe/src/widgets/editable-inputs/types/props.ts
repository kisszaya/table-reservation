import { TextInputProps } from "@mantine/core";

import { EDITABLE_INPUTS_FIELD_VARIANT } from "../const";

type ITextInput = Omit<TextInputProps, "variant"> & {
  variant: EDITABLE_INPUTS_FIELD_VARIANT.TEXT;
};

export type IEditableInputsField = ITextInput;

export interface IEditableInputsEdit {
  title: string;
  onSave: () => void;
  defaultIsEditable: boolean;
  onCancel?: () => void;
}

export interface IEditableInputsProps {
  fields: IEditableInputsField[];
  edit?: IEditableInputsEdit;
}
