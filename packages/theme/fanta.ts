import { colors } from "./colors";
import { font } from "./fantaTypography";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { theme as agnosticTheme } from "@chegg/ui-agnostic";

export const fanta = {
  colors,
  font,
  spacing,
  borderRadius: borderRadius,
  zindex: agnosticTheme.zindex,
};
