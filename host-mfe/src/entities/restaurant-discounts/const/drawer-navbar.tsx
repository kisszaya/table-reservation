import { IconClock, IconSettings } from "@tabler/icons-react";
import { IDrawerNavbar, IDrawerNavbarLink } from "widgets/drawer";

import { AddDiscount } from "../ui/add-discount/add-discount";
import { Discounts } from "../ui/discounts/discounts";

export enum DISCOUNTS_DRAWER_NAVBAR_LINKS {
  DISCOUNTS = "discounts",
  ADD_DISCOUNT = "add_discount",
}

const drawerNavbarLinks: IDrawerNavbarLink[] = [
  {
    label: "Active discounts",
    icon: IconSettings,
    value: DISCOUNTS_DRAWER_NAVBAR_LINKS.DISCOUNTS,
    component: <Discounts />,
  },
  {
    label: "Add discount",
    icon: IconClock,
    value: DISCOUNTS_DRAWER_NAVBAR_LINKS.ADD_DISCOUNT,
    component: <AddDiscount />,
  },
];

export const drawerNavbar: IDrawerNavbar = {
  title: "Акции ресторана",
  links: drawerNavbarLinks,
  defaultLink: DISCOUNTS_DRAWER_NAVBAR_LINKS.DISCOUNTS,
};
