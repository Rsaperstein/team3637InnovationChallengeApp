import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dollarCircle}>

      <TouchableOpacity>
        <Text style={styles.dollarText}>$</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.personCircle}>
      <TouchableOpacity>
        <Text style={styles.personText}>P</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.header}>
      Fitness Link
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
  },
  dollarCircle: {
    position: 'absolute',
    top: 5,
    right: 20,
    backgroundColor: '#172A3A',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarText: {
    color: 'white',
  },
  personCircle: {
    position: 'absolute',
    top: 5,
    right: 60,
    backgroundColor: '#172A3A',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personText: {
    color: 'white',
  }
});
