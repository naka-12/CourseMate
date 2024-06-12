import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const handlePress = (): void => {};

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.backGroundImage}>
          <View style={styles.nameTagContainer}>
            <Text style={styles.nameTagLabel}>Michael Jordan</Text>
            <Text style={styles.nameTagText}>
              Profile Text Sample
              あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handlePress}>X</Button>
        <Button onPress={handlePress}>O</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  backGroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  nameTagContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  nameTagLabel: {
    fontSize: 24,
    color: "#ffffff",
    padding: 10,
  },
  nameTagText: {
    fontSize: 16,
    color: "#ffffff",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
});

export default Home;