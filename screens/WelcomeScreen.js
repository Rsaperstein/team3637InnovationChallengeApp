import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image, Style, ScrollView } from 'react-native';
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
  'Sansita-Regular': require('../assets/fonts/Sansita-Regular.ttf'),
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
          <View style={{height: windowHeight / 50}}>
          <Text style={styles.heading}>
            Fitness-Link
          </Text>
        </View>

          <View style={styles.imageContainer}>      
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

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.tosContainer}>
            <Text style={styles.tosText}>
              Terms of Service 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.privacyContainer}>
            <Text style={styles.privacyText}>
              Privacy Agreement 
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
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.signInContainer}>
              <Text style={styles.signInText}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Sansita-Regular',
  },
  welcomeHeading: {
    fontSize: 50, 
    color: '#52796f',
    fontFamily: 'Oswald-Medium',
  },
  imageContainer: {
    height: windowHeight / 4.2,
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
    marginTop: 20,
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
    marginTop: 20,
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
    marginTop: 20,
  },
  
  signInContainer: {
    textAlign: 'center',
    borderRadius: windowWidth / 30,
    backgroundColor: Colors.coolBlue,
    position: 'relative',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    width: windowWidth / 3,
    height: windowHeight / 15,
    marginTop: 20,
  },

  signInText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Oswald-Medium',
  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Quicksand-Medium',
  },
  bannerContainer: {
    alignItems: 'center',
  },
  bannerImage: {
    resizeMode: 'contain',
    borderRadius: 8
  },

  logo: {
    resizeMode: 'contain',
    transform: [{scale: 0.5}],
  },

  welcomeCatImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },

  catImage: {
    width: windowWidth / 2.9,
    height: windowHeight / 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.4,
    shadowRadius: 1 ,
    shadowOffset : { width: 1, height: 13},
    resizeMode: 'contain',
    transform: [{scale: 0.9}],
  },
});