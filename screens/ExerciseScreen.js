import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class ExerciseScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>
    <View style={styles.stretchTitle}>
      <Text style={styles.heading}>
        Stretches
      </Text>
    </View>

      <View style={styles.stretchContainer}>
      <TouchableOpacity style={styles.upperBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Upper Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Full Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.lowerBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Lower Body
        </Text> 
      </TouchableOpacity>

       </View>

      <Text style={styles.heading}>
        Exercises 
      </Text>
  

    <View style={styles.workoutContainer}>
      <TouchableOpacity style={styles.upperBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Upper Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Full Body 
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.lowerBodyButtons}>
        <Text style={styles.exerciseButtonText}>
          Lower Body
        </Text> 
      </TouchableOpacity>

    </View>

    <Text style={styles.heading}>
      Routines
    </Text>

    <TouchableOpacity style={styles.bottomButtons}>
        <Text style={styles.buttonText}>
          Recommended
        </Text>  
    </TouchableOpacity>

    <TouchableOpacity style={styles.bottomButtons}>
        <Text style={styles.buttonText}>
          Custom Routine 
        </Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.bottomButtons}>
        <Text style={styles.buttonText}>
          Tracker
        </Text> 
    </TouchableOpacity>

    </View>

    
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  heading: {
    marginTop: 20,
    marginBottom: 12,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  upperBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: windowWidth / 4,
    backgroundColor: '#7CA6E5',
    marginLeft: 5,
  },
  fullBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: windowWidth / 4,
    backgroundColor: '#BBE0B7',
    marginLeft: 5,
  },
  lowerBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: windowWidth / 4,
    backgroundColor: '#52796F',
    marginLeft: 5,
  },
  workoutContainer: {
    flexDirection: 'row',
  },
  stretchContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: windowHeight / 6,
  },
  bottomButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: windowWidth / 1.5,
    marginTop: 15,
    backgroundColor: '#172A3A',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Quicksand', 
    textAlign: 'center'
  },
  exerciseButtonText: {
    color: 'black',
    fontFamily: 'Quicksand', 
    textAlign: 'center',
    fontSize: 20,
  },
  stretchTitle: {
    position: 'absolute',
    top: windowHeight / 11,
  }
});
