import {
  Drawer as MantineDrawer,
  DrawerProps,
  Group,
  Stack,
} from "@mantine/core";
import { FC } from "react";

import { IDrawerNavbar } from "shared/types";
import { DrawerNavbar } from "..";

type Args = DrawerProps & {
  navbar?: IDrawerNavbar;
};

export const Drawer: FC<Args> = (props) => {
  const { navbar, children, ...defaultProps } = props;

  return (
    <MantineDrawer padding={0} {...defaultProps}>
      {!navbar && children}
      {navbar && (
        <Group align="start" noWrap>
          <DrawerNavbar {...navbar} />
          <Stack m="md" style={{width: '100%'}}>{children}</Stack>
        </Group>
      )}
    </MantineDrawer>
  );
};