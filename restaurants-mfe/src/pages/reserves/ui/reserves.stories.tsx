import * as React from "react";
import { type ComponentStory, type Meta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook";
import { THEME_VARIANT } from "features/theme-provider";
import Reserves from "./reserves";

export default {
  title: "pages/reserve",
  component: Reserves,
} as Meta<typeof Reserves>;

const Template: ComponentStory<typeof Reserves> = () => <Reserves />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)];
