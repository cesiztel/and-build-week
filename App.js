import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, Button, SafeAreaView } from 'react-native';

export default function App() {
 

  return (
    <SafeAreaView style={styles.container}>
      <Text>Whats up ANDis!</Text>
      <Image source={{
        width: 300,
        height: 100,
        
        uri: "https://commercetools.com/wp-content/uploads/2021/03/and-digital-logo.png"}} resizeMode="contain"/>
        <Button  title="Click Me" color="red" onPress={() => alert("Button Clicked")}/>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
