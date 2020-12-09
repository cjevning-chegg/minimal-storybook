/* any functionality that external components need, and thus must be exported, goes in this file */
import { FlattenSimpleInterpolation, css } from 'styled-components';
import {
  animationDurationInMS,
  colors,
  FadeInAnimation,
  font,
  ReduceMotion,
  spacing,
  zindex,
} from '@chegg-ui/theme';
import { TooltipPosition } from './types';

const borderWidth = '1px';
const arrowSize = '0.75rem';

// these styles are leveraged by the Toggletip component as well
export const getTooltipStyles = (
  position: TooltipPosition,
  isShown: boolean
): FlattenSimpleInterpolation => css`
  position: absolute;
  display: ${isShown ? 'inline-flex' : 'none'};
  z-index: ${zindex.tooltip};
  flex-direction: column;
  line-height: ${font.lineHeight.sm};
  padding: ${spacing.md};
  text-align: left;
  // NOTE: IE does not support 'max-content' but the fallback behavior is fine for that small use case
  width: max-content;
  max-width: 300px;
  font-family: ${font.family.default};
  font-weight: ${font.weight.bold};
  animation: ${FadeInAnimation({ duration: animationDurationInMS.slow })};
  ${ReduceMotion}
  // rgb 34,34,34 is equivalent to fanta.colors.dark
  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.4);
  background-color: ${colors.dark};
  color: ${colors.white};

  & span:nth-child(2) {
    font-weight: ${font.weight.normal};
    margin-top: ${spacing.xs};
    display: block;
  }

  ${(() => {
    switch (position) {
      case 'top':
        return `
            bottom: calc(100% + ${arrowSize} - ${borderWidth});
            left: calc(50%);
            transform: translateX(-50%);
          `;
      case 'topRight':
        return `
            bottom: calc(100% + ${arrowSize} - ${borderWidth});
            left: calc(50% - ${arrowSize} - ${arrowSize});
          `;
      case 'right':
        return `
            top: 50%;
            left: calc(100% + ${arrowSize} - ${borderWidth});
            transform: translateY(-50%);
          `;
      case 'bottomRight':
        return `
            top: calc(100% + ${arrowSize} - ${borderWidth});
            left: calc(50% - ${arrowSize} - ${arrowSize});
          `;
      case 'bottom':
        return `
            top: calc(100% + ${arrowSize} - ${borderWidth});
            left: calc(50%);
            transform: translateX(-50%);
          `;
      case 'bottomLeft':
        return `
            top: calc(100% + ${arrowSize} - ${borderWidth});
            right: calc(50% - ${arrowSize} - ${arrowSize});
          `;
      case 'left':
        return `
            top: 50%;
            right: calc(100% + ${arrowSize} - ${borderWidth});
            transform: translateY(-50%);
          `;
      case 'topLeft':
        return `
            bottom: calc(100% + ${arrowSize} - ${borderWidth});
            right: calc(50% - ${arrowSize} - ${arrowSize});
          `;
    }
  })()}

  &::before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    border-color: transparent;
    border-width: ${arrowSize};
    ${(() => {
      switch (position) {
        case 'top':
          return `
              top: 100%;
              left: calc(50%);
              border-top-color: ${colors.dark};
              margin-left: -${arrowSize};
            `;
        case 'topRight':
          return `
              top: 100%;
              left: calc(0% + ${arrowSize} + ${arrowSize});
              border-top-color: ${colors.dark};
              margin-left: -${arrowSize};
            `;
        case 'right':
          return `
              right: 100%;
              top: 50%;
              border-right-color: ${colors.dark};
              margin-top: -${arrowSize};
            `;
        case 'bottomRight':
          return `
              bottom: 100%;
              left: calc(0% + ${arrowSize} + ${arrowSize});
              border-bottom-color: ${colors.dark};
              margin-left: -${arrowSize};
            `;
        case 'bottom':
          return `
              bottom: 100%;
              left: calc(50%);
              border-bottom-color: ${colors.dark};
              margin-left: -${arrowSize};
            `;
        case 'bottomLeft':
          return `
              bottom: 100%;
              right: calc(0% + ${arrowSize} + ${arrowSize});
              border-bottom-color: ${colors.dark};
              margin-right: -${arrowSize};
            `;
        case 'left':
          return `
              left: 100%;
              top: 50%;
              border-left-color: ${colors.dark};
              margin-top: -${arrowSize};
            `;
        case 'topLeft':
          return `
              top: 100%;
              right: calc(0% + ${arrowSize} + ${arrowSize});
              border-top-color: ${colors.dark};
              margin-left: ${arrowSize};
            `;
      }
    })()}
  }

  &::after {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    border-color: transparent;
    border-width: calc(${arrowSize} - ${borderWidth});
    ${(() => {
      switch (position) {
        case 'top':
          return `
              top: 100%;
              left: calc(50%);
              border-top-color: ${colors.dark};
              margin-left: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'topRight':
          return `
              top: 100%;
              left: calc(0% + ${arrowSize} + ${arrowSize});
              border-top-color: ${colors.dark};
              margin-left: -${arrowSize};
            `;
        case 'right':
          return `
              right: 100%;
              top: 50%;
              border-right-color: ${colors.dark};
              margin-top: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'bottomRight':
          return `
              bottom: 100%;
              left: calc(0% + ${arrowSize} + ${arrowSize});
              border-bottom-color: ${colors.dark};
              margin-left: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'bottom':
          return `
              bottom: 100%;
              left: calc(50%);
              border-bottom-color: ${colors.dark};
              margin-left: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'bottomLeft':
          return `
              bottom: 100%;
              right: calc(0% + ${arrowSize} + ${arrowSize});
              border-bottom-color: ${colors.dark};
              margin-right: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'left':
          return `
              left: 100%;
              top: 50%;
              border-left-color: ${colors.dark};
              margin-top: calc(-${arrowSize} + ${borderWidth});
            `;
        case 'topLeft':
          return `
              top: 100%;
              right: calc(0% + ${arrowSize} + ${arrowSize});
              border-top-color: ${colors.dark};
              margin-left: ${arrowSize};
            `;
      }
    })()}
  }
`;
