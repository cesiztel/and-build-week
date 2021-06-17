import React from "react";
import { View, Text, Image, Button, SafeAreaView } from "react-native";

const styles = {
  coverPhoto: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: "50%",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
  },
  userName: {
    paddingTop: 20,
    fontWeight: "bold",
  },
  introduction: {
    textAlign: "center",
    padding: 10,
  },
  introContainer: {
    boxShadow: "10px 5px 20px rgba(255, 50, 60, 0.6)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
};

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.introContainer}>
          <Image
            style={styles.coverPhoto}
            source={{
              uri: "https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            }}
          />
          <Text style={styles.introduction}>@Grace Lea</Text>
          <Text style={styles.introduction}>
            People Lead and Cat Enthusiast. <br />I love cocktails and long
            walks on the beach.
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
