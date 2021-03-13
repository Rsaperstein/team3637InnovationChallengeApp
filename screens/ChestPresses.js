import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class ChestPresses extends React.Component {
    render() {
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Video
                source={require('../assets/videos/chestPresses.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: windowWidth, height: windowWidth, marginTop: windowWidth / 4,}} /> 
          </View>        
        );
    }
}