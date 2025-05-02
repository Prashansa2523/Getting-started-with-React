import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Prashansa Sharma</Text>
    </SafeAreaView>
  );
};

export default profile

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
})