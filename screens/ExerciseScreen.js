import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
};

export default class ExerciseScreen extends React.Component {
  
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
    return (
      <View style={styles.container}>
      <ScrollView>
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
        <TouchableOpacity 
          style={styles.upperBodyButtons}
          onPress={() => this.props.navigation.navigate('UpperBodyExercises')}>
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

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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

      </ScrollView>

      </View>    
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: windowHeight / 200,
  },
  upperBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    width: windowWidth / 4,
    backgroundColor: '#7CA6E5',
    marginLeft: 5,
    height: windowHeight / 10,
    justifyContent: 'center',
  },
  fullBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    width: windowWidth / 4,
    backgroundColor: '#BBE0B7',
    marginLeft: 5,
    justifyContent: 'center',
    height: windowHeight / 10,
  },
  lowerBodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    width: windowWidth / 4,
    backgroundColor: '#52796F',
    marginLeft: 5,
    height: windowHeight / 10,
    justifyContent: 'center',
  },
  workoutContainer: {
    flexDirection: 'row',
    marginTop: windowHeight / 30,
    marginBottom: windowHeight / 30,
  },
  stretchContainer: {
    flexDirection: 'row',
    marginTop: windowHeight / 30,
    marginBottom: windowHeight / 30,
  },
  bottomButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    width: windowWidth / 1.5,
    marginTop: 15,
    backgroundColor: '#172A3A',
    height: windowHeight / 12,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
  exerciseButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  stretchTitle: {
  }
});
