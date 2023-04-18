import { useMemo, useState } from "react";
import { IconUsers, IconPlus } from "@tabler/icons-react";

import { IDrawerNavbar, IDrawerNavbarItem } from "shared/types";

export enum EMPLOYEES_DRAWER_NAVBAR_VALUES {
  EMPLOYEES = "employees",
  ADD_EMPLOYEE = "add_employee",
}

export const useDrawerNavbar = () => {
  const [selectedNavbar, setSelectedNavbar] =
    useState<EMPLOYEES_DRAWER_NAVBAR_VALUES>(
      EMPLOYEES_DRAWER_NAVBAR_VALUES.EMPLOYEES
    );

  const employeesNavbarItems: IDrawerNavbarItem[] = useMemo(
    () => [
      {
        label: "Employees",
        icon: IconUsers,
        value: EMPLOYEES_DRAWER_NAVBAR_VALUES.EMPLOYEES,
      },
      {
        label: "Add employee",
        icon: IconPlus,
        value: EMPLOYEES_DRAWER_NAVBAR_VALUES.ADD_EMPLOYEE,
      },
    ],
    []
  );

  const navbar: IDrawerNavbar = useMemo(
    () => ({
      title: "Employees",
      navbarItems: employeesNavbarItems,
      changeActiveValue: setSelectedNavbar as (value: string) => void,
      activeValue: selectedNavbar,
    }),
    [selectedNavbar]
  );

  return { navbar, selectedNavbar };
};
