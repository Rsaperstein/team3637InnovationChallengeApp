import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

//Progress Bar 1 (To get more, Copy and Paste from here)
function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  //Using the Running Count to move the Progress Bar
//This doesn't do anything
  CountRun = 27;

  const [progress, setProgress] = useState(0);
     setProgress(progress = CountRun);

 const App = () => {
  let animation = useRef(new Animated.Value(0));
}
useEffect(() => {
  Animated.timing(animation.current, {
    toValue: progress,
    duration: 100
  }).start();
},[progress])
const width = animation.current.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})
}

export default class Progress extends React.Componet {

 render() { 
   return (
  <View style={styles.container}>
  <Text>
    Loading.....
  </Text>
  <View style={styles.progressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width }}/>
</View>
  <Text>{`${progress}%`}</Text>
</View>
 );
}
}
export default ProgressBar;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: '#ecf0f1',
   padding: 8,
 },
 progressBar: {
  height: 20,
  width: '100%',
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5
}
});
