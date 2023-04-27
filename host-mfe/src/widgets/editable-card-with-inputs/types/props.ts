import { EDITABLE_CARD_WITH_INPUTS_FIELD_VARIANT } from "../const";

export type IEditableCardWithInputsField = {
  variant: EDITABLE_CARD_WITH_INPUTS_FIELD_VARIANT.TEXT;
  value: string;
  label: string;
};

export interface IEditableCardWithInputsProps {
  fields: IEditableCardWithInputsField[];
  editable?: boolean;
}
