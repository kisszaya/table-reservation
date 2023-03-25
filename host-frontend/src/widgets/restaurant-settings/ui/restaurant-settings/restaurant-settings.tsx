import { FC, useCallback } from "react";

import { SETTINGS_DRAWER_NAVBAR_VALUES, useDrawerNavbar } from "../../lib";
import { Drawer } from "widgets";
import { GeneralSettingsSection, WorkingHoursSection } from "..";

interface Args {
  opened: boolean;
  close: () => void;
}

export const RestaurantSettings: FC<Args> = ({ opened, close }) => {
  const { navbar, selectedNavbar } = useDrawerNavbar();

  const getContent = useCallback(
    (selectedNavbar: SETTINGS_DRAWER_NAVBAR_VALUES) => {
      switch (selectedNavbar) {
        case SETTINGS_DRAWER_NAVBAR_VALUES.GENERAL:
          return <GeneralSettingsSection />;
        case SETTINGS_DRAWER_NAVBAR_VALUES.WORKING_TIME:
          return <WorkingHoursSection />;
        default:
          const _: never = selectedNavbar;
          throw new Error("Provide component for RestaurantSettings section");
      }
    },
    []
  );

  return (
    <Drawer
      opened={opened}
      withCloseButton={false}
      onClose={close}
      position="right"
      size="xl"
      navbar={navbar}
    >
      {getContent(selectedNavbar)}
    </Drawer>
  );
};
