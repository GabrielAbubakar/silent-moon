import { router } from "expo-router";
import { FC } from "react";
import { SvgProps } from "react-native-svg";
import { BaseText } from "./BaseText";
import { CustomTouchableOpacity } from "./CustomTouchableOpacity";

export function TopicCard({
  title,
  image: Image,
  backgroundColor,
  textColor,
  imagePaddingTop = 0,
  height = 150,
}: {
  title: string;
  image: FC<SvgProps>;
  backgroundColor: string;
  textColor: string;
  imagePaddingTop?: number;
  height?: number;
}) {
  return (
    <CustomTouchableOpacity
      activeOpacity={0.6}
      onPress={() => router.push("/reminders")}
      style={{
        backgroundColor,
        borderRadius: 20,
        overflow: "hidden",
        height,
        justifyContent: "space-between",
        paddingTop: imagePaddingTop,
      }}
    >
      <Image
        style={{
          maxWidth: "100%",
          alignSelf: "center",
        }}
      />
      <BaseText
        variant="bold"
        style={{ color: textColor, paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {title}
      </BaseText>
    </CustomTouchableOpacity>
  );
}
