import { FC, ReactNode } from "react";
import { Container, Paper, Stack } from "@mantine/core";

import { Text, Title } from "shared/ui";

interface Args {
  children: ReactNode;
  title: string;
  description?: ReactNode | string;
}

export const FormContainer: FC<Args> = (props) => {
  const { title, description, children } = props;

  return (
    <Stack h="100vh" justify="center">
      <Container size={420} style={{ minWidth: "420px" }}>
        <Title align="center" weight="bold">
          {title}
        </Title>
        {description && (
          <Text color="dimmed" size="sm" align="center" mt={5}>
            {description}
          </Text>
        )}
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {children}
        </Paper>
      </Container>
    </Stack>
  );
};
