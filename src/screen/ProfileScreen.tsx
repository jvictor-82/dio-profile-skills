import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Social from "../components/Social";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="João Victor" />

      <Social icon="linkedin" tittle="LinkedIn" />
      <Social icon="github" tittle="Github" />
      <Social icon="instagram" tittle="Instagram" />
      <Social icon="facebook" tittle="Facebook" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 12,
  },
});
