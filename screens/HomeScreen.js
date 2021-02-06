import * as React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Community')}>
                <Text>
                    Button to Community
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Text>
                    Button to Profile
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProgressBar')}>
                <Text>
                    Button to Progress Bar
                </Text>
            </TouchableOpacity>            

            <View style={styles.horizontalRule} />

            <View style={styles.bottomTabContainer}>
                  <TouchableOpacity>
                      <View style={[styles.bottomTabButton]}>
                          <Text  style={[styles.bottomTabText]}>
                              Botttom Nav 1
                          </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Text style={[styles.bottomTabText]}>
                                Botttom Nav 2
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Text  style={[styles.bottomTabText]}>
                                Botttom Nav 3
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Text  style={[styles.bottomTabText]}>
                                Botttom Nav 4
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.bottomTabButton]}>
                            <Text style={[styles.bottomTabText]}>
                                Botttom Nav 5
                            </Text>
                        </View>
                    </TouchableOpacity>
              </View>

        </View>

        
        );
    }
}

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({
  bottomTabContainer: {
    position: 'absolute',
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
    backgroundColor: '#d9d5d4',
  },

  bottomTabText: {
    position: 'absolute',
    bottom: 0,
    fontSize: windowWidth / 50,
  },

  horizontalRule: {
      position: 'absolute',
      bottom: ((windowHeight / 16) + 15),
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: windowWidth,
  }
});