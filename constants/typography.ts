/**
 * Grocerya Design System - Typography
 * Single source of truth for all typography values
 */

/**
 * Font families
 * Using Poppins as the primary font family
 */
export const FontFamily = {
  bold: "HelveticaNeue-Bold",
  regular: "HelveticaNeue-Roman",
  light: "HelveticaNeue-Light",
  medium: "HelveticaNeue-Medium",
  default: "HelveticaNeue-Roman",
} as const;

/**
 * Font sizes
 */
export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  "3xl": 28,
  xxxl: 32,
  xxxxl: 44,
} as const;

/**
 * Line heights
 */
export const LineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

/**
 * Font weights
 */
export const FontWeight = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

/**
 * Typography presets
 */
export const Typography = {
  header: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize["3xl"],
    lineHeight: LineHeight.tight,
  },
  subtitle: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.md,
    lineHeight: LineHeight.normal,
  },
  body: {
    fontFamily: FontFamily.default,
    fontSize: FontSize.md,
    lineHeight: LineHeight.normal,
  },
} as const;

export {
  FontFamily as fontFamily,
  FontSize as fontSize,
  FontWeight as fontWeight,
  LineHeight as lineHeight
};

