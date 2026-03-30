import BgImage from "@/assets/images/sleep-bg.svg";
import { BaseButton, BaseText } from "@/components";
import { Colors } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeSleep() {
  const { setHasSeenSleepWelcome } = useAppContext();

  const handleGetStarted = () => {
    setHasSeenSleepWelcome(true);
    router.replace("/(tabs)/sleep");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <BgImage style={styles.bgImage} />

      <View style={styles.content}>
        <BaseText variant="bold" style={styles.title}>
          Welcome to Sleep
        </BaseText>
        <BaseText variant="light" style={styles.description}>
          Explore the new king of sleep. It uses sound and vesualization to
          create perfect conditions for refreshing sleep.
        </BaseText>
      </View>
      <BaseButton
        title="Get Started"
        onPress={handleGetStarted}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.dark.background,
    padding: 20,
  },
  content: {
    marginTop: 130,
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.dark.textPrimary,
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.textSecondary,
  },
  button: {
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
