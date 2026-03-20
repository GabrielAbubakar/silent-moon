import BackgroundGraphic from "@/assets/images/bg-pink.svg";
import WhatWeDo from "@/assets/images/what-we-do.svg";
import { LogoLight } from "@/components/icons";
import { ScreenLayout } from "@/components/ScreenLayout";
import { BaseButton, BaseText } from "@/components/ui";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <BackgroundGraphic
            width="100%"
            height={480}
            preserveAspectRatio="none"
          />
        </View>

        <View style={styles.logoContainer}>
          <BaseText variant="bold" style={{ letterSpacing: 2 }}>
            Silent
          </BaseText>
          <LogoLight />
          <BaseText variant="bold" style={{ letterSpacing: 2 }}>
            Moon
          </BaseText>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <WhatWeDo />
        </View>

        <View>
          <BaseText
            preset="header"
            style={{ marginBottom: 20, textAlign: "center" }}
          >
            We are what we do
          </BaseText>
          <BaseText
            preset="subtitle"
            style={{
              textAlign: "center",
              marginBottom: 50,
              color: Colors.light.textSecondary,
            }}
          >
            Thousand of people are usign silent moon for smalls meditation{" "}
          </BaseText>

          <BaseButton
            onPress={() => router.push("/register")}
            title="Sign Up"
          />

          <View style={styles.footer}>
            <BaseText
              size="sm"
              variant="bold"
              style={{ color: Colors.light.textSecondary }}
            >
              ALREADY HAVE AN ACCOUNT?
            </BaseText>
            <TouchableOpacity hitSlop={1} onPress={() => router.push("/login")}>
              <BaseText
                size="sm"
                style={{
                  color: Colors.light.primary,
                }}
              >
                SIGN IN
              </BaseText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  backgroundContainer: {
    position: "absolute",
    top: -16, // Assuming ScreenLayout has 16 padding
    left: -16,
    right: -16,
    zIndex: -1, // Keep it behind the content
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
    marginBottom: 50,
  },
});
