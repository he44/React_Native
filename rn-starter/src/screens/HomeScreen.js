import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation})  => {
  return <View>
    <Text style={styles.text}>Hello World</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      title="Go to List"
      onPress={() => navigation.navigate('List')}
    />    
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
