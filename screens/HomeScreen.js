import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                <Text>
                    Button to Community
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Text>
                    Button to Profile
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({
  halfButtonContainer: {
    flexDirection: 'row',
  },

  halfButton: {
    width: ((windowWidth / 2) - 16),
    height: (windowHeight / 8),
    margin: 4,
    textAlign: "center",
    alignContent: 'center',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'red'
  },
});