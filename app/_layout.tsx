import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// 1. Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "HelveticaNeue-Light": require("../assets/fonts/helvetica-neue-5/HelveticaNeueLight.otf"),
    "HelveticaNeue-Medium": require("../assets/fonts/helvetica-neue-5/HelveticaNeueMedium.otf"),
    "HelveticaNeue-Roman": require("../assets/fonts/helvetica-neue-5/HelveticaNeueRoman.otf"),
    "HelveticaNeue-Bold": require("../assets/fonts/helvetica-neue-5/HelveticaNeueBold.otf"),
    "HelveticaNeue-BoldItalic": require("../assets/fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf"),
  });

  // 3. Use an effect to hide the splash screen once fonts are ready (or if there's an error)
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // 4. Return null (keep showing splash) until loading is complete
  if (!loaded && !error) {
    return null;
  }

  // Return root stack if fonts loaded
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="topics" />
        <Stack.Screen name="reminders" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
