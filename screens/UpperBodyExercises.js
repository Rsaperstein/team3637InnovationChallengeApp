import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import Colors from '../constants/Colors';
import universalStyles from '../styles/universalStyles';

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
};

export default class UpperBodyExercises extends React.Component {
  
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
    if (this.state.fontsLoaded) {
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

        <TouchableOpacity 
          style={styles.backgroundImage}
          onPress={() => this.props.navigation.navigate('ChestPresses')}> 
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

          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Exercise')}>
            <Text style={styles.backText}>
              Back
            </Text>
          </TouchableOpacity>

          <View style={universalStyles.horizontalRule} />

          <View style={universalStyles.bottomTabContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={[universalStyles.bottomTabButton]}>
                      <Image source={require('../assets/house.png')} style={universalStyles.icon} />
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                      <View style={[universalStyles.bottomTabButton]}>
                          <Image source={require('../assets/bullseye.png')} style={universalStyles.icon} />
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Input')}>
                      <View style={[universalStyles.bottomTabButton]}>
                          <Image source={require('../assets/plus.png')} style={universalStyles.icon} />
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                      <View style={[universalStyles.bottomTabButton]}>
                          <Image source={require('../assets/notificationBell.png')} style={universalStyles.icon} />
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                      <View style={[universalStyles.bottomTabButton]}>
                          <Image source={require('../assets/group.png')} style={universalStyles.icon} />
                      </View>
                  </TouchableOpacity>
          </View>
      
        </View>
      );
    }
    else {
      return <AppLoading />;
    }
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
    fontFamily: 'Quicksand-Medium',
  },
  inclineExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  declineExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  chestExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  dipExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  burpeesExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  pushUpExerciseButton: {
    backgroundColor: '#172A3A',
    borderRadius: 15,
    width: windowWidth / 2.4,
    marginTop: 80,
  },
  backButton: {
     backgroundColor: '#7CA6E5',
     borderRadius: 15,
     padding: 10,
     width: 100,
     textAlign: 'center',
     marginTop: 10, 
     position: 'absolute',
     bottom: 70,
     justifyContent: 'center',
     alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Medium',
  },
  heading: {
    fontSize: 25,
    marginBottom: 5,
    position: 'absolute',
    top: 22,
    fontFamily: 'Oswald-Medium',
  },
  backgroundImage: {
    backgroundColor: '#7CA6E5',
    height: windowHeight / 7,
    width: windowWidth / 2.4, 
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
