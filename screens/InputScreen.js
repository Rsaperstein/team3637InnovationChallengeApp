import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class InputScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1,}}>
                <ScrollView style={{backgroundColor: Colors.white}}>
                    
                </ScrollView>       

                <View style={styles.horizontalRule} />

                <View style={styles.bottomTabContainer}>
                    <TouchableOpacity>
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

                    <TouchableOpacity>
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
  
    container: {
        flex: 1,
        flexDirection: 'row',
      },
    
      logo: {
        width: 75,
        height: 75,
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
        width: (windowWidth / 16),
        height: (windowWidth / 16),
        borderRadius: (windowWidth / 32),
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: (windowWidth / 90),
        marginTop: (windowHeight / 200),
      },

    questionContainer: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    questionText: {
        fontSize: 22,
        marginBottom: 20,
    },

    inputButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    exerciseButton: {
        width: windowWidth / 3,
        height: windowHeight / 10,
        backgroundColor: Colors.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        borderStartColor: 'black',
        borderTopColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },

    sleepButton: {
        width: windowWidth / 3,
        height: windowHeight / 10,
        backgroundColor: Colors.darkGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        borderStartColor: 'black',
        borderTopColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },

    waterButton: {
        width: windowWidth / 3,
        height: windowHeight / 10,
        backgroundColor: Colors.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderStartColor: 'black',
        borderTopColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },

    inputButtonText: {
        fontSize: 24,
    },
  
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
});