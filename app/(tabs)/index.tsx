import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity >
        <Text style={styles.button}>
        This is a button
        </Text>
      </TouchableOpacity>
      <Link href={"/about"} style={styles.link}>
      This is A Link to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button:{
    color: '#FF0000',
    margin: 20,
    borderColor: "#fff"
  },
  link: {
fontSize: 20,
textDecorationLine: "underline",
color: '#00008b'
  }
});