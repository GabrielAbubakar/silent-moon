import DownloadIcon from "@/assets/icons/download.svg";
import HeadphonesIcon from "@/assets/icons/headphones.svg";
import HeartFill from "@/assets/icons/heart-fill.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import PlayActiveIcon from "@/assets/icons/play-active.svg";
import PlayInactiveIcon from "@/assets/icons/play-inactive.svg";
import MorningImage from "@/assets/images/sunrise.svg";
import { BaseText, CustomTouchableOpacity } from "@/components/ui";
import { Colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState, useRef } from "react";
import { ScrollView, StyleSheet, View, useWindowDimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";


import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function CourseDetails() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState("MALE VOICE");
  const scrollRef = useRef<ScrollView>(null);

  const tracks = [
    { id: 1, title: "Focus Attention", duration: "10 MIN" },
    { id: 2, title: "Body Scan", duration: "5 MIN" },
    { id: 3, title: "Making Happiness", duration: "3 MIN" },
  ];

  const contentWidth = width - 40; // Accounting for 20px padding on both sides

  const handleTabPress = (tab: string, index: number) => {
    setActiveTab(tab);
    scrollRef.current?.scrollTo({ x: index * contentWidth, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / contentWidth);
    const tabs = ["MALE VOICE", "FEMALE VOICE"];
    if (tabs[index] && activeTab !== tabs[index]) {
      setActiveTab(tabs[index]);
    }
  };

  const renderTrackList = (prefix: string) => (
    <View style={[styles.trackList, { width: contentWidth }]}>
      {tracks.map((track) => (
        <View key={`${prefix}-${track.id}`} style={styles.trackItem}>
          <CustomTouchableOpacity
            style={styles.playButtonWrapper}
            onPress={() =>
              router.push({
                pathname: "/music",
                params: { title: track.title },
              })
            }
          >
            {track.id === 1 ? (
              <PlayActiveIcon width={40} height={40} />
            ) : (
              <PlayInactiveIcon width={40} height={40} />
            )}
          </CustomTouchableOpacity>
          <View style={styles.trackInfo}>
            <BaseText style={styles.trackTitle}>{track.title}</BaseText>
            <BaseText style={styles.trackDuration}>{track.duration}</BaseText>
          </View>
        </View>
      ))}
    </View>
  );



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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
            <CustomTouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <AntDesign
                name="arrow-left"
                size={24}
                color={Colors.light.textPrimary}
              />
            </CustomTouchableOpacity>

            <View style={styles.rightActions}>
              <CustomTouchableOpacity style={styles.iconButton}>
                <HeartIcon width={20} height={20} color={"#FF84A2"} />
              </CustomTouchableOpacity>
              <CustomTouchableOpacity style={styles.iconButton}>
                <DownloadIcon width={20} height={20} />
              </CustomTouchableOpacity>
            </View>
          </View>
        </View>

        {/* Course Info Section */}
        <View style={styles.contentContainer}>
          <BaseText preset="header" style={styles.title}>
            Happy Morning
          </BaseText>
          <BaseText style={styles.subtitle}>COURSE</BaseText>

          <BaseText style={styles.description}>
            Ease the mind into a restful nights sleep with these deep, ambient
            tones.
          </BaseText>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <HeartFill width={20} height={20} />
              <BaseText style={styles.statText}>24.234 Favorites</BaseText>
            </View>
            <View style={styles.statItem}>
              <HeadphonesIcon width={20} height={20} />
              <BaseText style={styles.statText}>34.234 Lestening</BaseText>
            </View>
          </View>

          {/* Narrators Tabs */}
          <BaseText preset="header" style={styles.narratorTitle}>
            Pick a Narrator
          </BaseText>
          <View style={styles.tabsContainer}>
            {["MALE VOICE", "FEMALE VOICE"].map((tab, index) => (
              <CustomTouchableOpacity
                key={tab}
                style={styles.tab}
                onPress={() => handleTabPress(tab, index)}
              >
                <BaseText
                  variant="bold"
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </BaseText>
                {activeTab === tab && (
                  <View style={styles.activeTabIndicator} />
                )}
              </CustomTouchableOpacity>
            ))}
          </View>

          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
            scrollEventThrottle={16}
          >
            {renderTrackList("male")}
            {renderTrackList("female")}

          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#A1A4B2",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 16,
    color: "#A1A4B2",
    lineHeight: 24,
    marginBottom: 25,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 35,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: "#A1A4B2",
    fontWeight: "500",
  },
  narratorTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEAEC",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTabIndicator: {
    position: "absolute",
    bottom: -1,
    width: "100%",
    height: 3,
    backgroundColor: "#8E97FD",
    borderRadius: 1.5,
  },
  tabText: {
    fontSize: 14,
    color: "#A1A4B2",
    textTransform: "uppercase",
  },
  activeTabText: {
    color: "#8E97FD",
  },
  trackList: {
    gap: 15,
    paddingBottom: 20,
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#adb8d910",
  },
  playButtonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  trackInfo: {
    flex: 1,
    paddingBottom: 15,

    marginLeft: 5,
    justifyContent: "center",
  },
  trackTitle: {
    fontSize: 16,
    color: Colors.light.textPrimary,
    marginBottom: 4,
  },
  trackDuration: {
    fontSize: 12,
    color: "#A1A4B2",
  },
});
