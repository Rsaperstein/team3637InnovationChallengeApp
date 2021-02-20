// Community Screen of the App
// Screen will show joinable communities 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import tabBarStyles from '../styles/TabBarStyles';
import Colors from '../constants/Colors';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class Community extends React.Component {
    state = {
        searchText: '',
    };

    _handleTextChange = searchText => {
        this.setState({ searchText });
    };
  
    render() {
        return (
            <View style={{ flex: 1,}}>
              <View style={styles.container}>           
                <View style={tabBarStyles.fullScreenCircleContainer}>
                  <View style={tabBarStyles.circle}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                          <Text style={{color: Colors.white}}>
                              S
                          </Text>
                      </TouchableOpacity>
                  </View>
                  <View style={tabBarStyles.circle}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                          <Text style={{color: Colors.white}}>
                              P
                          </Text>
                      </TouchableOpacity>
                  </View>
              </View>

                <StatusBar style="auto" />

                <View style={styles.searchBar}>
                  <View style={styles.searchContainer}>
                    <TextInput
                        value={this.state.searchText}
                        onChangeText={this._handleTextChange}
                        style={styles.searchBox}
                    />

                    <TouchableHighlight style={styles.magnifyContainer}
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
                    

                      <TouchableOpacity style={styles.createButton}>
                          <Text style={styles.createText}>Create</Text>
                      </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonJoinContainer}>
                          <Text style={styles.joinText}>Join</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRecommendContainer}>
                          <Text style={styles.recommendText}>Recommended</Text>
                    </TouchableOpacity>

                    <ScrollView>
                      <View style={styles.communityContainer1}>
                        <Text style={styles.communityHeader}>My Communities</Text>

                        <View style={styles.communityContainer}>

                          <TouchableOpacity style={styles.communityCircleContainer}>
                            <Text style={styles.communityText}>Community 1</Text>
                            <View style={styles.circle}></View>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.communityCircleContainer}>
                            <Text style={styles.communityText}>Community 2</Text>
                            <View style={styles.circle}></View>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.communityCircleContainer}>
                            <Text style={styles.communityText}>Community 3</Text>
                            <View style={styles.circle}></View>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.communityCircleContainer}>
                            <Text style={styles.communityText}>Community 4</Text>
                            <View style={styles.circle}></View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                    

              <View style={tabBarStyles.horizontalRule} />

              <View style={tabBarStyles.bottomTabContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                      <View style={[tabBarStyles.bottomTabButton]}>
                          <Image source={require('../assets/house.png')} style={tabBarStyles.icon} />
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                          <View style={[tabBarStyles.bottomTabButton]}>
                              <Image source={require('../assets/bullseye.png')} style={tabBarStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Input')}>
                          <View style={[tabBarStyles.bottomTabButton]}>
                              <Image source={require('../assets/plus.png')} style={tabBarStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                          <View style={[tabBarStyles.bottomTabButton]}>
                              <Image source={require('../assets/notificationBell.png')} style={tabBarStyles.icon} />
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                          <View style={[tabBarStyles.bottomTabButton]}>
                              <Image source={require('../assets/group.png')} style={tabBarStyles.icon} />
                          </View>
                      </TouchableOpacity>
              </View>
          </View>
            </View>

        );
    }  
}         

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white',
  },
  ScrollView: {
    backgroundColor: 'white'
  },
createText: {
  textAlign: 'center', 
  fontSize: 20,
  color: 'white'
}, 
textContainer: {
  marginRight: 10,
},
iconText: {
  textAlign: 'center',
  fontSize: 20, 
  color: 'white'
},

appHeader: {
  position: 'absolute',
  top: 0,
  fontSize: 30,
  marginLeft: 20,
  color: 'rgb(30, 30, 36)',
  width: 200,
}, 
communityHeader: {
  fontSize: 30,
  color: 'rgb(30, 30, 36)',
  alignSelf: 'flex-end',
  marginTop: 50,
  marginRight: 30,
},
searchBar: {
  width: windowWidth - 50,
  backgroundColor: '#BBE0B7',
  alignItems: 'flex-end',
  marginTop: 50,
  marginLeft: 20
},
magnifyContainer: {
  position: 'relative',
  bottom: 35,
},
magnifyGlass: {
  height: 35, 
  width: 35,
  position: 'absolute',
  right: 0,
},
searchBox: {
  width: windowWidth - 50, 
  height: 35, 
  padding: 8, 
  borderColor: 'rgb(30, 30, 36)', 
  borderWidth: 1,
}, 
buttonRecommendContainer: {
  padding: 10,
  width: windowWidth / 2,
  backgroundColor: '#7CA6E5', 
  borderRadius: 15,
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  right: windowWidth / 12.5,
  top: windowHeight / 11.5,
  marginTop: 80,
  marginBottom: 20,
},
buttonJoinContainer: {
  padding: 10,
  width: windowWidth / 4.5,
  height: windowHeight / 22,
  justifyContent: 'center',
  borderRadius: 15,
  backgroundColor: '#52796F',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  right: windowWidth / 12.5,
  top: windowHeight / 11,
  marginTop: 30,
},
recommendText: {
  fontSize: 20,
  alignItems: 'center', 
  color: 'rgb(241, 250, 238)',
  textAlign: 'center', 
  color: 'black'
}, 
joinText: {
  fontSize: 20,
  color: 'white',
  textAlign: 'center', 
},
communityContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 5,
  marginTop: 5,
  backgroundColor: '#BBE0B7',
  width: windowWidth / 1.2,
  height: windowHeight / 3,
  marginTop: 10,
  marginBottom: 75
},
communityText: {
  fontSize: 25,
  position: 'absolute',
  left: windowWidth / 4,
  top: windowHeight / 44,
}, 
circle: {  
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#7CA6E5',
  position : 'absolute',
  left: 20,
  top: 15
},
dollarCircle: {
  width: 30,
  height: 30,
  borderRadius: 30 / 2,
  backgroundColor: '#172A3A',
  position: 'absolute',
  right: 30
}, 
profileCircle: {
  width: 30,
  height: 30,
  borderRadius: 30 / 2,
  backgroundColor: '#172A3A',
  position: 'absolute',
  right: 70
},
createButton: {
  width: windowWidth / 4.5,
  height: windowHeight / 22,
  borderRadius: 15,
  backgroundColor: '#172A3A',
  justifyContent: 'center',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  right: windowWidth / 2.9,
  top: windowHeight / 11,
  marginTop: 30,
},
communityContainer1: {
  alignItems: 'center', 
  marginBottom: 25,
  marginTop: 100,
},
communityCircleContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  fontSize: 25,
  borderWidth: 1,
  width: windowWidth / 1.2,
  textAlign: 'center',
  height: windowHeight / 12,
},
});      