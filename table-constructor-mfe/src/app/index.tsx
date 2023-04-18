import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import React from "react";

import Scheme from "../pages/scheme/scheme";

import "./styles.scss";

export const App = () => {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <Scheme />
        </ModalsProvider>
      </MantineProvider>
    </div>
  );
};
