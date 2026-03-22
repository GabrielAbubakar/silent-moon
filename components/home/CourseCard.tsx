import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BaseText } from "@/components/ui";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { SvgProps } from "react-native-svg";

export interface Course {
  title: string;
  category: string;
  image: React.FC<SvgProps>;
  duration: string;
  bg: string;
  text: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  function handleNavigate(category: string) {
    if (category === "COURSE") {
      // router.push("/course");
    } else if (category === "MUSIC") {
      router.push("/music");
    }
  }

  function returnTextColor(text: string) {
    return text === "light" ? "#fff" : Colors.light.textPrimary;
  }

  return (
    <View style={[styles.courseCard, { backgroundColor: course.bg }]}>
      <course.image style={styles.courseImage} />
      <BaseText
        variant="bold"
        size="lg"
        style={{
          color: returnTextColor(course.text),
        }}
      >
        {course.title}
      </BaseText>
      <BaseText
        size="xs"
        style={{
          color: returnTextColor(course.text),
        }}
      >
        {course.category}
      </BaseText>
      <View style={styles.courseFooter}>
        <BaseText
          size="xs"
          style={{
            color: returnTextColor(course.text),
            flex: 1,
          }}
        >
          {course.duration}
        </BaseText>
        <TouchableOpacity
          style={[
            styles.startBtn,
            {
              backgroundColor:
                course.text === "light"
                  ? Colors.dark.textSecondary
                  : Colors.light.textPrimary,
            },
          ]}
          onPress={() => handleNavigate(course.category)}
        >
          <BaseText
            size="xs"
            style={{
              color:
                course.text === "light"
                  ? Colors.light.textPrimary
                  : Colors.dark.textSecondary,
            }}
          >
            START
          </BaseText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    position: "relative",
    height: 210,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  courseImage: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1,
  },
  courseFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  startBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
