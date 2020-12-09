import React from "react";
import Input from ".";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export const input = () => {
  return <Input data-test="hover" />;
};

const parameters = {
  eyes: {
    runBefore({ rootEl }) {
      userEvent.hover(within(rootEl).getByTestId("hover"));
    },
  },
};

input.parameters = parameters;

export default {
  title: "Eyes",
};
