import { ScreenLayout } from "@/components/ScreenLayout";
import { StyleSheet, Text } from "react-native";

export default function Login() {
  return (
    <ScreenLayout>
      <Text>Login</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
