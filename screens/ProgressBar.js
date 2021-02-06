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
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
  const [progress, setProgress] = useState(0);
 useInterval(() => {
   if(progress < 100) {
     setProgress(progress + 5);
   }
 }, 1000);
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

export default class ProgressBar extends React.Componet {

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
