import { BaseButton, BaseText } from "@/components";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

const days = [
  { label: "SU", value: "sun" },
  { label: "M", value: "mon" },
  { label: "T", value: "tue" },
  { label: "W", value: "wed" },
  { label: "TH", value: "thu" },
  { label: "F", value: "fri" },
  { label: "S", value: "sat" },
];

export default function Reminders() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [time, setTime] = useState(new Date(new Date().setHours(8, 0, 0, 0)));
  const [showPicker, setShowPicker] = useState(Platform.OS === "ios");

  const handleDayPress = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View>
          <BaseText preset="header" style={styles.title}>
            What time would you like to meditate?
          </BaseText>
          <BaseText preset="subtitle" style={styles.subtitle}>
            Any time you can choose but We recommend first thing in th morning.
          </BaseText>

          <View style={styles.timePickerContainer}>
            {Platform.OS === "android" && (
              <TouchableOpacity
                style={styles.timeButton}
                onPress={() => setShowPicker(true)}
              >
                <BaseText style={styles.timeButtonText}>
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </BaseText>
              </TouchableOpacity>
            )}
            {showPicker && (
              <DateTimePicker
                value={time}
                themeVariant="light"
                mode="time"
                display="spinner"
                is24Hour={false}
                onChange={(event, selectedTime) => {
                  if (Platform.OS === "android") {
                    setShowPicker(false);
                  }
                  if (selectedTime) {
                    setTime(selectedTime);
                  }
                }}
              />
            )}
          </View>
        </View>

        <View style={{ marginBottom: 40 }}>
          <BaseText preset="header" style={styles.title}>
            Which day would you like to meditate?
          </BaseText>
          <BaseText preset="subtitle" style={styles.subtitle}>
            Everyday is best, but we recommend picking at least five.
          </BaseText>

          <View style={styles.daysContainer}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.value}
                style={[
                  styles.day,
                  selectedDays.includes(day.value) && styles.daySelected,
                ]}
                onPress={() => handleDayPress(day.value)}
              >
                <BaseText
                  style={[
                    styles.dayText,
                    selectedDays.includes(day.value) && styles.dayTextSelected,
                  ]}
                >
                  {day.label}
                </BaseText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ gap: 16 }}>
          <BaseButton title="Save" onPress={() => router.replace("/home")} />
          <BaseButton
            variant="text"
            textStyle={{ color: "#16171D" }}
            title="No thanks"
            onPress={() => router.replace("/home")}
          />
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: "#16171D",
    width: "80%",
  },
  subtitle: {
    color: "#16171D",
    marginBottom: 16,
    width: "90%",
  },
  timePickerContainer: {
    backgroundColor: "#F2F3F7",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    padding: Platform.OS === "ios" ? 0 : 10,
  },
  timeButton: {
    paddingVertical: 15,
    alignItems: "center",
  },
  timeButtonText: {
    fontSize: 24,
    color: "#16171D",
    fontWeight: "bold",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  day: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#A1A4B2",
    alignItems: "center",
  },
  dayText: {
    color: "#A1A4B2",
  },
  daySelected: {
    backgroundColor: Colors.light.textPrimary,
  },
  dayTextSelected: {
    color: "#FFFFFF",
  },
});
