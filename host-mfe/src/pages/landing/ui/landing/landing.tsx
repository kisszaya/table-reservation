import { useCallback } from "react";
import { Button, Container, Group, Overlay, Stack } from "@mantine/core";
import { useRouter } from "next/router";

import { Text, Title } from "shared/ui";
import { PUBLIC_PATH } from "shared/config";
import { useTranslation } from "features/locales";
import { LocaleNamespaces } from "shared/types";
import { useStyles } from "./styles";

export const Landing = () => {
  const { classes, cx } = useStyles();
  const { push } = useRouter();
  const { t } = useTranslation(LocaleNamespaces.COMMON);

  const onLogin = useCallback(async () => {
    await push(PUBLIC_PATH.LOGIN);
  }, []);

  const onRegister = useCallback(async () => {
    await push(PUBLIC_PATH.REGISTER);
  }, []);

  return (
    <Stack className={classes.wrapper} align="center" justify="center">
      <Overlay color="#000" opacity={0.7} zIndex={1} />

      <Stack className={classes.inner} spacing="xs">
        <Title className={classes.title}>{t("landing.title")}</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {t("landing.description")}
          </Text>
        </Container>

        <Group className={classes.controls} spacing="lg">
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            onClick={onLogin}
          >
            {t("landing.loginButton")}
          </Button>
          <Button
            onClick={onRegister}
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            {t("landing.registerButton")}
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};
