import DownloadIcon from "@/assets/icons/download.svg";
import HeadphonesIcon from "@/assets/icons/headphones.svg";
import HeartFill from "@/assets/icons/heart-fill.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import MorningImage from "@/assets/images/sleep-detail.svg";
import { SleepCard } from "@/components";
import { BaseButton, BaseText } from "@/components/ui";
import { Colors, SLEEP_STORIES } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SleepDetails() {
  const insets = useSafeAreaInsets();
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 20) }}
      >
        {/* Header Image Section */}
        <View style={styles.headerImageContainer}>
          <MorningImage
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Overlay Buttons */}
          <View
            style={[styles.headerActions, { top: Math.max(insets.top, 20) }]}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <AntDesign
                name="arrow-left"
                size={24}
                color={Colors.light.textPrimary}
              />
            </TouchableOpacity>

            <View style={styles.rightActions}>
              <TouchableOpacity style={styles.iconButton}>
                <HeartIcon width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <DownloadIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Course Info Section */}
        <View style={styles.contentContainer}>
          <BaseText variant="bold" style={styles.title}>
            {title ?? "Sleep Music"}
          </BaseText>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <BaseText style={styles.subtitle}>45 MIN</BaseText>
            <BaseText style={styles.subtitle}>•</BaseText>
            <BaseText style={styles.subtitle}>SLEEP MUSIC</BaseText>
          </View>

          <BaseText style={styles.description}>
            Ease the mind into a restful nights sleep with these deep, ambient
            tones.
          </BaseText>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <HeartFill
                width={20}
                height={20}
                color={Colors.dark.textPrimary}
              />
              <BaseText style={styles.statText}>24.234 Favorites</BaseText>
            </View>
            <View style={styles.statItem}>
              <HeadphonesIcon
                width={20}
                height={20}
                color={Colors.dark.textPrimary}
              />
              <BaseText style={styles.statText}>34.234 Lestening</BaseText>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "#98a1bd16",
            marginHorizontal: 16,
            marginBottom: 20,
          }}
        />

        <BaseText variant="bold" style={styles.relatedTitle}>
          Related
        </BaseText>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
          style={styles.storiesScroll}
        >
          {SLEEP_STORIES.map((story) => (
            <SleepCard key={story.id} story={story} width={177} />
          ))}
        </ScrollView>

        <BaseButton
          title="Play"
          style={{ marginTop: "auto", marginHorizontal: 20 }}
          onPress={() =>
            router.push({ pathname: "/sleep-music", params: { title } })
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  headerImageContainer: {
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F0F0F0",
    position: "relative",
  },
  headerActions: {
    position: "absolute",
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rightActions: {
    flexDirection: "row",
    gap: 15,
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "rgba(3, 23, 76, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginBottom: 5,
    color: Colors.dark.textPrimary,
  },
  subtitle: {
    fontSize: 12,
    color: "#A1A4B2",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 15,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 16,
    color: "#98A1BD",
    lineHeight: 24,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 15,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: Colors.dark.textSecondary,
    fontWeight: "500",
  },
  relatedTitle: {
    fontSize: 20,
    marginBottom: 15,
    paddingHorizontal: 16,
    color: Colors.dark.textPrimary,
  },
  storiesScroll: {
    marginBottom: 20,
  },
  storiesContainer: {
    paddingHorizontal: 16,
    gap: 15,
  },
  cardContainer: {
    width: 180,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 0,
    color: Colors.dark.textPrimary,
  },
  cardDescription: {
    flexDirection: "row",
    gap: 10,
  },
  cardDescriptionText: {
    fontSize: 11,
    color: Colors.dark.textSecondary,
  },
});
