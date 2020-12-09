const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.mdx"],
  addons: ["@storybook/addon-docs"],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: path.resolve("./tsconfig.stories.json"),
    },
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
