import { Colors } from "@/constants";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

interface BaseInputProps extends TextInputProps {
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  rightIcon,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={Colors.light.textSecondary}
        {...props}
      />
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F7",
    borderRadius: 15,
    paddingHorizontal: 20,
    height: 63,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.textPrimary,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
