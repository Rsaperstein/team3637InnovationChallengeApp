import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image, Style } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
};

export default class WelcomeScreen extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          
          <Text style={styles.heading}>
            Fitness-Link
          </Text>

          <View style={styles.logoContainer}>      
            <Image
              source={require('../assets/flLogoTransparent.png')}
              style={styles.logo}/>
          </View>

          <Text style={styles.welcomeHeading}>
            Welcome!
          </Text>

          <Text style={styles.subheading}>
            Please read the terms of service and privacy agreement 
          </Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.Space}>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.tosContainer}>
            <Text style={styles.tosText}>
              Terms of Service 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.Space}>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.privacyContainer}>
            <Text style={styles.privacyText}>
              Privacy Agreement 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.Space}>
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={styles.welcomeCatImageContainer}>      
          <Image
            source={require('../assets/genericCat.png')}
            style={styles.catImage}/>
          </View>
          
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.signInContainer}>
            <Text style={styles.signInText}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    margin: 24,
    fontSize: 24,
    bottom: 150,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeHeading: {
    fontSize: 32, 
    fontWeight: 'bold',
  },
  tosText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Oswald-Medium',
  },

  privacyText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Oswald-Medium',
  },

  signUpText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Oswald-Medium',
  },

  Privacy: {
    backgroundColor: '#bbe0b7',
    width: 200,
    textAlign: 'center',
  },
  Space: {
    margin: 4,
  },

  tosContainer: {
    backgroundColor: Colors.lightBlue,
    height: windowHeight / 15,
    width: windowWidth / 1.2,
    borderRadius: windowWidth / 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    textAlign: 'center',
  },

  privacyContainer: {
    backgroundColor: Colors.lightGreen,
    height: windowHeight / 15,
    width: windowWidth / 1.2,
    borderRadius: windowWidth / 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    textAlign: 'center',
  },

  signUpContainer: {
    backgroundColor: Colors.darkGreen,
    height: windowHeight / 15,
    width: windowWidth / 1.2,
    borderRadius: windowWidth / 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    textAlign: 'center',
  },

  signUp: {
    backgroundColor: '#52796f',
    width: 200,
    textAlign: 'center',
  },
  
  signInContainer: {
    textAlign: 'center',
    borderRadius: windowWidth / 30,
    backgroundColor: Colors.coolBlue,
    position: 'relative',
    top: 190,
    left: 130,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    width: windowWidth / 3,
    height: windowHeight / 15,
  },

  signInText: {
    color: 'white',
    fontSize: 24,
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
    resizeMode: 'contain',
    transform: [{scale: 0.5}],
    width: windowWidth / 1,
    height: windowHeight / 3,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 1 ,
    shadowOffset : { width: 1, height: 13},
  },
  catImage: {
    width: windowWidth / 2.9,
    height: windowHeight / 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 1 ,
    shadowOffset : { width: 1, height: 13},
  },
  welcomeCatImageContainer: {
    justifyContent: 'flex-start',
  }
});