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
            <ScrollView style={{backgroundColor: Colors.darkGreen}}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle} />
                    <View style={styles.circle} />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text>
                        Button to Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                    <Text>
                        Button to Progress Bar
                    </Text>
                </TouchableOpacity>    
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
                                <Image source={require('../assets/flag.png')} style={styles.image} />
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
  },

  circle: {
    width: (windowWidth / 16),
    height: (windowWidth / 16),
    borderRadius: (windowWidth / 32),
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: (windowWidth / 90),
  },
});