import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class UpperBodyExercises extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      
        <Text style={styles.heading}>
          Upper Body Exercises 
        </Text>

      <View style={styles.topContainer}>

      <TouchableOpacity style={styles.backgroundImage}>
        <TouchableOpacity style={styles.pushUpExerciseButton}>
          <Text style={styles.exerciseText}>
            Push-ups
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>


      <TouchableOpacity style={styles.backgroundImage}>
        <TouchableOpacity style={styles.burpeesExerciseButton}>
          <Text style={styles.exerciseText}>
            Burpees
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      </View>

      <View style={styles.middleContainer}>

      <TouchableOpacity style={styles.backgroundImage}>
        <TouchableOpacity style={styles.dipExerciseButton}>
          <Text style={styles.exerciseText}>
            Dips
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backgroundImage}> 
        <TouchableOpacity style={styles.chestExerciseButton}>
          <Text style={styles.exerciseText}>
            Chest Press
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.backgroundImage}> 
          <TouchableOpacity style={styles.inclineExerciseButton}>
            <Text style={styles.exerciseText}>
              Incline Push-ups
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      

        <TouchableOpacity style={styles.backgroundImage}> 
          <TouchableOpacity style={styles.declineExerciseButton}>
            <Text style={styles.exerciseText}>
              Decline Push-ups
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      

        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>
            Back
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
  exerciseText: {
    color: 'white',
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
    fontFamily: 'Serif',
  },
  inclineExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  declineExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  chestExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  dipExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  burpeesExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  pushUpExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: 150,
    marginTop: 70,
  },
  backButton: {
     backgroundColor: '#7CA6E5',
     borderRadius: 15,
     padding: 10,
     width: 100,
     textAlign: 'center',
     marginTop: 10, 
     position: 'absolute',
     bottom: 70
  },
  backText: {
    fontSize: 14
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    position: 'absolute',
    top: 22
  },
  backgroundImage: {
    backgroundColor: '#7CA6E5',
    height: 120,
    width: 150, 
    borderRadius: 15,
    marginTop: 40,
    marginRight: 5,
    marginLeft: 5,
  },
  topContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 25,
  },
  middleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 155,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 285,
  },
});
