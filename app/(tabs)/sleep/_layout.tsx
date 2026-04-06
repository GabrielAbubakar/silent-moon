import { Stack } from "expo-router";

export default function SleepLayout() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
