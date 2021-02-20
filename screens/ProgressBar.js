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
  <Text>
    Loading.....
  </Text>
  <View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentU}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text>27%</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentD}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text>27</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentT}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>

<Text>27</Text>
<View style={styles.ProgressBar}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F"}}/>
  <View style={styles.PercentC}>
  <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#86c0cf"}}/>
</View>
</View>                    
<Text>27%</Text>
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
   padding: 20,
 },
 ProgressBar: {
  height: 20,
  width: 380,
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentU: {
  height: 20,
  width: 248,
  backgroundColor: 'blue',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentD: {
  height: 20,
  width: 197,
  backgroundColor: 'blue',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentT: {
  height: 20,
  width: 97,
  backgroundColor: 'blue',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
},
PercentC: {
  height: 20,
  width: 314,
  backgroundColor: 'blue',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5,
}
});

 