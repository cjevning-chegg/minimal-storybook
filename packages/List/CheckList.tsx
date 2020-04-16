import { Icon } from "@chegg/ui-agnostic";
import React from "react";
import { fanta } from "../theme/fanta";
import { ListOptions } from ".";
import { ListUl, CheckListLi, ListColor } from "./styles";

const CheckList = ({
  items,
  color = ListColor.dark,
}: {
  items: ListOptions;
  color?: ListColor;
}): JSX.Element => (
  <ListUl>
    {/* this wacky typing is to deal with https://stackoverflow.com/a/49511416 */}
    {(items as (string | JSX.Element)[]).map((item, index) => (
      <CheckListLi key={index} color={color}>
        <Icon.Checkmark
          cssWidth="2rem"
          cssHeight="1rem"
          svgColor={fanta.colors[color]}
          viewBox="0 15 60 30"
        />
        {item}
      </CheckListLi>
    ))}
  </ListUl>
);

CheckList.displayName = "CheckList";

export default CheckList;
