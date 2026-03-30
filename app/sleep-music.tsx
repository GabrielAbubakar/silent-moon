import CancelIcon from "@/assets/icons/cancel.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import ForwardIcon from "@/assets/icons/forward.svg";
import HeartIcon from "@/assets/icons/heart-icon.svg";
import PauseIcon from "@/assets/icons/pause.svg";
import RewindIcon from "@/assets/icons/rewind.svg";
import BgImage from "@/assets/images/dark-music-bg.svg";
import { BaseText } from "@/components/ui";
import { Colors } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SleepMusic() {
  const insets = useSafeAreaInsets();
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Background blobs/image */}
      <View style={styles.backgroundContainer}>
        <BgImage style={styles.bgImage} />
      </View>

      <View
        style={[
          styles.content,
          {
            paddingTop: Math.max(insets.top, 40),
            paddingBottom: Math.max(insets.bottom, 40),
          },
        ]}
      >
        {/* Header Section */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.back()}
          >
            <CancelIcon
              width={16}
              height={16}
              color={Colors.light.textPrimary}
            />
          </TouchableOpacity>
          <View style={styles.rightActions}>
            <TouchableOpacity style={styles.iconButton}>
              <HeartIcon width={22} height={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <DownloadIcon width={22} height={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title and Category */}
        <View style={styles.textContainer}>
          <BaseText
            preset="header"
            color={Colors.dark.textPrimary}
            style={styles.title}
          >
            {title || "Night Island"}
          </BaseText>
          <BaseText style={styles.subtitle}>SLEEP MUSIC</BaseText>
        </View>

        {/* Player Controls */}
        <View style={styles.playerSection}>
          <View style={styles.controlsRow}>
            <TouchableOpacity>
              <RewindIcon
                width={40}
                height={40}
                color={Colors.dark.textPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playPauseButton}>
              <PauseIcon
                width={100}
                height={100}
                color={Colors.dark.textPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ForwardIcon
                width={40}
                height={40}
                color={Colors.dark.textPrimary}
              />
            </TouchableOpacity>
          </View>

          {/* Scrubber Placeholder */}
          <View style={styles.scrubberContainer}>
            <View style={styles.scrubberTrack}>
              <View style={[styles.scrubberFill, { width: "15%" }]} />
              <View style={[styles.scrubberKnob, { left: "15%" }]} />
            </View>

            <View style={styles.timeRow}>
              <BaseText color={Colors.dark.textPrimary} style={styles.timeText}>
                01:30
              </BaseText>
              <BaseText color={Colors.dark.textPrimary} style={styles.timeText}>
                45:00
              </BaseText>
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
    backgroundColor: Colors.dark.background,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    zIndex: 1,
    justifyContent: "space-between",
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
  textContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 32,
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
    marginBottom: 40,
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginBottom: 50,
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(3, 23, 76, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  scrubberContainer: {
    marginHorizontal: 10,
  },
  scrubberTrack: {
    height: 2,
    backgroundColor: "#98A1BD",
    borderRadius: 1,
    position: "relative",
    justifyContent: "center",
  },
  scrubberFill: {
    position: "absolute",
    left: 0,
    height: "100%",
    backgroundColor: Colors.dark.textPrimary,
    borderRadius: 1,
  },
  scrubberKnob: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.dark.textPrimary,
    marginLeft: -7,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
