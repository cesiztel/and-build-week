import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import ProfileScreen from "./ProfileScreen";
import ExperienceScreen from "./ExperienceScreen";
import MatchScreen from "./MatchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Experience"
        component={ExperienceScreen}
        options={{
          tabBarLabel: "Experiences",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="apple-safari"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Tab.Screen name="Match" component={MatchScreen}/> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    flex: 1,
  },
  title: {
    paddingTop: "20px",
    fontWeight: "bold",
    fontSize: "32px",
  },
  subtitle: {
    paddingTop: "10px",
    maxWidth: "300px",
    textAlign: "center",
    fontSize: "18px",
  },
});

export default HomeScreen;
