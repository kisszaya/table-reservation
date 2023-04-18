import { Navbar } from "@mantine/core";
import { FC, useMemo } from "react";

import { IDrawerNavbar } from "shared/types";
import { Text } from "shared/ui";

import { useStyles } from "./styles";

type Args = IDrawerNavbar;

export const DrawerNavbar: FC<Args> = (props) => {
  const { changeActiveValue, activeValue, navbarItems, title } = props;
  const { classes, cx } = useStyles();

  const links = useMemo(
    () =>
      navbarItems.map(({ icon: Icon, label, value }) => (
        <div
          className={cx(classes.link, {
            [classes.linkActive]: value === activeValue,
          })}
          key={value}
          onClick={(event) => {
            event.preventDefault();
            changeActiveValue(value);
          }}
        >
          <Icon className={classes.linkIcon} stroke={1.5} />
          <span>{label}</span>
        </div>
      )),
    [activeValue]
  );

  return (
    <Navbar height="100vh" width={{ sm: 250 }} className={classes.navbar}>
      {title && (
        <Navbar.Section>
          <Text
            weight={500}
            size="sm"
            className={classes.title}
            color="dimmed"
            mb="xs"
          >
            {title}
          </Text>
        </Navbar.Section>
      )}
      <Navbar.Section grow mt="xl">
        {links}
      </Navbar.Section>
    </Navbar>
  );
};
