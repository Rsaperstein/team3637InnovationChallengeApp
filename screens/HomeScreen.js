import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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


export default class HomeScreen extends React.Component {

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
          <View style={{ flex: 1}}>
              <ScrollView style={{backgroundColor: Colors.white, flex: .8}}>
                  <View style={styles.container}>
                      <View style={universalStyles.logoContainer}>      
                          <Image 
                              source={require('../assets/flLogoTransparent.png')}
                              style={universalStyles.logo} />
                      </View>

                      <View style={universalStyles.circleContainer}>
                          <View style={universalStyles.circle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                              <Image 
                                source={require('../assets/shop.png')}
                                style={universalStyles.circleLogos} />
                            </TouchableOpacity>
                          </View>
                          <View style={universalStyles.circle}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                <Image 
                                  source={require('../assets/profile.png')}
                                  style={universalStyles.circleLogos} />
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>

                  <View style={styles.bannerContainer}>
                      <Text style={styles.bannerTitleText}>
                          Walk Across the Country Event
                      </Text>

                      <Text style={styles.bannerSubText}>
                          From April 4th to April 15th, click here for more information
                      </Text>
                  </View>

                  <View style={styles.exerciseButtonsContainer}>
                      <TouchableOpacity style={styles.mentalExercisesButton}>
                          <Text style={styles.exercisesText}>
                              Mind-Link
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                        style={styles.physicalExercisesButton}
                        onPress={() => this.props.navigation.navigate('Exercise')}>
                          <Text style={styles.exercisesText}>
                              Fit-Link
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('LinkTopia')}
                        style={styles.linkTopiaButton}>
                          <Text style={styles.exercisesText}>
                              Link-Topia
                          </Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.catQuotesFeelingsParentContainer}>
                      <View style={styles.catNQuoteContainer}>
                          <View style={styles.catContainer}>
                            <Image 
                              source={require('../assets/genericCat.png')}
                              style={styles.catImage} />
                          </View>
                      </View>

                      <View style={styles.quoteBoxFeelingsContainer}>
                          <TouchableOpacity style={styles.quoteBox}>
                              <Text style={styles.quoteBoxText}>
                                  How are you feeling today?
                              </Text>
                          </TouchableOpacity>

                          <View style={styles.howYourFeelingContainer}>
                              <TouchableOpacity style={styles.feelingButtons}>
                                <Image 
                                  source={require('../assets/happyFace.png')}
                                  style={styles.feelingsImage} />
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.feelingButtons}>
                                <Image 
                                  source={require('../assets/neutralFace.png')}
                                  style={styles.feelingsImage} />
                              </TouchableOpacity>
                          </View>
                          <TouchableOpacity style={styles.feelingBottomButton}>
                            <Image 
                              source={require('../assets/sadFace.png')}
                              style={styles.feelingsImage} />
                          </TouchableOpacity>
                      </View>
                  </View>
              </ScrollView>

              <View style={universalStyles.horizontalRule} />

              <View style={universalStyles.bottomTabContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                      <View style={[universalStyles.bottomTabButton]}>
                          <Image source={require('../assets/house.png')} style={universalStyles.icon} />
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                          <View style={[universalStyles.bottomTabButton]}>
                              <Image source={require('../assets/bullseye.png')} style={universalStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Input')}>
                          <View style={[universalStyles.bottomTabButton]}>
                              <Image source={require('../assets/plus.png')} style={universalStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                          <View style={[universalStyles.bottomTabButton]}>
                              <Image source={require('../assets/notificationBell.png')} style={universalStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                          <View style={[universalStyles.bottomTabButton]}>
                              <Image source={require('../assets/group.png')} style={universalStyles.icon} />
                          </View>
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

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
  },

  bannerContainer: {
    width: windowWidth,
    height: (windowHeight / 6),
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGreen,
  },

  bannerTitleText: {
    color: Colors.white,
    fontSize: 24,
    marginLeft: 13,
    fontFamily: 'Oswald-Medium',
  },

  bannerSubText: {
    color: Colors.white,
    fontSize: 12,
    marginLeft: 13,
    fontFamily: 'Oswald-Medium',
  },

  exerciseButtonsContainer: {
    width: windowWidth,
    height: (9 * windowHeight / 20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (windowHeight / 40),
    backgroundColor: Colors.white,
  },

  mentalExercisesButton: {
    backgroundColor: Colors.lightBlue,
    width: windowWidth / 1.2,
    height: windowHeight / 10,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  physicalExercisesButton: {
    backgroundColor: Colors.lightGreen,
    width: windowWidth / 1.2,
    height: windowHeight / 10,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight / 40,
  },

  linkTopiaButton: {
    backgroundColor: Colors.darkGreen,
    width: windowWidth / 1.2,
    height: windowHeight / 10,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight / 40,
  },

  exercisesText: {
    fontSize: 20,
    fontFamily: 'Quicksand-Medium',
  },

  catQuotesFeelingsParentContainer: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: Colors.white,
  },
  
  catNQuoteContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: windowWidth / 4,
  },

  catContainer: {
    width: (windowWidth / 5),
    height: (windowHeight / 5),
    borderRadius: (windowWidth / 16),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  
  catImage: {
    resizeMode: 'contain',
  },

  quoteBoxFeelingsContainer: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    width: 3 * windowWidth / 4,
    alignItems: 'flex-start',
    marginLeft: 20,
  },

  quoteBox: {
    backgroundColor: Colors.coolBlue,
    width: windowWidth / 1.9,
    height: windowHeight / 20,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },

  quoteBoxText: {
    color: Colors.white,
    fontFamily: 'Quicksand-Medium',
  },

  howYourFeelingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: Colors.white,
    marginLeft: windowWidth / 14,
  },

  feelingButtons: {
    backgroundColor: Colors.lightBlue,
    width: windowWidth / 6,
    height: windowHeight / 12,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  feelingsImage: {
    resizeMode: 'contain'
  },

  feelingBottomButton: {
    backgroundColor: Colors.lightBlue,
    width: windowWidth / 6,
    height: windowHeight / 12,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: windowWidth / 6,
    marginTop: 10,
  }
});