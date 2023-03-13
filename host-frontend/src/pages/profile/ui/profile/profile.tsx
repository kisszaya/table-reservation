import { FC, useCallback } from "react";
import { Button, Group, Stack } from "@mantine/core";
import { useRouter } from "next/router";

import { authStore } from "entities/auth";
import { useTranslation } from "features/locales";
import { ProfileCard, RestaurantCard } from "widgets";
import { Title } from "shared/ui";
import { PUBLIC_PATH } from "shared/config";
import { ProfileArgs } from "../../index.page";

export const Profile: FC<ProfileArgs> = ({ me }) => {
  const { push } = useRouter();
  const { t } = useTranslation();

  const logout = useCallback(async () => {
    authStore.logout();
    await push(PUBLIC_PATH.LANDING);
  }, []);

  return (
    <Group>
      <Stack>
        <ProfileCard me={me} />
        <Button onClick={logout}>Logout</Button>
      </Stack>
      <Stack>
        <Title>Restaurants</Title>
        <RestaurantCard />
        <RestaurantCard />
      </Stack>
    </Group>
  );
};
