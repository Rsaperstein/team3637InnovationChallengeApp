// Community Screen of the App
// Screen will show joinable communities 

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class Community extends React.Component {
    state = {
        searchText: ''
    };

    _handleTextChange = searchText => {
        this.setState({ searchText });
    };
  
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Time</Text>
                <StatusBar style="auto" />

                <View style={styles.searchBar}>
                    <TextInput
                        value={this.state.searchText}
                        onChangeText={this._handleTextChange}
                        style={styles.searchBox}
                    />

                    <TouchableHighlight
                            onPress={() => {
                                alert('Searching for: ' + this.state.searchText)
                            }}
                    >
                        <Image
                                source={{ uri: 'https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306' }}
                                style={styles.magnifyGlass}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        
        
        );
    }  
}         

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 20,
    alignItems: 'flex-start'
  }, 
  searchBar: {
    width: windowHeight / 41,
    backgroundColor: 'white'
  }, 
  magnifyGlass: {
    backgroundColor: 'blue',
    height: 35, 
    width: 35, 
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
    marginLeft: 200, 
  }, 
searchBox: {
    width: 200, 
    height: 35, 
    padding: 8, 
    borderColor: 'black', 
    borderWidth: 1, 
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10,
    marginTop: 50
  }, 
});

            