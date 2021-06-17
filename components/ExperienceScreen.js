import React from "react";
import {View, Text, Image, Button, SafeAreaView, ScrollView, FlatList} from 'react-native';

const EXPERIENCES = [
    {
        id: '1',
        image: 'https://media.nu.nl/m/3c7x51pa0xcq_wd1280.jpg/politie-ontruimt-vondelpark-wegens-drukte-flessen-gegooid-naar-agenten.jpg',
        name: 'Vondelpark',
        activity: 'walk',
        reviews: 4000,
        icon: "🚶‍"
    },
];

const Activity = ({ icon, name}) => {
    return(
        <View style={styles.activityCard}>
            <Text style={styles.activityIcon}>{icon}</Text>
            <Text style={styles.activityTitle}>{name}</Text>
        </View>
    );
};

const Experience = ({ image, name, activity, icon }) => (
    <View style={styles.experienceCard}>
        <Image
            source={image}
            style={styles.image} />
        <Text style={styles.experienceName}>{name}</Text>
        <Activity name={activity} icon={icon}/>
    </View>
);

const ExperienceScreen = () => {
    const renderItem = ({ item }) => {
        return(
            <Experience image={item.image} name={item.name} activity={item.activity} icon={item.icon}/>
        )
    };

    return (
        <SafeAreaView style={styles.experienceContainer}>
            <ScrollView>
                <View>
                    <Text style={styles.sectionTitle}>POPULAR EXPERIENCES</Text>
                    <FlatList
                        data={EXPERIENCES}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
    },
    experienceContainer: {
        height: "100%",
        backgroundColor:"#FFF",
        padding: 16
    },
    sectionTitle: {
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 10
    },
    experienceCard: {
        marginBottom: 10,
        width: "100%",
        boxShadow: "0 1px 6px rgb(60 64 67 / 28%)",
        borderRadius: "10px",
    },
    experienceCardInformation: {
        fontSize: 16,
        color: "#1e212d"
    },
    experienceName: {
        fontWeight: 700,
        fontSize: 22,
        padding: 20
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
        paddingLeft: 20
    },
    activityIcon: {
        padding: 10,
        backgroundColor: "#dae7ff",
        fontSize: 22,
        borderRadius: 15
    }
}

export default ExperienceScreen;