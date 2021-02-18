import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import tabBarStyles from '../styles/TabBarStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class ExerciseInputScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1,}}>
                <ScrollView style={{backgroundColor: Colors.white}}>
                    
                </ScrollView>       

                <View style={tabBarStyles.horizontalRule} />

                <View style={tabBarStyles.bottomTabContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[tabBarStyles.bottomTabButton]}>
                            <Image source={require('../assets/house.png')} style={tabBarStyles.icon} />
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
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