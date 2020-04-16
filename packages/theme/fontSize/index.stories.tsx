import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { fanta } from '../fanta';
import { fontSize } from './index';

const FontSizeWrapper = styled.div`
  position: absolute;
  top: 7rem;
  left: 7rem;
  display: flex;
  flex-direction: column;
  border: 2px solid ${fanta.colors.cheggOrange};
  max-width: 10rem;
  text-align: center;
  padding: 2rem;
  font-family: ${fanta.font.family.default};
`;

const ShowFont = styled.p`
  color: ${fanta.colors.dark};
`;

const FontBox = styled.div`
  border-bottom: 1px solid ${fanta.colors.dark};
`;

const PropTitle = styled.p`
  font-size: ${fanta.font.size.md};
`;
storiesOf('Theme', module).add('Font Size', () => {
  const size = select('Spacing', fontSize, fontSize.xxs);
  const sizeKey = Object.keys(fontSize).find(
    key => fontSize[key as keyof typeof fontSize] === size
  );
  const documentFontSize = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-size');

  return (
    <FontSizeWrapper>
      <FontBox>
        <ShowFont style={{ fontSize: size }}>Chegg </ShowFont>
      </FontBox>
      <PropTitle>Font Properties</PropTitle>
      <span>{sizeKey}</span>
      <span>{size}</span>
      <span> {parseFloat(size) * parseFloat(documentFontSize)}px</span>
    </FontSizeWrapper>
  );
});
