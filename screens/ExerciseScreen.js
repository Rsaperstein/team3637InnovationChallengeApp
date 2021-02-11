import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.stretchTitle}>
      <Text style={styles.paragraph}>
        Stretches
      </Text>
    </View>

      <View style={styles.stretchContainer}>
      <TouchableOpacity style={styles.lowerBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Lower Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Full Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.upperBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Upper Body
        </Text> 
      </TouchableOpacity>

       </View>

      <Text style={styles.paragraph}>
        Workouts 
      </Text>
  

    <View style={styles.workoutContainer}>
      <TouchableOpacity style={styles.lowerBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Lower Body
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Full Body 
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.upperBodyButtons}>
        <Text style={styles.exercistButtonText}>
          Upper Body
        </Text> 
      </TouchableOpacity>

    </View>

    <Text style={styles.paragraph}>
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
  paragraph: {
    marginTop: 24,
    marginBottom: 18,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lowerBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: 100,
    backgroundColor: '#7CA6E5',
    marginLeft: 5,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  fullBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: 100,
    backgroundColor: '#BBE0B7',
    marginLeft: 5,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  upperBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: 100,
    backgroundColor: '#52796F',
    marginLeft: 5,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  workoutContainer: {
    flexDirection: 'row',
  },
  stretchContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 70,
  },
  bottomButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    padding: 12,
    width: 250,
    marginTop: 15,
    backgroundColor: '#172A3A',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Quicksand'
  },
  exercistButtonText: {
    color: 'black',
    fontFamily: 'Quicksand'
  },
  stretchTitle: {
    position: 'absolute',
    top: 0,
  }
});