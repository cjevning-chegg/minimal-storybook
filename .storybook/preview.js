import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";
import { fanta } from "../packages/theme/fanta";
import FantaFont from "../packages/theme/FantaFont";

const fantaFontTheme = create({
  ...themes.light,
  fontBase: fanta.font.family.default,
});

// configure fanta font as the default font for the whole storybook ui
addParameters({
  options: {
    theme: fantaFontTheme,
  },
});

// add the fanta fonts into the iframe
addDecorator((s) => (
  <>
    <FantaFont />
    {s()}
  </>
));
