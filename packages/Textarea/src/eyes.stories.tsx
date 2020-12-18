import React from "react";
import Textarea from ".";
import { fireEvent, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export const textarea = () => {
  return <Textarea data-test="hover" />;
};

const parameters = {
  eyes: {
    runBefore({ rootEl }) {
      const textArea = within(rootEl).getByTestId("testid");
      userEvent.type(textArea, "text");
      fireEvent.change(textArea, "text 2");
      fireEvent.change(textArea, { value: "text 3" });
      fireEvent.change(textArea, { target: { value: "text 4" } });
    },
  },
};

textarea.parameters = parameters;

export default {
  title: "Eyes",
};
