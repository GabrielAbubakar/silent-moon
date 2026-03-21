import Background from "@/assets/images/Union.svg";
import { BaseText, TopicCard } from "@/components/ui";
import { Colors, TOPICS } from "@/constants";
import { ScrollView, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Topics() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Background style={styles.background} />
        <BaseText preset="header" style={styles.title}>
          What Brings you{" "}
        </BaseText>
        <BaseText style={{ fontSize: 28, color: Colors.light.textPrimary }}>
          to Silent Moon
        </BaseText>
        <BaseText preset="subtitle" style={styles.subtitle}>
          choose a topic to focus on:
        </BaseText>

        <View style={styles.topicsContainer}>
          <View style={styles.topicsLeft}>
            {TOPICS.slice(0, 3).map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                image={topic.image}
                backgroundColor={topic.backgroundColor}
                textColor={topic.textColor}
                height={topic.height}
                imagePaddingTop={topic.imagePaddingTop}
              />
            ))}
          </View>
          <View style={styles.topicsRight}>
            {TOPICS.slice(3, 6).map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                image={topic.image}
                backgroundColor={topic.backgroundColor}
                textColor={topic.textColor}
                height={topic.height}
                imagePaddingTop={topic.imagePaddingTop}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 16,
  },
  subtitle: {
    marginTop: 8,
  },
  background: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  topicsContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 16,
  },
  topicsLeft: {
    flex: 1,
    gap: 16,
  },
  topicsRight: {
    flex: 1,
    gap: 16,
  },
});
