import LogoDark from "@/assets/images/logo-dark.svg";
import { StyleSheet, View } from "react-native";
import { LogoLight } from "../icons/LogoLight";
import { BaseText } from "./BaseText";

export const LogoGroup = ({ variant }: { variant: "light" | "dark" }) => {
  const textColor = variant === "dark" ? "#fff" : "#000";

  return (
    <View style={styles.logoContainer}>
      <BaseText variant="bold" style={{ ...styles.text, color: textColor }}>
        Silent
      </BaseText>
      {variant === "light" ? <LogoLight /> : <LogoDark />}
      <BaseText variant="bold" style={{ ...styles.text, color: textColor }}>
        Moon
      </BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  text: {
    letterSpacing: 2,
  },
});
