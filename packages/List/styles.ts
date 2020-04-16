import styled from "styled-components";
import { fanta } from "../theme/fanta";

export enum ListColor {
  dark = "dark",
  white = "white",
  cheggOrange = "cheggOrange",
}

export const ListUl = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  font-family: ${fanta.font.family.default};
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
`;

export const ListLi = styled.li<{ color: ListColor }>`
  margin-top: ${fanta.spacing.xxs};
  color: ${({ color }) =>
    color === ListColor.white ? fanta.colors.white : fanta.colors.dark};
  display: flex;
  align-items: center;

  &::before {
    content: "\\2022"; /* Unicode for a bullet */
    color: ${({ color }) => fanta.colors[color]};
    display: inline-block;
    width: auto;
    margin-right: ${fanta.spacing.sm};
    // this is needed to help alignment
    margin-top: -0.1rem;
    font-size: ${fanta.font.size.xxs};
  }
`;

export const CheckListLi = styled.li<{ color: ListColor }>`
  margin-top: ${fanta.spacing.xxs};
  display: flex;
  color: ${({ color }) =>
    color === ListColor.white ? fanta.colors.white : fanta.colors.dark};
`;
