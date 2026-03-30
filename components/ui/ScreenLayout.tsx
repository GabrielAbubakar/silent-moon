import { Colors } from "@/constants";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScreenLayout({
  children,
  setPadding = true,
  backgroundColor = Colors.light.background,
}: {
  children: React.ReactNode;
  setPadding?: boolean;
  backgroundColor?: string;
}) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        setPadding && { paddingHorizontal: 16, paddingTop: 16 },
        { backgroundColor },
      ]}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
