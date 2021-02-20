import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProgressBar from './screens/ProgressBar'
import ProfileScreen from './screens/ProfileScreen';
import InputScreen from './screens/InputScreen';
import ExerciseInputScreen from './screens/ExerciseInputScreen';
import SettingsScreen from './screens/SettingsScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

// UNLESS A HEADER HEIGHT IS SPECIFIED FOR ALL SCREENS, REMOVE IT FROM THE HOME SCREEN STACK BEFORE DEPLOYMENT

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Fitness-Link', headerStyle: {height: 80}}} />
        <Stack.Screen name="Community" component={CommunityScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Input" component={InputScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="ExerciseInput" component={ExerciseInputScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Fitness-Link'}} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} options={{title: 'Fitness-Link'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
