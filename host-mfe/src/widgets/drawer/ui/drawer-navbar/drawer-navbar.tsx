import { Navbar } from "@mantine/core";
import { FC, useMemo } from "react";

import { Text } from "shared/ui";
import { IDrawerNavbar } from "../../types";

import { useStyles } from "./styles";

type Props = Omit<IDrawerNavbar, "defaultLink"> & {
  activeLink: string;
  setActiveLink: (link: string) => void;
};

export const DrawerNavbar: FC<Props> = (props) => {
  const { title, links, activeLink, setActiveLink } = props;
  const { classes, cx } = useStyles();

  const linksElement = useMemo(
    () =>
      links.map(({ icon: Icon, label, value }) => (
        <div
          className={cx(classes.link, {
            [classes.linkActive]: value === activeLink,
          })}
          key={value}
          onClick={(event) => {
            event.preventDefault();
            setActiveLink(value);
          }}
        >
          <Icon className={classes.linkIcon} stroke={1.5} />
          <span>{label}</span>
        </div>
      )),
    [activeLink, cx, links]
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
        {linksElement}
      </Navbar.Section>
    </Navbar>
  );
};
