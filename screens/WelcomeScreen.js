import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image, Style } from 'react-native';
import Constants from 'expo-constants';

import universalStyles from '../styles/universalStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class WelcomeScreen extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        
        <Text style={styles.heading}>
          Fitness-Link
        </Text>

        <Text style={styles.welcomeHeading}>
          Welcome!
        </Text>

        <Text style={styles.subheading}>
          Please read the terms of service and privacy agreement 
        </Text>

        <TouchableOpacity>
          <Text style={styles.welcomeButton}>
            Terms of Service 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.welcomeButton} style={styles.Privacy}>
            Privacy Agreement 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.welcomeButton} style={styles.signUp}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.signIn}>
            Log In
          </Text>
        </TouchableOpacity>

        <View style={universalStyles.logo}>      
          <Image
            source={require('../assets/flLogoTransparent.png')}
            style={styles.logo}/>
          </View>

          <View style={universalStyles.logo}>      
          <Image
            source={require('../assets/group.png')}
            style={styles.catPic}/>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  heading: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeHeading: {
    fontSize: 32, 
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    zIndex: 0
    //please just let me pull take pity
  },
  welcomeButton: {
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'rgb(124, 166, 229)',
    color: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    margin: 5,
    width: 200,
    fontSize: 16,
  },
  Privacy: {
    backgroundColor: '#bbe0b7',
    width: 200,
    textAlign: 'center',
  },
  signUp: {
    backgroundColor: '#52796f',
    width: 200,
    textAlign: 'center',
  },
  signIn: {
    width: 150,
    textAlign: 'right',
    borderRadius: 20,
    backgroundColor: 'rgb(124, 166, 229)',
    color: 'white',
    position: 'relative',
    top: 190,
    left: 130,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    margin: 5,
    width: 45,
    fontSize: 16,
    //pull
  },
  subheading: {
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    fontWeight: '400',
  },
  subheading: {
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    fontWeight: '400',
  },
  bannerContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  bannerImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8
  },
  logo: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    bottom: 450,
    right: 36,
   shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 1 ,
    shadowOffset : { width: 1, height: 13},
    margin: 1,
  },
  catPic: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    top: 17,
    right: 140,
    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 1 ,
    shadowOffset : { width: 1, height: 13},
    margin: 1,
  },
});