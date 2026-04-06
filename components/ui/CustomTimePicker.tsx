import React from "react";
import { StyleSheet, View } from "react-native";
import { ITEM_HEIGHT, WHEEL_HEIGHT, WheelPicker } from "./WheelPicker";

interface CustomTimePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  value,
  onChange,
}) => {
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );
  const periods = ["AM", "PM"];

  const currentHour = ((value.getHours() + 11) % 12) + 1;
  const currentMinute = value.getMinutes().toString().padStart(2, "0");
  const currentPeriod = value.getHours() >= 12 ? "PM" : "AM";

  const handleHourChange = (nextHour: string) => {
    const newDate = new Date(value);
    let hour = parseInt(nextHour, 10);
    if (currentPeriod === "PM" && hour < 12) hour += 12;
    if (currentPeriod === "AM" && hour === 12) hour = 0;
    newDate.setHours(hour);
    onChange(newDate);
  };

  const handleMinuteChange = (nextMinute: string) => {
    const newDate = new Date(value);
    newDate.setMinutes(parseInt(nextMinute, 10));
    onChange(newDate);
  };

  const handlePeriodChange = (nextPeriod: string) => {
    const newDate = new Date(value);
    let hour = value.getHours();
    if (nextPeriod === "PM" && hour < 12) hour += 12;
    if (nextPeriod === "AM" && hour >= 12) hour -= 12;
    newDate.setHours(hour);
    onChange(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.selectionLines}>
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.wheelsContainer}>
        <WheelPicker
          data={hours}
          selectedValue={currentHour.toString()}
          onValueChange={handleHourChange}
        />
        <WheelPicker
          data={minutes}
          selectedValue={currentMinute}
          onValueChange={handleMinuteChange}
        />
        <WheelPicker
          data={periods}
          selectedValue={currentPeriod}
          onValueChange={handlePeriodChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WHEEL_HEIGHT,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  wheelsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    zIndex: 1,
    pointerEvents: "none",
  },
  selectionLines: {
    height: ITEM_HEIGHT,
    justifyContent: "space-between",
  },
  line: {
    height: 1,
    backgroundColor: "#EBEAEC",
    width: "100%",
  },
});
