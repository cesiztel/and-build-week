import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from "react-native";

const Activity = (props) => {
  return (
    <View style={styles.activityCard}>
      <Text style={styles.activityIcon}>{props.icon}</Text>
      <Text style={styles.activityTitle}>{props.name}</Text>
    </View>
  );
};

const ProfileItem = (props) => {
    return (
      <View style={styles.profileCardInformation}>
        <Text style={styles.andiProfileUserName}>{props.name}</Text>
        <Text style={styles.introduction}>{props.title}</Text>
      </View>
    );
}

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
    <ProfileItem name={name} title={title}/>
  </View>
);

const ProfileCard = () => {
  return (
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
          People's Lead
        </Text>
        <Text style={styles.introduction}>Club: Amsterdam</Text>
      </View>
    </View>
  );
};  

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <ScrollView>
          <View style={styles.introContainer}>
            <ProfileCard/>
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
      </View>
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
    backgroundColor: "#FFF",
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
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  profileCardInformation: {
    marginLeft: 30,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  andiProfilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  andiProfileUserName: {
    fontSize: 16,
    color: "#1e212d",
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
