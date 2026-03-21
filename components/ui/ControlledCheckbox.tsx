import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface ControlledCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T, any>;
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export function ControlledCheckbox<T extends FieldValues>({
  name,
  control,
  children,
  containerStyle,
}: ControlledCheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={containerStyle}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.checkboxContainer}
            onPress={() => onChange(!value)}
          >
            <View style={styles.textContainer}>{children}</View>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() => onChange(!value)}
            >
              <Ionicons
                name={value ? "checkbox" : "square-outline"}
                size={24}
                color={
                  value
                    ? Colors.light.primary
                    : error
                      ? "red"
                      : Colors.light.textSecondary
                }
              />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* {error && (
            <BaseText size="sm" style={styles.errorText}>
              {error.message}
            </BaseText>
          )} */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  errorText: {
    color: "red",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
});
