import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

const Activity = (props) => {
  return (
    <View style={styles.activityCard}>
      <Text style={styles.activityIcon}>{props.icon}</Text>
      <Text style={styles.activityTitle}>{props.name}</Text>
    </View>
  );
};

const ANDIS = [
  {
    id: "50",
    name: "Olivia Harrinton",
    title: "People Lead",
  },
  {
    id: "53",
    name: "Emma Watson",
    title: "Product Developer",
  },
  {
    id: "55",
    name: "Olivia Harrison",
    title: "Product Analyst",
  },
];

const Item = ({ id, name, title }) => (
  <View style={styles.andiCard}>
    <Image
      style={styles.andiProfilePhoto}
      source={{
        uri: `https://randomuser.me/api/portraits/women/${id}.jpg`,
      }}
    />
    <View style={styles.profileCardInformation}>
      <Text style={styles.andiProfileUserName}>{name}</Text>
      <Text style={styles.introduction}>{title}</Text>
    </View>
  </View>
);

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.introContainer}>
          <View style={styles.profileCard}>
            <Image
              style={styles.profilePhoto}
              source={{
                uri: "https://randomuser.me/api/portraits/women/46.jpg",
              }}
            />
            <View style={styles.profileCardInformation}>
              <Text style={styles.userName}>Grace Leah</Text>
              <Text style={styles.introduction}>
                People's Lead and Cat Fanatic.
              </Text>
              <Text style={styles.introduction}>Club: Amsterdam</Text>
            </View>
          </View>
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.sectionTitle}>PREFERRED ACTIVITIES</Text>
          <View>
            <Activity name="Walk" icon="🚶‍" />
            <Activity name="Read" icon="📚" />
            <Activity name="Cycling" icon="🚴‍" />
          </View>
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.sectionTitle}>ANDis AMSTERDAM CLUB</Text>
          <FlatList
            data={ANDIS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: "#FFF",
    height: "100%",
  },

  introContainer: {
    backgroundColor: "#ff323c",
    width: "100%",
  },
  andiCard: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  profileCard: {
    background: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    elevation: 4,
    borderRadius: 8,
    padding: 20,
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  profileCardInformation: {
    marginLeft: 30,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: "10px",
  },
  andiProfilePhoto: {
    width: 60,
    height: 60,
    borderRadius: "10px",
  },
  andiProfileUserName: {
    fontSize: 16,
    color: "#1e212d",
  },
  uploadProfilePhoto: {
    width: 30,
    height: 30,
    background: "white",
    borderRadius: "50%",
    position: "absolute",
    display: "grid",
    placeItems: "center",
    right: "45%",
    left: "55%",
  },
  cameraIcon: {
    color: "black",
    fontSize: 18,
  },
  pencilIcon: {
    color: "black",
    fontSize: 18,
    position: "absolute",
    right: "16px",
    top: "62%",
  },
  userName: {
    fontSize: 20,
    color: "#1e212d",
  },
  introduction: {
    color: "#a1a1a1",
    fontSize: 14,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  activitiesContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 10,
  },
  activityCard: {
    padding: 15,
    marginBottom: 10,
    marginRight: 16,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 15,
  },
  activityTitle: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  activityIcon: {
    padding: 10,
    backgroundColor: "#dae7ff",
    fontSize: 42,
    borderRadius: 15,
  },
};

export default ProfileScreen;
