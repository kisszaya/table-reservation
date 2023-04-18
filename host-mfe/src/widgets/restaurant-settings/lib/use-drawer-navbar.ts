import { useMemo, useState } from "react";
import { IconClock, IconSettings } from "@tabler/icons-react";

import { IDrawerNavbar, IDrawerNavbarItem } from "shared/types";

export enum SETTINGS_DRAWER_NAVBAR_VALUES {
  GENERAL = "general",
  WORKING_TIME = "working_time",
}

export const useDrawerNavbar = () => {
  const [selectedNavbar, setSelectedNavbar] =
    useState<SETTINGS_DRAWER_NAVBAR_VALUES>(
      SETTINGS_DRAWER_NAVBAR_VALUES.GENERAL
    );

  const settingsNavbarItems: IDrawerNavbarItem[] = useMemo(
    () => [
      {
        label: "General",
        icon: IconSettings,
        value: SETTINGS_DRAWER_NAVBAR_VALUES.GENERAL,
      },
      {
        label: "Opening hours",
        icon: IconClock,
        value: SETTINGS_DRAWER_NAVBAR_VALUES.WORKING_TIME,
      },
    ],
    []
  );

  const navbar: IDrawerNavbar = useMemo(
    () => ({
      title: "Settings",
      navbarItems: settingsNavbarItems,
      changeActiveValue: setSelectedNavbar as (value: string) => void,
      activeValue: selectedNavbar,
    }),
    [selectedNavbar]
  );

  return { navbar, selectedNavbar };
};
