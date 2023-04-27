import { FC } from "react";
import { ScrollArea, Stack } from "@mantine/core";

import { IReservePreviewCard } from "../../types";
import { ReservePreviewCard } from "..";

export const ReservesPreviewList: FC = () => {
  return (
    <ScrollArea h="75vh" scrollbarSize={2}>
      <Stack spacing="xs">
        {reserves.map((el) => (
          <ReservePreviewCard {...el} key={JSON.stringify(el)} />
        ))}
      </Stack>
    </ScrollArea>
  );
};

const reserves: IReservePreviewCard[] = [
  {
    phone: "+7 953746287",
    fullName: "Матвеева Светлана",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Елена",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Светлана",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Елена",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Светлана",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Елена",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Светлана",
  },
  {
    phone: "+7 953746287",
    fullName: "Матвеева Елена",
  },
];
