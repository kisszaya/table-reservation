import * as React from "react";
import { type ComponentStory, type Meta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { THEME_VARIANT } from "features/theme-provider";
import ReservesForbidden from "./reserves-forbidden";

export default {
  title: "pages/reserve-forbidden",
  component: ReservesForbidden,
} as Meta<typeof ReservesForbidden>;

const Template: ComponentStory<typeof ReservesForbidden> = () => (
  <ReservesForbidden />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)];
