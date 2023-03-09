import { FC } from "react";
import { Group, Stack } from "@mantine/core";
import { useRouter } from "next/router";

import { useTranslation } from "features/locales";
import { ProfileCard } from "widgets/profile-card";
import { Title } from "shared/ui";
import { RestaurantCard } from "widgets/restaurant-card";
import { ProfileArgs } from "../../index.page";

export const Profile: FC<ProfileArgs> = ({ me }) => {
  const { push } = useRouter();
  const { t } = useTranslation();

  return (
    <Group>
      <Stack>
        <ProfileCard me={me} />
        {/*<Button onClick={logout}>Logout</Button>*/}
      </Stack>
      <Stack>
        <Title>Restaurants</Title>
        <RestaurantCard />
        <RestaurantCard />
      </Stack>
    </Group>
  );
};
