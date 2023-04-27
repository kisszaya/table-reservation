import { Icon } from "@tabler/icons-react";
import { FunctionComponent, ReactNode } from "react";
import { DrawerProps } from "@mantine/core";

export interface IDrawerNavbarLink {
  label: string;
  icon: Icon;
  value: string;
  component: ReactNode;
}

export interface IDrawerNavbar {
  links: IDrawerNavbarLink[];
  defaultLink: string;
  title?: string;
}

export type IDrawerWithNavbarProps = Omit<DrawerProps, "children"> & {
  navbar: IDrawerNavbar;
};

export type IDrawerWithoutNavbarProps = DrawerProps;

export type IDrawerProps = IDrawerWithNavbarProps | IDrawerWithoutNavbarProps;
