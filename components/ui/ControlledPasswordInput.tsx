import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { PasswordInput } from "./PasswordInput";
import { BaseText } from "./BaseText";

interface ControlledPasswordInputProps<T extends FieldValues>
  extends React.ComponentProps<typeof PasswordInput> {
  name: Path<T>;
  control: Control<T, any>;
}

export function ControlledPasswordInput<T extends FieldValues>({
  name,
  control,
  containerStyle,
  ...inputProps
}: ControlledPasswordInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <PasswordInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            containerStyle={[
              containerStyle,
              error ? { marginBottom: 8, borderColor: "red", borderWidth: 1 } : undefined,
            ]}
            {...inputProps}
          />
          {error && (
            <BaseText size="sm" style={styles.errorText}>
              {error.message}
            </BaseText>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});
