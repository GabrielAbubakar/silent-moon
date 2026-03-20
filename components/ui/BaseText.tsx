import { Colors, fontFamily, fontSize, Typography } from "@/constants";
import { StyleSheet, Text, TextProps } from "react-native";

export type BaseTextVariant = "bold" | "medium" | "default" | "regular";
export type BaseTextSize = keyof typeof fontSize;
export type BaseTextPreset = keyof typeof Typography;

interface BaseTextProps extends TextProps {
  variant?: BaseTextVariant;
  size?: BaseTextSize;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  preset?: BaseTextPreset;
}

export const BaseText = ({
  variant = "default",
  size = "md",
  color,
  textAlign,
  preset,
  style,
  children,
  ...props
}: BaseTextProps) => {
  // If a preset is provided, use its typography properties
  const presetStyles = preset ? Typography[preset] : null;

  // Base font resolving for the standard properties
  const font =
    fontFamily[variant as keyof typeof fontFamily] || fontFamily.default;

  // Compute line height if it's a multiplier from the preset
  let resolvedLineHeight;
  if (presetStyles?.lineHeight && presetStyles?.fontSize) {
    resolvedLineHeight =
      presetStyles.lineHeight < 10
        ? Math.round(presetStyles.fontSize * presetStyles.lineHeight)
        : presetStyles.lineHeight;
  }

  const textStyles = [
    styles.text,
    // Only apply the default variant/size if no preset is supplied
    !preset && {
      fontFamily: font,
      fontSize: fontSize[size],
    },
    // Apply preset styles if provided
    presetStyles && {
      fontFamily: presetStyles.fontFamily,
      fontSize: presetStyles.fontSize,
      lineHeight: resolvedLineHeight,
    },
    color ? { color } : { color: Colors.light.textPrimary },
    textAlign ? { textAlign } : null,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

// Extracted Header, Subtitle, and Body components for convenient usage
export const Header = (props: Omit<BaseTextProps, "preset">) => (
  <BaseText preset="header" {...props} />
);
export const Subtitle = (props: Omit<BaseTextProps, "preset">) => (
  <BaseText preset="subtitle" {...props} />
);
export const Body = (props: Omit<BaseTextProps, "preset">) => (
  <BaseText preset="body" {...props} />
);

const styles = StyleSheet.create({
  text: {
    color: "#0d0d0d", // Default primary text color
  },
});
