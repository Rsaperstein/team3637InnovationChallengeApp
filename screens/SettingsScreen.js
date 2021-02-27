import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import universalStyles from '../styles/universalStyles';
import Colors from '../constants/Colors';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
};

export default class SettingsScreen extends React.Component {
  
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

          
          <View style={universalStyles.fullScreenCircleContainer}>
            <View style={universalStyles.circle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Image 
                  source={require('../assets/shop.png')}
                  style={universalStyles.circleLogos} />
                </TouchableOpacity>
            </View>
            <View style={universalStyles.circle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Image 
                  source={require('../assets/profile.png')}
                  style={universalStyles.circleLogos} />
              </TouchableOpacity>
            </View>
          </View>

            <TouchableOpacity style={styles.settingsContainer}>
              <Text style={styles.settingsButton}>
                Privacy Center
              </Text>
            </TouchableOpacity>
        

        <TouchableOpacity>
          <Text style={styles.termsButton}>
              Terms of Service  
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.privacyButton}>
              Privacy Agreement
          </Text>
        </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.disclaimerButton}>
              Disclaimer
              <Text style={styles.disclaimerParagraph}>
                {'\n'}{'\n'}Exercise is not without its risks and this or any other exercise program many result in injury. As with any exercise program, if at any point during your workout you begin to feel faint, dizzy or have physical discomfort, you should stop immediately and consult a medical professional.
              </Text>
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
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  disclaimerParagraph: {
    textAlign: 'center',
    fontSize: 14,
    color: '#172A3A',
    marginTop: 10,
    fontFamily: 'Quicksand-Medium',
    justifyContent: 'center',
  },
  termsButton: {
    color: 'black',
    backgroundColor: '#7CA6E5',
    textAlign: 'center',
    width: windowWidth / 1.2,
    fontSize: 32,
    fontFamily: 'Oswald-Medium',
    borderRadius: 15,
    justifyContent: 'center',
  },
  settingsContainer: {
    alignItems: 'center',
    marginTop: windowWidth / 8,
    justifyContent: 'center',
  },
  settingsButton: {
    color: 'white',
    backgroundColor: '#172A3A',
    textAlign: 'center',
    width: windowWidth / 1.2,
    fontSize: 32,
    fontFamily: 'Oswald-Medium',
    borderRadius: 20,
    borderRadius: 15
  },
  privacyButton: {
    color: 'black',
    backgroundColor: '#BBE0B7',
    textAlign: 'center',
    width: windowWidth / 1.2,
    fontSize: 32,
    fontFamily: 'Oswald-Medium',
    borderRadius: 15,
    justifyContent: 'center',
  },
  disclaimerButton: {
    color: 'white',
    backgroundColor: '#52796F',
    textAlign: 'center',
    borderRadius: 15,
    width: windowWidth / 1.2,
    fontSize: 30,
    fontFamily: 'Oswald-Medium',
    justifyContent: 'center',
  },

});
