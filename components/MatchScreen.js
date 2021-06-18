import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import ConfettiCannon from "react-native-confetti-cannon";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const MatchScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const image = {
    uri: "https://images.unsplash.com/photo-1618778603069-e8c73e1a5d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ height: "100%" }}>
        <StatusBar style="auto" />
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
        <ImageBackground source={image} style={styles.imageBackground}>
          <View style={styles.overlay}>
            {/* Top Container */}
            <View style={styles.matchContainer}>
              <View>
                <Text style={styles.header}>It's A Match!</Text>
                <View style={styles.images}>
                  <View style={{ padding: 10 }}>
                    <Image
                      fadeDuration={1000}
                      style={styles.avatar}
                      source={{
                        width: 100,
                        height: 100,
                        uri: "https://randomuser.me/api/portraits/women/46.jpg",
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Image
                      fadeDuration={2000}
                      style={styles.avatar}
                      source={{
                        width: 100,
                        height: 100,
                        uri: "https://randomuser.me/api/portraits/women/65.jpg",
                      }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <LinearGradient
                  colors={["rgba(255,50,60,1)", "rgba(160,80,255,1)"]}
                  style={styles.background}
                >
                  <Text>🚀</Text>
                  <Text style={{ color: "white" }}>You are meeting</Text>
                  <Text style={styles.text}>Andrea</Text>
                  <View style={styles.line} />
                  <Text>👯‍♀️</Text>
                  <Text style={{ color: "white" }}>Your ANDexperience is</Text>
                  <Text style={({ fontSize: 30 }, styles.text)}>
                    Walk in the Vondelpark
                  </Text>
                  <View style={styles.line} />
                  <Text>⏰</Text>
                  <Text style={{ color: "white" }}>Time</Text>
                  <Text style={({ fontSize: 30 }, styles.text)}>
                    13:00 on Thursday 24th June
                  </Text>
                  <View style={styles.line} />
                  <Text>🌈</Text>
                  <Text style={{ color: "white" }}>
                    Your Shared Preferences
                  </Text>
                  <View style={styles.prefContainer}>
                    <View style={styles.preferenceBox}>
                      <Text
                        style={{
                          fontFamily: "Poppins_700Bold",
                          color: "white",
                        }}
                      >
                        Cycling
                      </Text>
                    </View>
                    <View style={styles.preferenceBox}>
                      <Text
                        style={{
                          fontFamily: "Poppins_700Bold",
                          color: "white",
                        }}
                      >
                        Reading
                      </Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                  <View style={{ marginTop: 20 }}>
                    <Button
                      title="Confirm Meetup"
                      color="#FF323C"
                      style={styles.button}
                    />
                    <Text
                      style={styles.hyperlinkStyle}
                      onPress={() => {
                        Linking.openURL("https://www.facebook.com");
                      }}
                    >
                      Choose another experience
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    color: "white",
  },
  header: {
    fontSize: 30,
    color: "black",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  matchContainer: {
    fontFamily: "Poppins_700Bold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  line: {
    width: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10,
  },
  button: {
    width: "20%"
  },
  imageBackground: {
    flex: 1,

    zIndex: -1,
    justifyContent: "center",
  },
  images: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    display: "flex",
    textAlign: "center",
    fontFamily: "Poppins_300Light",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "100%",
    marginBottom: "5%",
    margin: "auto",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  hyperlinkStyle: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  prefContainer: {
    display: "flex",
    flexDirection: "row",
  },
  preferenceBox: {
    display: "flex",
    margin: 5,
    backgroundColor: "#FF323C",
    fontFamily: "Poppins_300Light",
    padding: 5,
  },
});

export default MatchScreen;
