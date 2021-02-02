import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Linking } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
            <Text>
                Button to Community
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
            <Text>
                Button to Progress Bar Screen
            </Text>
            </TouchableOpacity>
        </View>
        );
    }
}