import { Drawer as MantineDrawer, Group, Stack } from "@mantine/core";
import { useState } from "react";

import { IDrawerWithNavbarProps } from "../../types";
import { DrawerNavbar } from "..";

export const DrawerWithNavbar = (props: IDrawerWithNavbarProps) => {
  const { navbar, ...defaultProps } = props;
  const { title, links, defaultLink } = navbar;

  const [activeLink, setActiveLink] = useState<string>(defaultLink);

  return (
    <MantineDrawer padding={0} {...defaultProps}>
      <Group align="start" noWrap>
        <DrawerNavbar
          links={links}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          title={title}
        />
        <Stack m="md" style={{ width: "100%" }}>
          {navbar.links.find((link) => link.value === activeLink)?.component}
        </Stack>
      </Group>
    </MantineDrawer>
  );
};
