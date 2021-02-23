import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>
        Fit-Link
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
          Sign In
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

      <View style={styles.logoContainer}>      
        <Image 
          source={require('../assets/flLogoTransparent.png')}
          style={styles.logo} />
      </View>

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
    alignItems: 'center',
  },
  heading: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 0
  },
  welcomeHeading: {
    fontSize: 32, 
    fontWeight: 'bold',
    position: 'relative', 
    top: 70,
  },
  image: {
    width: 100,
    height: 100,
    zIndex: 0
  },
  welcomeButton: {
    padding: 10,
    width: 150,
    textAlign: 'right',
    borderRadius: 20,
    backgroundColor: 'rgb(124, 166, 229)',
    color: 'white',
    position: 'relative',
    bottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    margin: 5,
    width: 200,
    fontSize: 16,
  },
  subheading: {
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
    position: 'relative',
    top: 80,
    color: 'gray',
    fontWeight: '400'
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
    width: windowWidth / 5,
    height: windowWidth / 5,
  },

  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    width: windowWidth / 2,
    marginLeft: 10,
    marginBottom: 20,
  },
});

/*
<View style={styles.bannerContainer}>
              <Image
                source={require('../assets/awesomeUndraw.svg')}
                style={styles.bannerImage}
              />
</View>
*/
