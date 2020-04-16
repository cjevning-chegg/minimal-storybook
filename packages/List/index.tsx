import React from 'react';
import { ListUl, ListLi, ListColor } from './styles';

export type ListOptions = string[] | JSX.Element[];

const List = ({
  items,
  color = ListColor.dark
}: {
  items: ListOptions;
  color?: ListColor;
}): JSX.Element => (
  <ListUl>
    {/* this wacky typing is to deal with https://stackoverflow.com/a/49511416 */}
    {(items as (string | JSX.Element)[]).map((item, index) => (
      <ListLi key={index} color={color}>
        {item}
      </ListLi>
    ))}
  </ListUl>
);

List.displayName = 'List';

export default List;
