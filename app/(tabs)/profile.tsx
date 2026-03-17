import { ScreenLayout } from "@/components/ScreenLayout";
import { StyleSheet, Text } from "react-native";

export default function Profile() {
  return (
    <ScreenLayout>
      <Text>Profile</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
