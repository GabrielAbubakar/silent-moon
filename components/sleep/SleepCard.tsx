import { Colors } from "@/constants";
import { router } from "expo-router";
import {
  DimensionValue,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { BaseText } from "../ui";

export function SleepCard({
  story,
  width = "47%",
}: {
  story: any;
  width?: DimensionValue;
}) {
  return (
    <TouchableOpacity
      key={story.title}
      style={[styles.container, { width }]}
      onPress={() =>
        router.push({
          pathname: "/sleep-details",
          params: { title: story.title },
        })
      }
    >
      <story.image width={"100%"} />
      <BaseText variant="bold" style={styles.title}>
        {story.title}
      </BaseText>
      <View style={styles.description}>
        <BaseText variant="light" style={styles.descriptionText}>
          {story.duration}
        </BaseText>
        <BaseText variant="light" style={styles.descriptionText}>
          •
        </BaseText>
        <BaseText variant="light" style={styles.descriptionText}>
          {story.category}
        </BaseText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "47%",
  },
  title: {
    fontSize: 18,
    marginBottom: 0,
    color: Colors.dark.textPrimary,
  },
  description: {
    flexDirection: "row",
    gap: 5,
  },
  descriptionText: {
    fontSize: 11,
    color: Colors.dark.textSecondary,
  },
});
