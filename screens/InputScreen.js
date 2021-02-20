import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let customFonts = {
    'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
  };

export default class InputScreen extends React.Component {
    
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
                <View style={{ flex: 1,}}>
                    <ScrollView style={{backgroundColor: Colors.white}}>
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
        
    questionContainer: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    questionText: {
        fontSize: 22,
        marginBottom: 20,
        fontFamily: 'Oswald-Medium',
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
        fontFamily: 'Quicksand-Medium',
    },
});