// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Linking } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProgressBar from './screens/ProgressBar'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
