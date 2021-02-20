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
                    <View style={styles.inputExerciseContainer}>
                        <Text style={styles.inputText}>
                            Input Exercise
                        </Text>
                    </View>
                
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
        
    inputExerciseContainer: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputText: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    questionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    questionText: {
        fontSize: 20,
        marginBottom: 20,
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