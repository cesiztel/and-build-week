import React from "react";
import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from "react-native";

const EXPERIENCES = [
  {
    id: "1",
    image:
      "https://media.nu.nl/m/3c7x51pa0xcq_wd1280.jpg/politie-ontruimt-vondelpark-wegens-drukte-flessen-gegooid-naar-agenten.jpg",
    name: "Vondelpark",
    activity: "walk",
    reviews: 4000,
    icon: "πΆβ",
  },
  {
    id: "2",
    image:
      "https://www.athleticclub.nl/wp-content/uploads/2020/05/vondelparkHome.jpg",
    name: "The Athletic Club Vondelpark",
    activity: "gym",
    reviews: 657,
    icon: "ποΈ",
  },
  {
    id: "3",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dc2b9e36bbcd279d6aaffd7/1600353575944-6B1UE2ENML792LOFCZMU/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Climbing+at+Beta+Boulders?format=2500w",
    name: "Beta Boulders Amsterdam",
    activity: "bouldering",
    reviews: 356,
    icon: "π§ββοΈβ",
  },
  {
    id: "4",
    image:
      "https://www.debiertuin.nl/upload/heading/beer-tasting-of-course-800x533_1.jpg",
    name: "De BierTuin",
    activity: "beer",
    reviews: 4000,
    icon: "π»",
  },
  {
    id: "5",
    image:
      "https://static.wixstatic.com/media/dca012_5142dc56307649e0965be4f95958ddb6~mv2_d_3000_4000_s_4_2.jpg/v1/fill/w_960,h_1378,al_c,q_85,usm_0.66_1.00_0.01/dca012_5142dc56307649e0965be4f95958ddb6~mv2_d_3000_4000_s_4_2.webp",
    name: "Coffee Concepts",
    activity: "beer",
    reviews: 345,
    icon: "β",
  },

  {
    id: "6",
    image:
      "https://cdn.shopify.com/s/files/1/0364/4450/4195/files/Screenshot_2020-03-16_at_16.45.03_4472x.png?v=1584373517",
    name: "Scandinavian Embassy",
    activity: "coffee",
    reviews: 167,
    icon: "β",
  },
  {
    id: "7",
    image:
      "https://www.debiertuin.nl/upload/heading/beer-tasting-of-course-800x533_1.jpg",
    name: "De BierTuin",
    activity: "beer",
    reviews: 4000,
    icon: "π»",
  },
];

const Activity = ({ icon, name }) => {
  return (
    <View style={styles.activityCard}>
      <Text style={styles.activityIcon}>{icon}</Text>
      <Text style={styles.activityTitle}>{name}</Text>
    </View>
  );
};

const Experience = ({ image, name, activity, icon }) => (
  <View style={styles.experienceCard}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.experienceName}>{name}</Text>
    <Activity name={activity} icon={icon} />
  </View>
);

const ExperienceScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <Experience
        image={item.image}
        name={item.name}
        activity={item.activity}
        icon={item.icon}
      />
    );
  };

  return (
    <SafeAreaView style={styles.experienceContainer}>
      <View>
        <ScrollView>
          <View>
            <Text style={styles.sectionTitle}>POPULAR EXPERIENCES</Text>
            <FlatList
              data={EXPERIENCES}
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
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  experienceContainer: {
    height: "100%",
    backgroundColor: "#FFF",
    paddingTop: 50
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 20,
  },
  experienceCard: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: "#f2f3f3",
    borderRadius: 10,
  },
  experienceCardInformation: {
    fontSize: 16,
    color: "#1e212d",
  },
  experienceName: {
    fontWeight: "700",
    fontSize: 22,
    padding: 20,
    paddingBottom: 0,
  },
  activityCard: {
    padding: 15,
    marginBottom: 10,
    marginRight: 16,
    display: "flex",
    flexDirection: "row",
  },
  activityTitle: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  activityIcon: {
    padding: 10,
    backgroundColor: "#dae7ff",
    fontSize: 22,
    borderRadius: 15,
  }
};

export default ExperienceScreen;
