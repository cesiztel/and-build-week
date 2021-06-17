import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, Button, SafeAreaView } from 'react-native';
// import Profile from "./ProfileScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Whats up ANDis!</Text>
      <Image
        source={{
          width: 300,
          height: 100,

          uri: "https://commercetools.com/wp-content/uploads/2021/03/and-digital-logo.png",
        }}
        resizeMode="contain"
      />
      <Button
        title="Setup profile"
        onPress={() =>
        navigation.navigate("Profile")
      }
    />
    <Button
        title="Experiences"
        onPress={() =>
        navigation.navigate("Experience")
      }
    />
    <Button
        title="Match"
        onPress={() =>
        navigation.navigate("Match")
      }
    />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
  }
});

export default HomeScreen;
