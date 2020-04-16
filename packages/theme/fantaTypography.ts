import { theme as agnosticTheme } from '@chegg/ui-agnostic';
import { fontSize } from './fontSize';
import { fontWeight } from './fontWeight';

/**
 * Fanta Typography from
 * https://app.zeplin.io/project/5bec9584b557d82929fe8641/screen/5bef26e9d6daf54e6dad85c9
 */

const { fontFamily } = agnosticTheme;

export const font = {
  /* 
    Pixel conversions listed on the right assume a 16px base font-size on the
    root element. So for size.sm, 1rem * 16 = 16px, and so on.
  */
  size: fontSize,
  family: {
    aspira: '"Aspira Webfont", "Helvetica", "Arial", sans-serif',
    default: fontFamily.default
  },
  weight: fontWeight,
  lineHeight: {
    xs: 1,
    sm: 1.25,
    md: 1.5,
    lg: 2.5
  }
};
