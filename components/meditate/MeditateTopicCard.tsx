import { BlurView } from "expo-blur";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { BaseText } from "../ui/BaseText";
import { CustomTouchableOpacity } from "../ui/CustomTouchableOpacity";

export function MeditateTopicCard({
  title,
  image: Image,
  backgroundColor,
  textColor,
  height = 150,
}: {
  title: string;
  image: FC<SvgProps>;
  backgroundColor: string;
  textColor: string;
  height?: number;
}) {
  return (
    <CustomTouchableOpacity
      activeOpacity={0.6}
      style={{
        backgroundColor,
        borderRadius: 20,
        overflow: "hidden",
        height,
        position: "relative",
      }}
    >
      <View style={StyleSheet.absoluteFillObject}>
        <Image
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </View>
      {title.trim().length > 0 && (
        <BlurView
          intensity={30}
          tint="dark"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            overflow: "hidden",
            paddingHorizontal: 12,
            paddingVertical: 10,
            width: "100%",
          }}
        >
          <BaseText
            variant="bold"
            style={{
              color: textColor,
              fontSize: 16,
            }}
          >
            {title}
          </BaseText>
        </BlurView>
      )}
    </CustomTouchableOpacity>
  );
}
