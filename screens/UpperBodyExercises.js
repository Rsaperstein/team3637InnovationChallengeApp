import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Upper Body Exercises 
      </Text>

    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>
          Push-ups
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>
          Burpees
        </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.middleButtons}>
      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>
          Dips
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>
          Chest Press
        </Text>
      </TouchableOpacity>
    </View>

      <TouchableOpacity style={styles.backgroundImage}> 
        <TouchableOpacity style={styles.inclineExerciseButton}>
          <Text style={styles.exerciseText}>
            Incline Push-ups
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.exerciseButton}>
          <Text style={styles.exerciseText}>
            Decline Push-ups
          </Text>
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
    padding: 14,
    fontSize: 16,
    fontFamily: 'Serif'
  },
  exerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 20,
    width: 150,
    marginTop: 10, 
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  inclineExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 20,
    width: 150,
    marginTop: 70, 
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,

  },
  backButton: {
     backgroundColor: '#7CA6E5',
     borderRadius: 10,
     padding: 8,
     width: 100,
     textAlign: 'center',
     marginTop: 10, 
  },
  backText: {
    fontSize: 12
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    position: 'absolute',
    top: 10
  },
  topButtons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
  },
  middleButtons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
  },
  bottomButtons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 160,
  },
  backgroundImage: {
    backgroundColor: '#7CA6E5',
    height: 120,
    width: 130, 
    borderRadius: 15,
    marginTop: 40
  }
});
