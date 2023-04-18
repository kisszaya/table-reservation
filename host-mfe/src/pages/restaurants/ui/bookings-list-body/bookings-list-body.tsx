import { FC } from "react";
import { ScrollArea, Stack } from "@mantine/core";

import { ReservationCard } from "widgets";
import { IReservationCard } from "shared/types";

export const BookingsListBody: FC = () => {
  const reserves: IReservationCard[] = [
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

  return (
    <ScrollArea h="75vh" scrollbarSize={2}>
      <Stack spacing="xs">
        {reserves.map((el) => (
          <ReservationCard {...el} key={JSON.stringify(el)} />
        ))}
      </Stack>
    </ScrollArea>
  );
};
