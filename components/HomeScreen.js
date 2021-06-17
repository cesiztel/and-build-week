import React from "react";

export default HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Whats up ANDis!</Text>
      <Image
        source={{
          width: 300,
          height: 100,

          uri: "https://commercetools.com/wp-content/uploads/2021/03/and-digital-logo.png",
        }}
        resizeMode="contain"
      />
      <Button
        title="Click Me"
        color="red"
        onPress={() => alert("Button Clicked")}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
