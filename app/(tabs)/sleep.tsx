import { ScreenLayout } from "@/components/ScreenLayout";
import { StyleSheet, Text } from "react-native";

export default function Sleep() {
  return (
    <ScreenLayout>
      <Text>Sleep</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
