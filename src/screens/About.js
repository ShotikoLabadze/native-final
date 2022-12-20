import { Text, View, ScrollView, Image } from "react-native";

function AboutScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: "100%", heigth: 250 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text>That's React Native final project</Text>
      </View>
    </ScrollView>
  );
}

export default AboutScreen;
