import { IconClock, IconSettings } from "@tabler/icons-react";
import { IDrawerNavbar, IDrawerNavbarLink } from "widgets/drawer";

import { GeneralSettings } from "../ui/general-settings/general-settings";
import { WorkingHoursSettings } from "../ui/working-hours-settings/working-hours-settings";

export enum SETTINGS_DRAWER_NAVBAR_LINKS {
  GENERAL = "general",
  WORKING_TIME = "working_time",
}

const drawerNavbarLinks: IDrawerNavbarLink[] = [
  {
    label: "General",
    icon: IconSettings,
    value: SETTINGS_DRAWER_NAVBAR_LINKS.GENERAL,
    component: <GeneralSettings />,
  },
  {
    label: "Opening hours",
    icon: IconClock,
    value: SETTINGS_DRAWER_NAVBAR_LINKS.WORKING_TIME,
    component: <WorkingHoursSettings />,
  },
];

export const drawerNavbar: IDrawerNavbar = {
  title: "Настройки ресторана",
  links: drawerNavbarLinks,
  defaultLink: SETTINGS_DRAWER_NAVBAR_LINKS.GENERAL,
};
