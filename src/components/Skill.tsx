import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SkillProps {
  stars: number;
  tittle: string;
}

export default function Skill({ stars, tittle }: SkillProps) {
  const array = Array.from(Array(stars).keys());
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.tittle}>{tittle}</Text>
        {array.map((star) => (
          <MaterialCommunityIcons
            name="star"
            size={44}
            color="yellow"
            key={star}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    width: "100%",
  },
  box: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4,
  },
  tittle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 12,
  },
});
