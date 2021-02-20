import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

 render() { 
   return (
  <View style={styles.container}>
  <Text style={styles.heading}>
    Track Your Progress
  </Text>
  <View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentU}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text style={styles.goalText}>Goal: </Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentD}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text style={styles.goalText}>Goal: </Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentT}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text style={styles.goalText}>Goal: </Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentC}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>                    
<Text style={styles.goalText}>Goal: </Text>

<TouchableOpacity style={styles.goalButton}>
  <Text style={styles.goalButtonText}>Set New Goal</Text>
</TouchableOpacity>
</View>
 );
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
  height: 20,
  width: 380,
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
  marginTop: 30
},
PercentU: {
  height: 20,
  width: 248,
  backgroundColor: '#7ca6e5',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentD: {
  height: 20,
  width: 197,
  backgroundColor: '#7ca6e5',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentT: {
  height: 20,
  width: 97,
  backgroundColor: '#7ca6e5',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentC: {
  height: 20,
  width: 314,
  backgroundColor: '#7ca6e5',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
goalText: {
  marginTop: 10,
  fontSize: 22,
  fontWeight: '600'
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
  height: windowHeight / 12, 
  marginTop: 25, 
},
goalButtonText: {
  color: 'white',
  fontSize: 32,
  textAlign: 'center'
}
});

 