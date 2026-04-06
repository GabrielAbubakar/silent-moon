import Play from "@/assets/icons/play.svg";
import BGImage from "@/assets/images/daily-thought-bg.svg";
import {
  BaseText,
  CourseCard,
  LogoGroup,
  RecommendedCard,
  ScreenLayout,
  CustomTouchableOpacity,
} from "@/components";
import { Colors, COURSES, RECOMMENDED } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  const { userName } = useAppContext();

  return (
    <ScreenLayout setPadding={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <LogoGroup variant="light" />

        <View style={{ paddingHorizontal: 16 }}>
          <BaseText preset="header" style={{ marginTop: 50 }}>
            Good Morning, {userName}
          </BaseText>
          <BaseText
            variant="light"
            style={{
              color: Colors.light.textSecondary,
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            We wish you have a good day
          </BaseText>

          <View style={styles.courseRow}>
            {COURSES.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </View>

          <View style={styles.dailyThoughtCard}>
            <View>
              <BaseText variant="bold" size="lg" style={{ color: "#fff" }}>
                Daily Thought
              </BaseText>
              <View style={styles.dailyThoughtInfo}>
                <BaseText style={{ color: "#EBEAEC", fontSize: 12 }}>
                  MEDITATION
                </BaseText>
                <BaseText style={{ color: "#EBEAEC", fontSize: 12 }}>
                  3-10 MIN
                </BaseText>
              </View>
            </View>
            <CustomTouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/music",
                  params: { title: "Daily Thought" },
                })
              }
            >
              <Play />
            </CustomTouchableOpacity>
            <BGImage style={styles.dailyThoughtBg} />
          </View>
        </View>

        <View>
          <BaseText
            variant="bold"
            size="xxl"
            style={{ marginBottom: 20, paddingHorizontal: 16 }}
          >
            Recommended for you
          </BaseText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20, paddingHorizontal: 16 }}
          >
            {RECOMMENDED.map((item) => (
              <RecommendedCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
  },

  dailyThoughtCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333242",
    borderRadius: 10,
    padding: 23,
    position: "relative",
    zIndex: -2,
    overflow: "hidden",
    marginBottom: 40,
  },
  dailyThoughtInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dailyThoughtBg: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1,
  },
});
