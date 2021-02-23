// Community Screen of the App
// Screen will show joinable communities 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import universalStyles from '../styles/universalStyles';
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
            <View style={{ flex: 1, backgroundColor: 'white',}}>
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
              </View>
            
                    
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createButton}>
                        <Text style={styles.createText}>Create</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonJoinContainer}>
                        <Text style={styles.joinText}>Join</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRecommendContainer}>
                        <Text style={styles.recommendText}>Recommended</Text>
                    </TouchableOpacity>
                  </View>

                    
                    
                      <Text style={styles.communityHeader}>My Communities</Text>
                      <ScrollView>
                        <View style={styles.communityContainer1}>
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
}         

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
communityHeader: {
  fontSize: 30,
  color: 'rgb(30, 30, 36)',
  alignSelf: 'flex-end',
  marginTop: 40,
  marginRight: 30,
},
searchBar: {
  width: windowWidth - 50,
  backgroundColor: '#BBE0B7',
  alignItems: 'flex-end',
  marginTop: windowHeight / 8,
  marginLeft: 20, 
  borderRadius: 5, 
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
  borderRadius: 5, 
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
  marginBottom: 20,
},
buttonJoinContainer: {
  padding: 10,
  width: windowWidth / 4.2,
  height: windowHeight / 20,
  justifyContent: 'center',
  borderRadius: 15,
  backgroundColor: '#52796F',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  right: windowWidth / 12.5,
  top: windowHeight / 30,
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
createButton: {
  width: windowWidth / 4.2,
  height: windowHeight / 20,
  borderRadius: 15,
  backgroundColor: '#172A3A',
  justifyContent: 'center',
  borderColor: 'black',
  borderWidth: 1,
  position: 'absolute',
  right: windowWidth / 2.97,
  top: windowHeight / 30,
},
communityContainer1: {
  alignItems: 'center', 
  marginBottom: 25,
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
buttonContainer: {
  marginBottom: windowHeight / 8,
}
});      