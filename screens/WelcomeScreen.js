import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

import universalStyles from '../styles/universalStyles';

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
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.welcomeButton}>
            Terms of Service 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.welcomeButton}>
            Privacy Agreement 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.signIn}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View style={universalStyles.logoContainer}>      
          <Image 
            source={require('../assets/flLogoTransparent.png')}
            style={universalStyles.catPic} />
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
    width: 150,
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
    width: 50,
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
  catPic: {
    width: 1,
    textAlign: 'left',
    borderRadius: 1,
    backgroundColor: 'rgb(124, 166, 229)',
    color: '#000000',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    top: 124,
    left: 2,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    margin: 5,
    width: 5,
    fontSize: 0,
  },
});