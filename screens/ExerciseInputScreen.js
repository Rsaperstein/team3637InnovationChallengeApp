import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';

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

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            What activity did you do?
                        </Text>
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
        
    inputExerciseContainer: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputText: {
        fontSize: 30,
        marginBottom: 5,
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

});