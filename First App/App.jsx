import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, SafeAreaView, TextInput, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//testing github
const Stack = createNativeStackNavigator();

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  const letters = "WELCOME".split("");
  const animations = useRef(letters.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animationsSequence = animations.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        delay: index * 150,
      });
    });

    Animated.stagger(100, animationsSequence).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textRow}>
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.text,
              {
                opacity: animations[index],
                transform: [
                  {
                    scale: animations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>

      <TextInput
        placeholder="Enter Name here..."
        style={styles.input}
      />

      <Image
        style={styles.roundedImage}
        source={require('./mee.jpeg')} 
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.btnText}>Login/Signin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// ProfileScreen component (assuming you need this)
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the Profile Screen!</Text>
      {/* Add additional content for the profile page as needed */}
    </SafeAreaView>
  );
};

// App component with navigation setup
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'skyblue',
  },
  roundedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});



