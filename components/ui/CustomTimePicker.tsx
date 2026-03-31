import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { BaseText } from "./BaseText";

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;
const WHEEL_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

interface WheelPickerProps {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const WheelPicker: React.FC<WheelPickerProps> = ({
  data,
  selectedValue,
  onValueChange,
}) => {
  // To make it look infinite, we could pad the data, but for hours/mins it's better to just have enough padding top and bottom.
  // We'll pad with empty items so the first/last real items can reach the center.
  const paddedData = useMemo(() => {
    const emptyItems = Array(Math.floor(VISIBLE_ITEMS / 2)).fill("");
    return [...emptyItems, ...data, ...emptyItems];
  }, [data]);

  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );

  const initialIndex = data.indexOf(selectedValue);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (initialIndex !== -1) {
      // Small delay to ensure layout
      const timer = setTimeout(() => {
        flatListRef.current?.scrollToOffset({
          offset: initialIndex * ITEM_HEIGHT,
          animated: false,
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [initialIndex]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    if (data[index]) {
      onValueChange(data[index]);
    }
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    const distance = Animated.subtract(
      scrollY,
      (index - Math.floor(VISIBLE_ITEMS / 2)) * ITEM_HEIGHT,
    );

    const scale = distance.interpolate({
      inputRange: [
        -ITEM_HEIGHT * 2,
        -ITEM_HEIGHT,
        0,
        ITEM_HEIGHT,
        ITEM_HEIGHT * 2,
      ],
      outputRange: [0.7, 0.9, 1, 0.9, 0.7],
      extrapolate: "clamp",
    });

    const opacity = distance.interpolate({
      inputRange: [
        -ITEM_HEIGHT * 2,
        -ITEM_HEIGHT,
        0,
        ITEM_HEIGHT,
        ITEM_HEIGHT * 2,
      ],
      outputRange: [0.1, 0.4, 1, 0.4, 0.1],
      extrapolate: "clamp",
    });

    const rotateX = distance.interpolate({
      inputRange: [-ITEM_HEIGHT * 2, 0, ITEM_HEIGHT * 2],
      outputRange: ["45deg", "0deg", "-45deg"],
      extrapolate: "clamp",
    });

    return (
      <View style={[styles.item, { height: ITEM_HEIGHT }]}>
        <Animated.View
          style={{
            transform: [{ scale }, { rotateX }],
            opacity,
          }}
        >
          <BaseText
            style={[
              styles.itemText,
              item === selectedValue && styles.selectedItemText,
            ]}
          >
            {item}
          </BaseText>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={{ height: WHEEL_HEIGHT, flex: 1 }}>
      <Animated.FlatList
        ref={flatListRef}
        data={paddedData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 0 }}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={onScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        renderToHardwareTextureAndroid
      />
    </View>
  );
};

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
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 28,
    color: "#A1A4B2",
    fontWeight: "500",
  },
  selectedItemText: {
    color: "#16171D",
    fontWeight: "bold",
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
