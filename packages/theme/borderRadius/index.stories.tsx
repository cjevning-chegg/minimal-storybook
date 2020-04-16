import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { fanta } from '../fanta';
import { borderRadius } from './index';

const ShowRadius = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${fanta.colors.dark};
  width: 10rem;
  height: 10rem;
  text-align: center;
  justify-content: center;
  font-family: ${fanta.font.family.default};
`;

const ContentPos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${fanta.colors.cheggOrange};
`;

const BoxPos = styled.div`
  position: absolute;
  left: 35rem;
  top: 10rem;
`;

storiesOf('Theme', module).add('Border Radius', () => {
  const radiusSize = select('Border Radius', borderRadius, borderRadius.mini);
  const radiusKey = Object.keys(borderRadius).find(
    key => borderRadius[key as keyof typeof borderRadius] === radiusSize
  );

  return (
    <BoxPos>
      <ShowRadius style={{ borderRadius: radiusSize }}>
        <ContentPos>
          <span>{radiusKey}</span>
          <span>{radiusSize}</span>
        </ContentPos>
      </ShowRadius>
    </BoxPos>
  );
});
