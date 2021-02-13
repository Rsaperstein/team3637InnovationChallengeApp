import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1,}}>
            <ScrollView style={{backgroundColor: Colors.white}}>
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

                <View style={{marginTop: 100}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                    <Text>
                        Button to Progress Bar
                    </Text>
                </TouchableOpacity> 
                </View>

            </ScrollView>

                <View style={styles.horizontalRule} />

                <View style={styles.bottomTabContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[styles.bottomTabButton]}>
                            <Image source={require('../assets/house.png')} style={styles.image} />
                            <Text  style={[styles.bottomTabText]}>
                                Home
                            </Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[styles.bottomTabButton]}>
                                <Image source={require('../assets/bullseye.png')} style={styles.image} />
                                <Text style={[styles.bottomTabText]}>
                                    Botttom Nav 2
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Input')}>
                            <View style={[styles.bottomTabButton]}>
                                <Image source={require('../assets/plus.png')} style={styles.image} />
                                <Text style={[styles.bottomTabText]}>
                                    Input Exercise
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[styles.bottomTabButton]}>
                                <Image source={require('../assets/notificationBell.png')} style={styles.image} />
                                <Text style={[styles.bottomTabText]}>
                                    Notifications
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                            <View style={[styles.bottomTabButton]}>
                                <Image source={require('../assets/group.png')} style={styles.image} />
                                <Text style={[styles.bottomTabText]}>
                                    Communities
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
        </View>        
        );
    }
}

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({
  bottomTabContainer: {
    position: 'absolute',
    bottom: (windowWidth / 1000),
    flexDirection: 'row',
    alignItems: 'flex-end',
    display: 'flex',
    backgroundColor: Colors.white,
    width: windowWidth,
  },

  bottomTabButton: {
    width: (windowWidth / 6),
    height: (windowHeight / 16),
    margin: 4,
    textAlign: "center",
    alignContent: 'center',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
  },

  bottomTabText: {
    position: 'absolute',
    bottom: 0,
    fontSize: windowWidth / 50,
  },

  image: {
    resizeMode: 'contain',
    borderRadius: 10,
    paddingBottom: 10
  },

  horizontalRule: {
      position: 'absolute',
      bottom: (windowHeight / 13),
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: windowWidth,
  },

  circleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: Colors.darkGreen,
    width: windowWidth,
  },

  circle: {
    width: (windowWidth / 16),
    height: (windowWidth / 16),
    borderRadius: (windowWidth / 32),
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
    height: (windowHeight / 7),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (windowHeight / 40),
    backgroundColor: Colors.white,
  },

  mentalExercisesButton: {
    backgroundColor: Colors.lightBlue,
    width: windowWidth / 1.2,
    height: windowHeight / 20,
    borderRadius: windowWidth / 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  physicalExercisesButton: {
    backgroundColor: Colors.lightGreen,
    width: windowWidth / 1.2,
    height: windowHeight / 20,
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