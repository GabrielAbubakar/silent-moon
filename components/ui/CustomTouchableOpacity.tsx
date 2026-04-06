import React from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type { TouchableOpacityProps as CustomTouchableOpacityProps };

export const CustomTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  activeOpacity = 0.7,
  children,
  ...props
}) => {
  return (
    <RNTouchableOpacity activeOpacity={activeOpacity} {...props}>
      {children}
    </RNTouchableOpacity>
  );
};
