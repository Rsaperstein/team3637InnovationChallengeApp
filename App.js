import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProgressBar from './screens/ProgressBar'
import ProfileScreen from './screens/ProfileScreen';
import InputScreen from './screens/InputScreen';
import Image from 'react-native';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/flLogo.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{headerLeft: () => props => <LogoTitle/>}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Fitness-Link'}}
      />
        <Stack.Screen name="Community" component={CommunityScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Input" component={InputScreen} options={{title: 'Fitness-Link'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
