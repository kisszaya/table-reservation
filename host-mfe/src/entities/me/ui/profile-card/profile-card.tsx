import { useMemo } from "react";

import { $meInfo } from "../../model";
import {
  CARD_WITH_INPUTS_FIELD_VARIANT,
  CardWithInputs,
  ICardWithInputsField,
} from "widgets/card-with-inputs";

import { useAuthStore } from "shared/lib/hooks";

export const ProfileCard = () => {
  const { email, fullName, phone } = useAuthStore($meInfo);

  const fields: ICardWithInputsField[] = useMemo(
    () => [
      {
        label: "Имя",
        value: fullName,
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        label: "Телефон",
        value: phone || "",
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        label: "Почта",
        value: email,
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
    ],
    [email, fullName, phone]
  );

  return <CardWithInputs title="Профиль" fields={fields} />;
};
