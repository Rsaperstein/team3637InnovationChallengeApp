// Community Screen of the App
// Screen will show joinable communities 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                  <Text style={styles.header}>Time</Text>
                </View>

                <View style={styles.circle}><Text style={styles.iconText}>$</Text></View>
                <View style={styles.circle}><Text style={styles.iconText}>P</Text></View>
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
                    
                      <View style={styles.buttonRecommendContainer}>
                          <Text style={styles.buttonRecommend}>Recommended</Text>
                      </View>
                      
                      <View style={styles.circle}><Text style={styles.iconText}>+</Text></View>

                      <View style={styles.buttonJoinContainer}>
                          <Text style={styles.buttonJoin}>Join</Text>
                      </View>

                      <Text style={styles.header}>My Communities</Text>

                      <View style={styles.communityContainer}>
                        <Text style={styles.communityHeader}>Community 1 Name <View style={styles.circle}></View></Text>
                        <Text style={styles.communityHeader}>Community 2 Name <View style={styles.circle}></View></Text>
                        <Text style={styles.communityHeader}>Community 3 Name <View style={styles.circle}></View></Text>
                        <Text style={styles.communityHeader}>Community 4 Name <View style={styles.circle}></View></Text>
                      </View>

                      <View style={styles.horizontalRule} />

            <View style={styles.bottomTabContainer}>
                  <TouchableOpacity>
                      <View style={[styles.bottomTabButton]}>
                        <Image source={require('../assets/house.png')} style={styles.image} />
                          <Text  style={[styles.bottomTabText]}>
                              Home
                          </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Image source={require('../assets/flag.png')} style={styles.image} />
                            <Text style={[styles.bottomTabText]}>
                                Botttom Nav 2
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Image source={require('../assets/plus.png')} style={styles.image} />
                            <Text style={[styles.bottomTabText]}>
                                Input Exercise
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Image source={require('../assets/notificationBell.png')} style={styles.image} />
                            <Text style={[styles.bottomTabText]}>
                                Notifications
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                        <View style={[styles.bottomTabButton]}>
                            <Image source={require('../assets/group.png')} style={styles.image} />
                            <Text style={[styles.bottomTabText]}>
                                Communities
                            </Text>
                        </View>
                    </TouchableOpacity>
              </View>

            </View>
            </ScrollView>        
        
        );
    }  
}         

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50, 
    marginLeft: 20
  },
  header: {
    fontSize: 30,
    color: 'black',
  }, 
  searchBar: {
    width: windowHeight / 41,
    backgroundColor: 'white'
  }, 
  magnifyGlass: {
    backgroundColor: 'black',
    height: 35, 
    width: 35, 
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
  }, 
searchBox: {
    width: 200, 
    height: 35, 
    padding: 8, 
    borderColor: 'black', 
    borderWidth: 1, 
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10,
  }, 
buttonRecommendContainer: {
  padding: 10,
  width: 155,
  backgroundColor: 'black', 
},
buttonJoinContainer: {
  padding: 10,
  width: 155,
  backgroundColor: 'black',
  marginBottom: 5,
},
buttonRecommend: {
  fontSize: 20,
  alignItems: 'center', 
  color: 'white',
  textAlign: 'center', 
}, 
buttonJoin: {
  fontSize: 20,
  alignItems: 'center', 
  color: 'white',
  textAlign: 'center', 
},
communityContainer: {
  backgroundColor: 'lightgreen',
  padding: 5, 
  borderWidth: 1, 
  borderColor: 'black',
  width: windowWidth - 50,
  marginTop: 5
},
communityHeader: {
  fontSize: 20,
  color: 'black',
  borderColor: 'black',
  borderWidth: 1,
  padding: 15,
}, 
circle: {
  width: 30,
  height: 30,
  borderRadius: 30 / 2,
  backgroundColor: 'lightblue',
  margin: 'auto',
},
iconText: {
  textAlign: 'center', 
  fontSize: 20,
}, 
textContainer: {
  marginRight: 10,
},

bottomTabContainer: {
  position: 'relative',
  bottom: 15,
  flexDirection: 'row',
  alignItems: 'flex-end',
  display: 'flex',
},

bottomTabButton: {
  width: (windowWidth / 6),
  height: (windowHeight / 16),
  margin: 4,
  textAlign: "center",
  alignContent: 'center',
  justifyContent: "center",
  alignItems: 'center',
  borderRadius: 8,
},

bottomTabText: {
  position: 'absolute',
  bottom: 0,
  fontSize: windowWidth / 50,
},

image: {
  resizeMode: 'contain',
  borderRadius: 10,
  paddingBottom: 10
},

horizontalRule: {
    position: 'absolute',
    bottom: ((windowHeight / 16) + 15),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: windowWidth,
}
});

