import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { fanta } from '../fanta';
import { fontWeight } from './index';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${fanta.colors.cheggOrange};
  max-width: 10rem;
  text-align: center;
  font-family: ${fanta.font.family.default};
`;

const ShowWeight = styled.p`
  color: ${fanta.colors.dark};
  font-size: ${fanta.font.size.xxl};
`;

storiesOf('Theme', module).add('Font Weight', () => {
  const weight = select('Font Weight', fontWeight, fontWeight.normal);
  const weightKey = Object.keys(fontWeight).find(
    key => fontWeight[key as keyof typeof fontWeight] === weight
  );
  return (
    <BoxWrapper>
      <ShowWeight style={{ fontWeight: weight } as React.CSSProperties}>
        Chegg
      </ShowWeight>
      <span>key: {weightKey}</span>
      <span>CSS value: `{weight}`</span>
    </BoxWrapper>
  );
});
