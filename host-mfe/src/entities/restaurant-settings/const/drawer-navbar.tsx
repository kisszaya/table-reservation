import { IconClock, IconSettings, IconTable } from "@tabler/icons-react";
import { IDrawerNavbar, IDrawerNavbarLink } from "widgets/drawer";

import { GeneralSettings } from "../ui/general-settings/general-settings";
import { WorkingHoursSettings } from "../ui/working-hours-settings/working-hours-settings";
import { TablesSettings } from "../ui/tables-settings/tables-settings";

export enum SETTINGS_DRAWER_NAVBAR_LINKS {
  GENERAL = "general",
  WORKING_TIME = "working_time",
  TABLES = "tables",
}

const drawerNavbarLinks: IDrawerNavbarLink[] = [
  {
    label: "Общие настройки",
    icon: IconSettings,
    value: SETTINGS_DRAWER_NAVBAR_LINKS.GENERAL,
    component: <GeneralSettings />,
  },
  {
    label: "Время работы",
    icon: IconClock,
    value: SETTINGS_DRAWER_NAVBAR_LINKS.WORKING_TIME,
    component: <WorkingHoursSettings />,
  },
  {
    label: "Столы",
    icon: IconTable,
    value: SETTINGS_DRAWER_NAVBAR_LINKS.TABLES,
    component: <TablesSettings />,
  },
];

export const drawerNavbar: IDrawerNavbar = {
  title: "Настройки ресторана",
  links: drawerNavbarLinks,
  defaultLink: SETTINGS_DRAWER_NAVBAR_LINKS.GENERAL,
};
