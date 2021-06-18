import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

function AppScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 300, height: 100}}
                source={{uri: "https://app.jobvite.com/logo/3522_ANDLOGORGBONWHITE_1493728768591_Company.png"}}
            />
            <Text style={styles.title}>Hello 👋 ANDis</Text>
            <Text style={styles.subtitle}>Have fun with other collegues. Discover new places. Connect.</Text>
            <Pressable
                style={styles.mainButton}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style={styles.mainButtonLabel}>START</Text>
            </Pressable>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={AppScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        color: "#FFF",
        paddingTop: 20,
    },
    subtitle: {
        fontSize: 18,
        color: "#FFF",
        textAlign: "justify",
        paddingTop: 10,
        maxWidth: 300
    },
    mainButton: {
        width: 220,
        padding: 8,
        borderRadius: 53,
        backgroundColor: "#FFF",
        marginTop: 100
    },
    mainButtonLabel: {
        color: "#ff323c",
        fontSize: 16,
        padding: 20,
        textAlign: "center"
    }
});

const MyTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: '#ff323c',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};