import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import tabBarStyles from '../styles/TabBarStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1,}}>
            <ScrollView style={{backgroundColor: Colors.white, height: (12 * windowHeight / 13)}}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>      
                        <Image 
                            source={require('../assets/flLogoTransparent.png')}
                            style={styles.logo} />
                    </View>

                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={{color: Colors.white}}>
                                    S
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.circle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={{color: Colors.white}}>
                                    P
                                </Text>
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

                    <TouchableOpacity style={styles.physicalExercisesButton}>
                        <Text style={styles.exercisesText}>
                            Fit-Link
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.catQuotesFeelingsParentContainer}>
                    <View style={styles.catNQuoteContainer}>
                        <View style={styles.catContainer} />
                    </View>

                    <View style={styles.quoteBoxFeelingsContainer}>
                        <TouchableOpacity style={styles.quoteBox}>
                            <Text style={styles.quoteBoxText}>
                                How are you feeling today?
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.howYourFeelingContainer}>
                            <TouchableOpacity style={styles.feelingButtons}>
                                <Text>
                                    H
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.feelingButtons}>
                                <Text>
                                    N
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.feelingBottomButton}>
                            <Text>
                                S
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={tabBarStyles.horizontalRule} />

            <View style={tabBarStyles.bottomTabContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={[tabBarStyles.bottomTabButton]}>
                        <Image source={require('../assets/house.png')} style={tabBarStyles.icon} />
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                        <View style={[tabBarStyles.bottomTabButton]}>
                            <Image source={require('../assets/bullseye.png')} style={tabBarStyles.icon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Input')}>
                        <View style={[tabBarStyles.bottomTabButton]}>
                            <Image source={require('../assets/plus.png')} style={tabBarStyles.icon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[tabBarStyles.bottomTabButton]}>
                            <Image source={require('../assets/notificationBell.png')} style={tabBarStyles.icon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                        <View style={[tabBarStyles.bottomTabButton]}>
                            <Image source={require('../assets/group.png')} style={tabBarStyles.icon} />
                        </View>
                    </TouchableOpacity>
            </View>
        </View>        
        );
    }
}

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
  },

  logo: {
    width: windowWidth / 6,
    height: windowWidth / 6,
  },

  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    width: windowWidth / 2,
    marginLeft: 10,
    marginTop: 10,
  },

  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    width: windowWidth / 2,
    marginRight: 10,
    marginTop: 10,
  },

  circle: {
    width: (windowWidth / 8),
    height: (windowWidth / 8),
    borderRadius: (windowWidth / 16),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: (windowWidth / 90),
    marginTop: (windowHeight / 200),
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
  },

  bannerSubText: {
    color: Colors.white,
    fontSize: 12,
    marginLeft: 13,
  },

  exerciseButtonsContainer: {
    width: windowWidth,
    height: (9 * windowHeight / 40),
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

  exercisesText: {
    fontSize: 20
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
    width: (windowWidth / 6),
    height: (windowWidth / 3),
    borderRadius: (windowWidth / 16),
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
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
    width: windowWidth / 2,
    height: windowHeight / 20,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },

  quoteBoxText: {
    color: Colors.white,
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