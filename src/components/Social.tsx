import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SocialProps {
  icon: any;
  tittle: string;
}

export default function Social({ icon, tittle }: SocialProps) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialCommunityIcons name={icon} size={48} />
        <Text style={styles.tittle}>{tittle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 2,
    minWidth: "70%",
  },
  tittle: {
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 12,
  },
});
