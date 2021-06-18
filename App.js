import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Button, Text, Image, Pressable, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import MatchScreen from './components/MatchScreen';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const Stack = createStackNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function AppScreen({ navigation }) {
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
      registerForPushNotification().then(token=>console.log(token));
      
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log("Received push Notification!!!" + JSON.stringify(notification));
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);

        navigation.navigate('MatchScreen');
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, [])

    async function registerForPushNotification(){
      const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status != 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        // finalStatus = status;
      }
      if (status !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;
      return token
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 300, height: 100}}
                source={"https://app.jobvite.com/logo/3522_ANDLOGORGBONWHITE_1493728768591_Company.png"}
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
                <Stack.Screen name="AppScreen" component={AppScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MatchScreen" component={MatchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
  },
    title: {
        fontSize: 48,
        color: "#FFF",
        paddingTop: 20,
        fontWeight: "700"
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
        fontWeight: "700",
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