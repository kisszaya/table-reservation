import { CARD_WITH_INPUTS_FIELD_VARIANT } from "../const";

export type ICardWithInputsField = {
  variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT;
  value: string;
  label: string;
};

export interface ICardWithInputProps {
  title: string;
  fields: ICardWithInputsField[];
}
