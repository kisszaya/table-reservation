import { FC, useCallback } from "react";

import { Drawer } from "widgets";
import { AddEmployeeSection, EmployeesSection } from "..";
import { EMPLOYEES_DRAWER_NAVBAR_VALUES, useDrawerNavbar } from "../../lib";

interface Args {
  opened: boolean;
  close: () => void;
}

export const RestaurantEmployees: FC<Args> = ({ opened, close }) => {
  const { navbar, selectedNavbar } = useDrawerNavbar();

  const getContent = useCallback(
    (selectedNavbar: EMPLOYEES_DRAWER_NAVBAR_VALUES) => {
      switch (selectedNavbar) {
        case EMPLOYEES_DRAWER_NAVBAR_VALUES.ADD_EMPLOYEE:
          return <AddEmployeeSection />;
        case EMPLOYEES_DRAWER_NAVBAR_VALUES.EMPLOYEES:
          return <EmployeesSection />;
        default:
          const _: never = selectedNavbar;
          throw new Error("Provide component for RestaurantEmployees section");
      }
    },
    []
  );

  return (
    <Drawer
      opened={opened}
      onClose={close}
      withCloseButton={false}
      position="right"
      size="xl"
      navbar={navbar}
    >
      {getContent(selectedNavbar)}
    </Drawer>
  );
};
