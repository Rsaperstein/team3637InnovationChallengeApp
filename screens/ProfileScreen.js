import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Proflie</Text>
      <View style={styles.circle}><Text style={styles.iconText}>'import portfolio pic'</Text></View>
            </View>        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  circle: {
  width: 300,
  height: 300,
  borderRadius: 300,
  backgroundColor: 'lightblue',
  margin: 'auto',
},
});
