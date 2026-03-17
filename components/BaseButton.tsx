import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../constants/Colors";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface BaseButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  variant = "primary",
  size = "medium",
  isLoading = false,
  leftIcon,
  rightIcon,
  style,
  disabled,
  ...props
}) => {
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: Colors.light.primary,
          borderWidth: 0,
        };
      case "secondary":
        return {
          backgroundColor: Colors.light.textSecondary,
          borderWidth: 0,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: Colors.light.primary,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      default:
        return {
          backgroundColor: Colors.light.primary,
        };
    }
  };

  const getVariantTextStyle = (): TextStyle => {
    switch (variant) {
      case "primary":
      case "secondary":
        return {
          color: "#FFFFFF",
        };
      case "outline":
      case "text":
        return {
          color: Colors.light.primary,
        };
      default:
        return {
          color: "#FFFFFF",
        };
    }
  };

  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case "small":
        return {
          paddingVertical: 10,
          paddingHorizontal: 20,
        };
      case "medium":
        return {
          paddingVertical: 16,
          paddingHorizontal: 32,
        };
      case "large":
        return {
          paddingVertical: 20,
          paddingHorizontal: 40,
        };
      default:
        return {
          paddingVertical: 16,
          paddingHorizontal: 32,
        };
    }
  };

  const getSizeTextStyle = (): TextStyle => {
    switch (size) {
      case "small":
        return {
          fontSize: 12,
        };
      case "medium":
        return {
          fontSize: 14,
        };
      case "large":
        return {
          fontSize: 16,
        };
      default:
        return {
          fontSize: 14,
        };
    }
  };

  const containerStyle = [
    styles.container,
    getVariantStyle(),
    getSizeStyle(),
    (disabled || isLoading) && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.text,
    getVariantTextStyle(),
    getSizeTextStyle(),
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={getVariantTextStyle().color} />
      ) : (
        <>
          {leftIcon}
          <Text style={textStyle}>{title}</Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 38, // Fully rounded corners (pill shape)
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8, // Space between icon and text
  },
  text: {
    fontWeight: "600",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  disabled: {
    opacity: 0.6,
  },
});
