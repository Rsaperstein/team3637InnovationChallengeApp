import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import tabBarStyles from '../styles/TabBarStyles';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class SettingsScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>

      <View style={tabBarStyles.fullScreenCircleContainer}>
        <View style={tabBarStyles.circle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={{color: Colors.white}}>
              S
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tabBarStyles.circle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={{color: Colors.white}}>
              P
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity>
          <Text style={styles.settingsButton}>
            Privacy Center
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
            {'\n'}Exercise is not without its risks and this or any other exercise program many result in injury. As with any exercise program, if at any point during your workout you begin to feel faint, dizzy or have physical discomfort, you should stop immediately and consult a medical professional.
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
    backgroundColor: Colors.white,
  },
  disclaimerParagraph: {
    textAlign: 'center',
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
    marginBottom: 16,
    marginTop: 4,
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
    width: (windowWidth/1.2),
    fontSize: 32,
    marginTop: 10,
  },
  privacyButton: {
    color: 'black',
    backgroundColor: '#BBE0B7',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: (windowWidth/1.2),
    fontSize: 32,
    marginBottom: 20,
  },
  disclaimerButton: {
    color: 'white',
    backgroundColor: '#52796F',
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    width: (windowWidth/1.2),
    fontSize: 30
  },
  dollarCircle: {
    position: 'absolute',
    top: 5,
    right: 20,
    backgroundColor: 'navy',
    width: (windowWidth/8),
    height: (windowWidth/8),
    borderRadius: (windowWidth/16),
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
    backgroundColor: 'navy',
    width: (windowWidth/8),
    height: (windowWidth/8),
    borderRadius: (windowWidth/16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  personText: {
    color: 'white',
  }
});
