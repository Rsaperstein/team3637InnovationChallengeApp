import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default class Profile extends React.Component{
  render() {
    return (      
      <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.circle}></View>
      <Text style={styles.Profile}>Profile</Text>
      <Text style={styles.Name}>Name                   _______</Text>
      <Text style={styles.Username}>Username            _______</Text>
      <Text style={styles.email}>Email                   _______</Text>
      <Text style={styles.dateJoined}>Joined on            _______</Text>
      <View style={styles.setting}></View>
      <TouchableOpacity 
        style={styles.editsurvey}
        onPress={()=>
        this.props.navigation.navigate('Survey Screen')}
      >
        <Text style={{alignSelf:'center',fontSize:20}}>Edit Survey Answers</Text>
      </TouchableOpacity>
      <View style={styles.setting}></View>
      <TouchableOpacity 
        style={styles.setting}
        onPress={()=>
        this.props.navigation.navigate('Settings')}
      >
        <Text></Text>
      </TouchableOpacity>
      <View style={styles.boxcontainer}>
      <View style={styles.cat}></View>
      <TouchableOpacity 
        style={styles.changeaccesories}
        onPress={()=>
        this.props.navigation.navigate('customize')}
      >
        <Text style={{textAlign:'center',fontSize:19}}>Change Accessories</Text>
      </TouchableOpacity>
      </View>
      </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
  },
  line:{
    top: H/5.5,
    height:H/120,
    width:W,
    backgroundColor:'black',
  },
  circleContainer:{
  },
  Profile:{
    fontSize:27,
    fontWeight:'bold',
  },
  Name:{
    fontSize:18,
    textAlign: 'center',
    margin: H/75
  },
  Username:{
    fontSize:18,
    textAlign: 'center',
    margin:H/75
  },
  email:{
    fontSize:18,
    textAlign: 'center',
    margin:H/75,
  },
  dateJoined:{
    fontSize:18,
    textAlign: 'center',
    margin:H/65
  },
  circle:{
  top:H/20,
  width: H/6,
  height: H/6,
  backgroundColor: 'gray',
  alignSelf:'center',
  borderTopColor:'black',
  borderColor:'black',
  borderWidth:4,
  },
  setting:{
    position:"absolute",
    textAlign: 'center',
    top:H/5,
    right: W/100,
    borderTopColor:'black',
    borderColor:'black',
    borderWidth:3,
    width:W/6,
    height: W/6,
    borderRadius: W/6,
  },
  editsurvey:{
  width: W/1.75,
  height: H/15,
  borderRadius: W/10,
  backgroundColor: 'lime',
  alignSelf: 'center',
  },
  boxcontainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    width: W,
  },
  cat:{
  width:W/2,
  height:H/3,
  borderRadius:W/10,
  backgroundColor:'black',
  marginRight:10,
  },
  changeaccesories:{
    width:W/3,
    height:H/7,
    borderRadius:W/20,
    backgroundColor:'cyan',
    marginTop: H/10,
  },

});