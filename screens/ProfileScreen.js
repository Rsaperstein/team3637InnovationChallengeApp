import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Profile extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.line}/>
      <Text style={styles.Name}>Name                   _______</Text>
      <Text style={styles.Username}>Username            _______</Text>
      <Text style={styles.email}>Email                   _______</Text>
      <Text style={styles.dateJoined}>Joined on            _______</Text>
      <View style={styles.setting}></View>
      <TouchableOpacity 
        style={styles.setting}
        onPress={()=>
        this.props.navigation.navigate('Settings')}
      >
        <Text></Text>
      </TouchableOpacity>
      </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  Name:{
    fontSize:18,
    margin: 7.5
  },
  Username:{
    fontSize:18,
    margin:7.5
  },
  email:{
    fontSize:18,
    margin:7.5
  },
  dateJoined:{
    fontSize:18,
    margin:7.5
  },
  circle:{

  width: 100,
  height: 100,
  borderRadius: 20,
  backgroundColor: 'gray',
  fontSize: 3
  },
  setting:{
    position:"absolute",
    bottom:20,
    right: 20,
    borderTopColor:'black',
    borderColor:'black',
    borderWidth:1,
    width:30,
    height: 30,
    borderRadius: 60,
    backgroundColor:''
  }
});

