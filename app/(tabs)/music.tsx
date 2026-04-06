import CancelIcon from "@/assets/icons/cancel.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import ForwardIcon from "@/assets/icons/forward.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import PauseIcon from "@/assets/icons/pause.svg";
import RewindIcon from "@/assets/icons/rewind.svg";
import BgLeftBottom from "@/assets/images/music-left-bottom.svg";
import BgLeftTop from "@/assets/images/music-left-top.svg";
import BgRightBottom from "@/assets/images/music-right-bottom.svg";
import BgRightTop from "@/assets/images/music-right-top.svg";
import { BaseText, CustomTouchableOpacity } from "@/components/ui";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Music() {
  const insets = useSafeAreaInsets();
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Background Blobs */}
      <View style={styles.backgroundContainer}>
        <BgLeftTop style={styles.topLeft} />
        <BgRightTop style={styles.topRight} />
        <BgLeftBottom style={styles.bottomLeft} />
        <BgRightBottom style={styles.bottomRight} />
      </View>

      {/* Main Content Area */}
      <View
        style={[
          styles.content,
          {
            paddingTop: Math.max(insets.top, 40),
            paddingBottom: Math.max(insets.bottom, 40),
          },
        ]}
      >
        {/* Header Actions */}
        <View style={styles.headerRow}>
          <CustomTouchableOpacity
            style={styles.closeButton}
            onPress={() => router.back()}
          >
            <CancelIcon width={16} height={16} />
          </CustomTouchableOpacity>

          <View style={styles.rightActions}>
            <CustomTouchableOpacity style={styles.iconButton}>
              <HeartIcon width={24} height={24} color="#fff" />
            </CustomTouchableOpacity>
            <CustomTouchableOpacity style={styles.iconButton}>
              <DownloadIcon width={24} height={24} color="#fff" />
            </CustomTouchableOpacity>
          </View>
        </View>

        {/* Center Text Area */}
        <View style={styles.textContainer}>
          <BaseText preset="header" style={styles.title}>
            {title || "Focus Attention"}
          </BaseText>
          <BaseText style={styles.subtitle}>7 DAYS OF CALM</BaseText>
        </View>

        {/* Player Controls */}
        <View style={styles.playerSection}>
          <View style={styles.controlsRow}>
            <CustomTouchableOpacity style={styles.skipButton}>
              <RewindIcon width={40} height={40} color="#A0A3B1" />
            </CustomTouchableOpacity>

            <CustomTouchableOpacity style={styles.playPauseButton}>
              <PauseIcon width={100} height={100} />
            </CustomTouchableOpacity>

            <CustomTouchableOpacity style={styles.skipButton}>
              <ForwardIcon width={40} height={40} color="#A0A3B1" />
            </CustomTouchableOpacity>
          </View>

          {/* Scrubber */}
          <View style={styles.scrubberContainer}>
            {/* The line */}
            <View style={styles.scrubberTrack}>
              <View style={[styles.scrubberFill, { width: "15%" }]} />
              <View style={[styles.scrubberKnob, { left: "15%" }]} />
            </View>

            {/* Timestamps */}
            <View style={styles.timeRow}>
              <BaseText style={styles.timeText}>01:30</BaseText>
              <BaseText style={styles.timeText}>45:00</BaseText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  topLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
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
    elevation: 2,
  },
  rightActions: {
    flexDirection: "row",
    gap: 15,
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "rgba(161, 164, 178, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
    marginBottom: 100,
  },
  title: {
    fontSize: 32,
    color: "#3F414E",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#A1A4B2",
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
  playerSection: {
    paddingBottom: 20,
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginBottom: 40,
  },
  skipButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  playPauseButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrubberContainer: {
    marginHorizontal: 10,
  },
  scrubberTrack: {
    height: 2,
    backgroundColor: "#A1A4B2",
    borderRadius: 1,
    position: "relative",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  scrubberFill: {
    position: "absolute",
    left: 0,
    height: "100%",
    backgroundColor: "#3F414E",
    borderRadius: 1,
  },
  scrubberKnob: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#3F414E",
    marginLeft: -7,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  timeText: {
    fontSize: 14,
    color: "#3F414E",
    fontWeight: "500",
  },
});
