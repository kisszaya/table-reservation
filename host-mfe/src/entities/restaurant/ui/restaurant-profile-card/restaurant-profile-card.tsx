import { useStore } from "effector-react";
import { useMemo } from "react";

import { meStore } from "entities/me";
import {
  CARD_WITH_INPUTS_FIELD_VARIANT,
  CardWithInputs,
  ICardWithInputsField,
} from "widgets/card-with-inputs";
import { useAuthStore } from "shared/lib/hooks";

import { $restaurantInfo } from "../../model";

export const RestaurantProfileCard = () => {
  const { fullName, email } = useAuthStore(meStore.$meInfo);
  const { name } = useAuthStore($restaurantInfo);

  const fields: ICardWithInputsField[] = useMemo(
    () => [
      {
        label: "Имя",
        value: fullName,
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        label: "Почта",
        value: email,
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
      {
        label: "Название ресторана",
        value: name,
        variant: CARD_WITH_INPUTS_FIELD_VARIANT.TEXT,
      },
    ],
    [email, fullName, name]
  );

  return <CardWithInputs title="Ресторан" fields={fields} />;
};
