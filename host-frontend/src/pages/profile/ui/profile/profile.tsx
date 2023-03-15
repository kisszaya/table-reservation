import { FC } from "react";
import { Button, Group, Stack } from "@mantine/core";

import { useTranslation } from "features/locales";
import { ProfileCard, RestaurantCard } from "widgets";
import { Title } from "shared/ui";
import { ProfileArgs } from "pages/profile/index.page";
import { useLogout } from "pages/profile/lib";
import { openCreateRestaurantModal } from "..";

export const Profile: FC<ProfileArgs> = ({ me }) => {
  const { logout } = useLogout();
  const { t } = useTranslation();

  return (
    <Group>
      <Stack>
        <ProfileCard me={me} />
        <Button onClick={logout}>Logout</Button>
      </Stack>
      <Stack>
        <Group>
          <Title>Restaurants</Title>
          <Button onClick={openCreateRestaurantModal}>Create restaurant</Button>
        </Group>
        <RestaurantCard />
        <RestaurantCard />
      </Stack>
    </Group>
  );
};
