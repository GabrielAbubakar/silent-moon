import { BaseText } from "@/components";
import { SleepCard } from "@/components/sleep";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors, SLEEP_STORIES } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function SleepMusic() {
  return (
    <ScreenLayout setPadding={false} backgroundColor={Colors.dark.background}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <AntDesign name="arrow-left" size={24} color="#3F414E" />
          </TouchableOpacity>
          <BaseText variant="bold" style={styles.headerTitle}>
            Sleep Music
          </BaseText>
          <View style={{ width: 40 }} />
        </View>

        <FlatList
          data={SLEEP_STORIES}
          renderItem={({ item }) => <SleepCard story={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginBottom: 20,
          }}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#E6E7F2",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#E6E7F2",
  },
  sleepStories: {
    paddingHorizontal: 16,
  },
});
