import AllIcon from "@/assets/icons/all.svg";
import AnxiousIcon from "@/assets/icons/anxious.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import KidsIcon from "@/assets/icons/kids.svg";
import PlayDarkIcon from "@/assets/icons/play-dark.svg";
import SleepIcon from "@/assets/icons/sleep.svg";
import AutumnImage from "@/assets/images/autumn.svg";
import BeachImage from "@/assets/images/beach.svg";
import DailyThoughtBg from "@/assets/images/daily-calm.svg";
import KenyaImage from "@/assets/images/kenya.svg";
import MorningImage from "@/assets/images/morning.svg";
import { BaseText, MeditateTopicCard, ScreenLayout, CustomTouchableOpacity } from "@/components";
import { Colors } from "@/constants";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Meditate() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", icon: AllIcon, label: "All" },
    { id: "My", icon: HeartIcon, label: "My" },
    { id: "Anxious", icon: AnxiousIcon, label: "Anxious" },
    { id: "Sleep", icon: SleepIcon, label: "Sleep" },
    { id: "Kids", icon: KidsIcon, label: "Kids" },
  ];

  const cardsLeft = [
    {
      id: 1,
      title: "7 Days of Calm",
      image: MorningImage,
      backgroundColor: "#8E97FD",
      textColor: "#FFFFFF",
      height: 210,
    },
    {
      id: 2,
      title: "7 Days of Calm",
      image: BeachImage,
      backgroundColor: "#8CF6D9",
      textColor: "#FFFFFF",
      height: 167,
    },
  ];

  const cardsRight = [
    {
      id: 3,
      title: "Anxiet Release",
      image: KenyaImage,
      backgroundColor: "#FFCF86",
      textColor: "#FFFFFF",
      height: 167,
    },
    {
      id: 4,
      title: "Anxiet Release",
      image: AutumnImage,
      backgroundColor: "#D9E3CC",
      textColor: "#FFFFFF",
      height: 210,
    },
  ];

  return (
    <ScreenLayout setPadding={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <BaseText preset="header" style={styles.header}>
          Meditate
        </BaseText>
        <BaseText style={styles.subtitle}>
          we can learn how to recognize when our minds are doing their normal
          everyday acrobatics.
        </BaseText>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          style={styles.categoriesScroll}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <CustomTouchableOpacity
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
              </CustomTouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Daily Calm Banner */}
        <View style={styles.dailyCalmBanner}>
          <DailyThoughtBg style={styles.dailyCalmBackground} />
          <View style={styles.dailyCalmContent}>
            <View>
              <BaseText variant="bold" style={styles.dailyCalmTitle}>
                Daily Calm
              </BaseText>
              <BaseText style={styles.dailyCalmSubtitle}>
                APR 30 • PAUSE PRACTICE
              </BaseText>
            </View>
            <CustomTouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <PlayDarkIcon width={40} height={40} />
            </CustomTouchableOpacity>
          </View>
        </View>

        {/* Masonry Grid */}
        <View style={styles.masonryGrid}>
          <View style={styles.masonryCol}>
            {cardsLeft.map((card) => (
              <MeditateTopicCard
                key={card.id}
                title={card.title}
                image={card.image}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
                height={card.height}
              />
            ))}
          </View>
          <View style={styles.masonryCol}>
            {cardsRight.map((card) => (
              <MeditateTopicCard
                key={card.id}
                title={card.title}
                image={card.image}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
                height={card.height}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    paddingTop: 40,
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 15,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#A1A4B2",
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 15,
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
    backgroundColor: "#A1A4B2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  activeCategoryBg: {
    backgroundColor: "#8E97FD",
  },
  categoryLabel: {
    fontSize: 14,
    color: "#A1A4B2",
  },
  activeCategoryLabel: {
    color: Colors.light.textPrimary,
  },
  dailyCalmBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCDCB9",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 30,
    position: "relative",
    overflow: "hidden",
  },
  dailyCalmContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  dailyCalmBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  dailyCalmTitle: {
    fontSize: 18,
    color: "#3F414E",
    marginBottom: 5,
  },
  dailyCalmSubtitle: {
    fontSize: 11,
    color: "#5A6175",
    fontWeight: "600",
    letterSpacing: 1,
  },
  masonryGrid: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 16,
  },
  masonryCol: {
    flex: 1,
    gap: 16,
  },
});
