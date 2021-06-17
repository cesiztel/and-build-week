import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from 'expo-linking';
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

  const image = { uri: 'https://images.unsplash.com/photo-1618778603069-e8c73e1a5d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80' };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.matchContainer}>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(255,50,60,1)", "rgba(160,80,255,1)"]}
            style={styles.background}
          >
            <View style={styles.images}>
              <View style={{ padding: 10 }}>
                <Image
                  style={styles.avatar}
                  source={{
                    width: 100,
                    height: 100,
                    uri: "https://pbs.twimg.com/profile_images/735720820132089856/EQopVEs3_400x400.jpg",
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ padding: 10 }}>
                <Image
                  style={styles.avatar}
                  source={{
                    width: 100,
                    height: 100,
                    uri: "https://pbs.twimg.com/profile_images/735720820132089856/EQopVEs3_400x400.jpg",
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Text style={styles.text, styles.header}>It's A Match!</Text>
          </LinearGradient>
        </View>
        <View style={styles.details}>
        <ImageBackground source={image} style={styles.imageBackground}>
          <Text>You will be meeting with</Text>
          <Text style={{ fontSize: 30 }, styles.text}>Andrea</Text>
          <View style={styles.line} />
          <Text>The activity you will be doing together is:</Text>
          <Text style={{ fontSize: 30 }, styles.text}>Walk in the Vondelpark</Text>
          <View style={styles.line} />
          <Text>Time:</Text>
          <Text style={{ fontSize: 30 }, styles.text}>13:00 on Thursday 24th June</Text>
        <Button title="Confirm Meetup" color="#FF323C" style={styles.button} />
        <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.facebook.com');
            }}>
            Choose another experience
        </Text>
        </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  header: {
    fontSize: 50,
    color: "white",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: "white",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  matchContainer: {
    fontFamily: "Poppins_700Bold",
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    padding: 10,
    boxShadow: "0 0 15px rgba(0,0,0,1)",
  },
  line: {
    width: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10,
  },
  button: {
    
    borderRadius: "50%",
    width: "20%",
    cursor: "pointer",
  },
  imageBackground: {
    flex: 1,
    // resizeMode: 'cover',
    opacity: 0.4,
    justifyContent: 'center',
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
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
  details: {
    flex: 2,
    textAlign: "center",
    fontFamily: "Poppins_300Light",
   
    // width: '100%',
    backgroundColor: "white",
    alignItems: 'center',
    
    // justifyContent: 'center',
  },
  hyperlinkStyle: {
      textAlign: 'center',
      color: '#FF323C',
      textDecorationLine: 'underline'

  }
});

export default MatchScreen;
