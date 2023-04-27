import { Drawer } from "widgets/drawer";

import { drawerNavbar } from "../../const";

interface Props {
  opened: boolean;
  close: () => void;
}

export const EmployeesDrawer = (props: Props) => {
  const { opened, close } = props;

  return (
    <Drawer
      opened={opened}
      withCloseButton={false}
      onClose={close}
      position="right"
      size="xl"
      navbar={drawerNavbar}
    />
  );
};
