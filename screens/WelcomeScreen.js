import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>
        (App Name)
      </Text>
      <Text style={styles.subheading}>
        Welcome to the fitness app! Here is the welcome screen with filler text. 
      </Text>
      <Text style={styles.welcomeButton}>
        Continue
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  heading: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    top: 100
  },
  image: {
    width: 100,
    height: 100,
    zIndex: 0
  },
  welcomeButton: {
    padding: 10,
    width: 150,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'rgb(124, 166, 229)',
    color: 'white',
    position: 'relative',
    top: 100,
  },
  subheading: {
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
    position: 'relative',
    top: 80
  },
});

