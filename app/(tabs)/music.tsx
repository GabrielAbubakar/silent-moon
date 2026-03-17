import { ScreenLayout } from "@/components/ScreenLayout";
import { StyleSheet, Text } from "react-native";

export default function Music() {
  return (
    <ScreenLayout>
      <Text>Music</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
