import { BaseInput } from "./BaseInput";
import { BaseText } from "./BaseText";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface ControlledInputProps<T extends FieldValues> extends React.ComponentProps<typeof BaseInput> {
  name: Path<T>;
  control: Control<T, any>;
}

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  containerStyle,
  ...inputProps
}: ControlledInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <BaseInput
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
