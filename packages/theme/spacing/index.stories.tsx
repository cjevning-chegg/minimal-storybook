import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import React from 'react';
import { spacing } from './';
import { colors } from '../colors';
import { font } from '../fantaTypography';

const FlexContainer = styled.div<{ direction?: string; space?: string }>`
  display: inline-flex;
  margin: ${({ space }) => space};
  flex-direction: ${({ direction }) => direction || 'row'};
  font-family: ${font.family.default};
`;

const Square = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${colors.cheggOrange};
`;

const BorderSquare = styled.div`
  border: 1px dashed gray;
  margin-left: 2rem;
`;

const Title = styled.span`
  align-self: center;
  margin-bottom: 0.5rem;
`;

const HorizontalSpacer = styled(Square)<{ space: string }>`
  margin: 0 ${({ space }) => space};
`;

const VerticalSpacer = styled(Square)<{ space: string }>`
  margin: ${({ space }) => space} 0;
`;

const Spacer = styled(Square)<{ space: string }>`
  margin: ${({ space }) => `${space} ${space}`};
`;

// we need to remove a couple of non-color props that get attached to the colors import
const filteredSpacing = { ...spacing };
// TS enums come with a 'displayName' prop that get included with Object.keys/entries etc. like functions
delete (filteredSpacing as any).displayName;
// storybook-addon-info is adding this to the colors import somehow
delete (filteredSpacing as any).__docgenInfo;

storiesOf('Theme', module).add('Spacing', () => {
  const space = select('Spacing', filteredSpacing, spacing.xxs);
  const spaceKey = Object.keys(filteredSpacing).find(
    key => filteredSpacing[key as keyof typeof filteredSpacing] === space
  );
  const documentFontSize = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-size');
  return (
    <FlexContainer direction="column">
      <Title>
        Spacing[{spaceKey}] = {space}
      </Title>
      <Title>
        Your current browser font size is set to {documentFontSize}.
      </Title>
      <Title>
        This results in a computed pixel value of{' '}
        {parseFloat(space) * parseFloat(documentFontSize)}px for your spacing:
      </Title>
      <FlexContainer style={{ alignItems: 'center' }}>
        <FlexContainer direction="column">
          <FlexContainer>
            <Square />
            <HorizontalSpacer space={space} />
            <Square />
          </FlexContainer>
          <FlexContainer direction="column">
            <VerticalSpacer space={space} />
            <Square />
          </FlexContainer>
        </FlexContainer>
        <BorderSquare>
          <Spacer space={space} />
        </BorderSquare>
      </FlexContainer>
    </FlexContainer>
  );
});
