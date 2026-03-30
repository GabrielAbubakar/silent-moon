import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { BaseInput } from "./BaseInput";

export const PasswordInput: React.FC<React.ComponentProps<typeof BaseInput>> = (
  props,
) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <BaseInput
      {...props}
      // secureTextEntry={isSecure}
      rightIcon={
        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={isSecure ? "eye-off-outline" : "eye-outline"}
            size={24}
            color={Colors.light.textSecondary}
          />
        </TouchableOpacity>
      }
    />
  );
};
