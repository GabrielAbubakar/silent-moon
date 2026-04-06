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

export const ITEM_HEIGHT = 40;
export const VISIBLE_ITEMS = 5;
export const WHEEL_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

export interface WheelPickerProps {
  data: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const WheelPicker: React.FC<WheelPickerProps> = ({
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

  const initialIndex = data.indexOf(selectedValue);
  const scrollY = useRef(
    new Animated.Value(initialIndex * ITEM_HEIGHT),
  ).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (initialIndex !== -1) {
      scrollY.setValue(initialIndex * ITEM_HEIGHT);
      // Small delay to ensure layout
      const timer = setTimeout(() => {
        flatListRef.current?.scrollToOffset({
          offset: initialIndex * ITEM_HEIGHT,
          animated: false,
        });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [initialIndex, scrollY]);

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
      outputRange: [0.1, 0.5, 1, 0.5, 0.1],
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
          <BaseText style={styles.itemText}>{item}</BaseText>
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

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 28,
    color: "#16171D",
    fontWeight: "500",
  },
});
