import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Skill from "../components/Skill";

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Header title="Habilidades" />

      <Skill stars={5} tittle="HTML" />
      <Skill stars={3} tittle="CSS" />
      <Skill stars={4} tittle="JAVASCRIPT" />
      <Skill stars={4} tittle="REACT" />
      <Skill stars={2} tittle="REACTNATIVE" />

      <View style={styles.button}>
        <Button title="Fala Comigo" color="black" />
      </View>
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
  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 8,
    width: "80%",
  },
});
