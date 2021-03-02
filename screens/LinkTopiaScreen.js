import * as React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from '../constants/Colors';

let customFonts = {
  'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
  'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
  'Sansita-Regular': require('../assets/fonts/Sansita-Regular.ttf'),
};

export default class LinkTopiaScreen extends React.Component {
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
            <Image
                source={require('../assets/linkTopia.png')} 
                style={styles.image}/>
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
    backgroundColor: 'white',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
  },

  image: {
    resizeMode: 'contain',
    transform: [{scale: 0.6}],
  },

});