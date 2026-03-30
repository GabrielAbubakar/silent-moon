import AllIcon from "@/assets/icons/all.svg";
import AnxiousIcon from "@/assets/icons/anxious.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import KidsIcon from "@/assets/icons/kids.svg";
import SleepIcon from "@/assets/icons/sleep.svg";
import OceanMoon from "@/assets/images/ocean-moon.jpg";
import BgImage from "@/assets/images/sleep-stories-bg.svg";
import { BaseButton, BaseText } from "@/components";
import { SleepCard } from "@/components/sleep";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors, SLEEP_STORIES } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { Redirect, router } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Sleep() {
  const { hasSeenSleepWelcome } = useAppContext();

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", icon: AllIcon, label: "All" },
    { id: "My", icon: HeartIcon, label: "My" },
    { id: "Anxious", icon: AnxiousIcon, label: "Anxious" },
    { id: "Sleep", icon: SleepIcon, label: "Sleep" },
    { id: "Kids", icon: KidsIcon, label: "Kids" },
  ];

  if (!hasSeenSleepWelcome) {
    return <Redirect href="/welcome-sleep" />;
  }

  return (
    <ScreenLayout setPadding={false}>
      <ScrollView style={styles.container}>
        <BgImage style={styles.bgImage} />
        <View style={styles.header}>
          <BaseText variant="bold" style={styles.title}>
            Sleep Stories
          </BaseText>
          <BaseText variant="light" style={styles.description}>
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
          </BaseText>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          style={styles.categoriesScroll}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={styles.categoryWrap}
                onPress={() => setActiveCategory(cat.id)}
              >
                <View
                  style={[
                    styles.categoryIconWrap,
                    isActive && styles.activeCategoryBg,
                  ]}
                >
                  <cat.icon width={25} height={25} />
                </View>
                <BaseText
                  variant={isActive ? "bold" : "regular"}
                  style={[
                    styles.categoryLabel,
                    isActive && styles.activeCategoryLabel,
                  ]}
                >
                  {cat.label}
                </BaseText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.oceanMoon}>
          <ImageBackground
            source={OceanMoon}
            resizeMode="cover"
            style={styles.oceanMoonImage}
            imageStyle={{ borderRadius: 25 }}
          >
            <BaseText variant="bold" style={styles.title}>
              The Ocean Mood
            </BaseText>
            <BaseText variant="light" style={styles.description}>
              Non-stop 8- hour mixes of our most popular sleep audio
            </BaseText>
            <BaseButton variant="secondary" title="START" />
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <BaseText variant="bold" style={styles.title}>
            Sleep Stories
          </BaseText>
          <TouchableOpacity onPress={() => router.push("/sleep/sleep-music")}>
            <BaseText variant="regular" style={styles.description}>
              See all
            </BaseText>
          </TouchableOpacity>
        </View>

        <View style={styles.sleepStories}>
          {SLEEP_STORIES.map((story, index) => (
            <SleepCard key={index} story={story} />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.dark.textPrimary,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.dark.textSecondary,
  },
  categoriesScroll: {
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    gap: 15,
  },
  categoryWrap: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 65,
  },
  categoryIconWrap: {
    width: 65,
    height: 65,
    borderRadius: 25,
    backgroundColor: "#586894",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  activeCategoryBg: {
    backgroundColor: "#8E97FD",
  },
  categoryLabel: {
    fontSize: 14,
    color: "#98A1BD",
  },
  activeCategoryLabel: {
    color: "#E6E7F2",
  },
  oceanMoon: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  oceanMoonImage: {
    width: "100%",
    height: 300,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "red",
  },
  sleepStories: {
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
