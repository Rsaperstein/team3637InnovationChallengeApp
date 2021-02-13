import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';

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
//I changed this to useState. Hoepfully it does something
 const App = () => {
  let animation = useRef(new Animated.Value(0));

  {
const width = animation.current.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})
}

export default class ProgressBar extends React.Component {

 render() { 
   return (
  <View style={styles.container}>
  <Text>
    Loading.....
  </Text>
  <View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
</View>
<Text>27%</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
</View>
<Text>27%</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
</View>
<Text>27</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
</View>
<Text>27</Text>
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
   backgroundColor: '#ecf0f1',
   padding: 8,
 },
 ProgressBar: {
  height: 20,
  width: 380,
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
}
});
 }}
