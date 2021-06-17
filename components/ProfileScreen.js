import React from "react";
import { View, Text, Image, Button, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const styles = {
  uploadPhotoIcon: {
    color: "black",
  },
  profilePhoto: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: "50%",
    boxShadow: "rgb(255 50 60 / 60%) 9px 8px 25px",
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
    boxShadow: "10px 10px 30px rgba(255, 50, 60, 0.6)",
    background: "white",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 80,
    elevation: 1,
    width: "80%",
    zIndex: "100",
  },
  bubble: {
    backgroundColor: "rgb(255, 50, 60)",
    width: "100%",
    height: "70%",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    position: "absolute",
    elevation: -10,
    zIndex: -10,
    top: 0,
  },
};

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.introContainer}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri: "https://images.unsplash.com/photo-1612061279301-c1bd3a484fcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
            }}
          />
          <View style={styles.uploadProfilePhoto}>
            <Icon name="rocket" size={30} color="#900" style={styles.uploadPhotoIcon} />
          </View>
          <Text style={styles.userName}>@Grace Leah</Text>
          <Text style={styles.introduction}>
            People's Lead and Cat Fanatic. <br />I love cocktails and long walks
            on the beach.
          </Text>
        </View>
        <View style={styles.bubble}></View>
      </View>
    </>
  );
};

export default ProfileScreen;
