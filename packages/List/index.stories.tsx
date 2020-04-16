import { select, color, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import List, { ListOptions } from ".";
import { ListColor } from "./styles";
import CheckList from "./CheckList";
// import Tooltip from "../ToolTip";

const BgColorProvider = styled.div<{ backgroundColor: string }>`
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const getListOptions = (itemType: string, numberOfOptions: number) => {
  const items: ListOptions = [];
  for (var i = 0; i < Math.min(numberOfOptions, 1000); i++) {
    if (itemType === "string") {
      (items as string[]).push(`List item ${i + 1}`);
    } else {
      (items as JSX.Element[]).push(
        // <Tooltip
        //   position="right"
        //   targetElement={<div>{`List item ${i + 1} (Hover Me!)`}</div>}
        // >
        <div>{"This list item is a tooltip element!"}</div>
        // </Tooltip>
      );
    }
  }
  return items;
};

const stories = storiesOf("List", module);
stories.add("Basic List", () => {
  const backgroundColor = color(
    "Background color (use to accentuate effects of list color prop below)",
    "#ffffff"
  );
  const listColor = select(
    "List color (only applys to the bullets when `cheggOrange`)",
    ListColor,
    "dark" as any
  );
  const itemType = select(
    "Type of item children",
    { String: "string", Element: "element" },
    "string"
  );
  const numberOfOptions = number(
    "Number of list items (capped at 1000 in the story for perf. reasons)",
    5
  );
  const items = getListOptions(itemType, numberOfOptions);
  return (
    <BgColorProvider backgroundColor={backgroundColor}>
      <List
        items={items}
        color={ListColor[listColor as keyof typeof ListColor]}
      />
    </BgColorProvider>
  );
});

stories.add("CheckList", () => {
  const backgroundColor = color(
    "Background color (use to accentuate effects of list color prop below)",
    "#ffffff"
  );
  const listColor = select(
    "List color (only applys to the bullets when `cheggOrange`)",
    ListColor,
    "dark" as any
  );
  const itemType = select(
    "Type of item children",
    { String: "string", Element: "element" },
    "string"
  );
  const numberOfOptions = number(
    "Number of list items (capped at 1000 in the story for perf. reasons)",
    5
  );
  const items = getListOptions(itemType, numberOfOptions);
  return (
    <BgColorProvider backgroundColor={backgroundColor}>
      <CheckList
        items={items}
        color={ListColor[listColor as keyof typeof ListColor]}
      />
    </BgColorProvider>
  );
});
