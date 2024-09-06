import { Image, Text, StyleSheet } from "react-native";

import profileImg from "../../assets/profile.png";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <Image source={profileImg} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
