import { Drawer as MantineDrawer } from "@mantine/core";
import { FC } from "react";

import { DrawerWithNavbar } from "..";
import { IDrawerProps } from "../../types";

export const Drawer: FC<IDrawerProps> = (props) => {
  if ("navbar" in props) {
    return <DrawerWithNavbar {...props} />;
  }

  return (
    <MantineDrawer padding={0} {...props}>
      {props.children}
    </MantineDrawer>
  );
};
