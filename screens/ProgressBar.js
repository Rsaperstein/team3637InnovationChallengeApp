import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
};

//Progress Bar 1 (To get more, Copy and Paste from here)
function useIntervalOne(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  //Using the Running Count to move the Progress Bar

  var CountRun = 27;

  const [progress, setProgress] = useState(0);
     setProgress(progress = CountRun);
 const App = () => {
    let animation = useState(new Animated.Value(0));
  }
const width = animation.current.interpolate({
  inputRange: CountRun,
  outputRange: CountRun,
})
}

export default class ProgressBar extends React.Component {

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
        <View style={styles.container}>
          <View style={universalStyles.fullScreenCircleContainer}>
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
    
          <View style={styles.ProgressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
            <View style={styles.PercentU}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
            </View>
          </View>

          <Text style={styles.goalText}>
            Goal: 3/4 miles walked/run
          </Text>
          <View style={styles.ProgressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
            <View style={styles.PercentD}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
            </View>
          </View>

          <Text style={styles.goalText}>
            Goal: 2.5/5 miles biked
          </Text>
          <View style={styles.ProgressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
            <View style={styles.PercentT}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
            </View>
          </View>

          <Text style={styles.goalText}>
            Goal: 10/40 curls
          </Text>
          <View style={styles.ProgressBar}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
            <View style={styles.PercentC}>
            <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
            </View>
          </View>                    

          <Text style={styles.goalText}>
            Goal: 8/10 miles swam
          </Text>
          <View style={{alignItems: 'flex-end', width: windowWidth}}>
            <TouchableOpacity style={styles.goalButton}>
              <Text style={styles.goalButtonText}>
                Set New Goal
              </Text>
            </TouchableOpacity>
          </View>

          <View style={universalStyles.horizontalRule} />

            <View style={universalStyles.bottomTabContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View style={[universalStyles.bottomTabButton]}>
                  <Image source={require('../assets/house.png')} style={universalStyles.icon} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
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

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'flex-start',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: 'white',
   padding: 20,
 },
 ProgressBar: {
  height: windowHeight / 30,
  width: windowWidth / 1.1,
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
  marginTop: 30
},
PercentU: {
  height: windowHeight / 30,
  width: 3 * windowWidth / 4,
  backgroundColor: Colors.lightBlue,
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentD: {
  height: windowHeight / 30,
  width: windowWidth / 2,
  backgroundColor: Colors.lightBlue,
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentT: {
  height: windowHeight / 30,
  width: windowWidth / 4,
  backgroundColor: Colors.lightBlue,
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentC: {
  height: windowHeight / 30,
  width: 8 * windowWidth / 10,
  backgroundColor: Colors.lightBlue,
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
goalText: {
  marginTop: 10,
  fontSize: 22,
  fontWeight: '600',
  fontFamily: 'Quicksand-Medium',
},
heading: {
  textAlign: 'center',
  fontSize: 32, 
  fontWeight: 'bold'
},
goalButton: {
  backgroundColor: '#172A3A',
  justifyContent: 'center',
  borderRadius: 15, 
  width: windowWidth / 2, 
  height: windowHeight / 9, 
  marginTop: 25, 
  marginRight: 30,
},
goalButtonText: {
  color: 'white',
  fontSize: 32,
  textAlign: 'center',
  fontFamily: 'Quicksand-Medium',
}
});

 