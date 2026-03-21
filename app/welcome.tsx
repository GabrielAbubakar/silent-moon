import { BaseButton, BaseText, LogoGroup } from "@/components";
import { Meditate } from "@/components/icons";
import { Colors } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  const { name } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <LogoGroup variant="dark" />

      <View style={styles.textContainer}>
        <View>
          <BaseText variant="bold" style={styles.title}>
            Hi {name || "User"}, Welcome
          </BaseText>
          <BaseText
            style={{ fontSize: 28, color: "#fff", textAlign: "center" }}
          >
            to Silent Moon
          </BaseText>
        </View>

        <BaseText style={styles.subtitle}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </BaseText>
      </View>

      <Meditate style={{ alignSelf: "center" }} />

      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        <BaseButton
          onPress={() => router.push("/topics")}
          variant="secondary"
          title="GET STARTED"
          style={{
            width: "100%",
            marginBottom: 40,
          }}
        />
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
    // padding: 16,
  },
  textContainer: {
    gap: 10,
    marginVertical: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "#ffecca",
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#ebeaec",
    textAlign: "center",
    lineHeight: 24,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  headerText: {
    letterSpacing: 2,
    color: "#fff",
  },
});
