import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class SettingsScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>

    <View style={styles.dollarCircle}>
      <Text style={styles.dollarText}>$</Text>
    </View>

    <View style={styles.personCircle}>
      <Text style={styles.personText}>P</Text>
    </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity>
          <Text style={styles.settingsButton}>
            Settings 
          </Text>
        </TouchableOpacity>
      </View>

    <TouchableOpacity>
      <Text style={styles.termsButton}>
          Terms of Service  
      </Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.privacyButton}>
          Privacy Agreement  
      </Text>
    </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.disclaimerButton}>
          Disclaimer
          <Text style={styles.disclaimerParagraph}>
            Exercise is not without its risks and this or any other exercise program many result in   injury. As with any exercise program, if at any point during your workout you begin to feel faint, dizzy or have physical discomfort, you should stop immediately and consult a medical professional.
          </Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  disclaimerParagraph: {
    textAlign: 'center',
    display: 'block',
    fontSize: 14,
    color: '#172A3A',
    marginTop: 10,
  },
  termsButton: {
    color: 'black',
    backgroundColor: '#7CA6E5',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: 300,
    fontSize: 32,
    marginBottom: 20,
    marginTop: 18,
  },
  settingsContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50
  },
  settingsButton: {
    color: 'white',
    backgroundColor: '#172A3A',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: 300,
    fontSize: 32,
  },
  privacyButton: {
    color: 'black',
    backgroundColor: '#BBE0B7',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: 300,
    fontSize: 32,
    marginBottom: 20,
  },
  disclaimerButton: {
    color: 'white',
    backgroundColor: '#52796F',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: 300,
    fontSize: 30
  },
  dollarCircle: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'navy',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarText: {
    color: 'white',
  },
  personCircle: {
    position: 'absolute',
    top: 5,
    right: 40,
    backgroundColor: 'navy',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personText: {
    color: 'white',
  }
});
