import { Icon } from "@tabler/icons-react";

export interface IDrawerNavbarItem {
  label: string;
  icon: Icon;
  value: string;
}

export interface IDrawerNavbar {
  navbarItems: IDrawerNavbarItem[];
  activeValue: string;
  changeActiveValue: (activeValue: string) => void;
  title?: string;
}
