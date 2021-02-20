import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class InputScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1,}}>
                <ScrollView style={{backgroundColor: Colors.white}}>
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

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            What would you like to input?
                        </Text>
                    </View>

                    <View style={styles.inputButtonContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ExerciseInput')}>
                            <View style={styles.exerciseButton}>
                                <Text style={[styles.inputButtonText]}>
                                    Exercise
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.sleepButton}>
                                <Text style={[styles.inputButtonText]}>
                                    Sleep
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.waterButton}>
                                <Text style={[styles.inputButtonText]}>
                                    Water
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>       

                <View style={universalStyles.horizontalRule} />

                <View style={universalStyles.bottomTabContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[universalStyles.bottomTabButton]}>
                            <Image source={require('../assets/house.png')} style={universalStyles.icon} />
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
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
});