import { View, StyleSheet } from "react-native";
import { BaseText } from "@/components/ui";
import { Colors } from "@/constants";
import { SvgProps } from "react-native-svg";

export interface RecommendedItem {
  id: number;
  title: string;
  category: string;
  image: React.FC<SvgProps>;
  duration: string;
}

interface RecommendedCardProps {
  item: RecommendedItem;
}

export function RecommendedCard({ item }: RecommendedCardProps) {
  return (
    <View style={styles.recommendedCard}>
      <item.image style={styles.recommendedImage} />
      <BaseText size="lg" variant="bold">
        {item.title}
      </BaseText>
      <View style={styles.recommendedInfo}>
        <BaseText size="xs" style={{ color: Colors.light.textSecondary }}>
          {item.category} • {item.duration}
        </BaseText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  recommendedImage: {
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  recommendedInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
