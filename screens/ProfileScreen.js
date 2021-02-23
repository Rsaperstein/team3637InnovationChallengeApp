import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default class Profile extends React.Component{
  render() {
    return (      
      <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.circle}>
      </View>
      <Text style={styles.Profile}>Profile</Text>
      <Text style={styles.Name}>Name                   _______</Text>
      <Text style={styles.Username}>Username            _______</Text>
      <Text style={styles.email}>Email                   _______</Text>
      <Text style={styles.dateJoined}>Joined on            _______</Text>
      <TouchableOpacity 
        style={styles.editsurvey}
        onPress={()=>
        this.props.navigation.navigate('Survey Screen')}
      >
        <Text style={{alignSelf:'center',fontSize:25,alignContent: 'center',}}>Edit Survey Answers</Text>
      </TouchableOpacity>
      <View style={styles.setting}>
      </View>
      <TouchableOpacity 
        style={styles.setting}
        onPress={()=>
        this.props.navigation.navigate('Settings')}
      >
       <Image 
          source= {require('../assets/settingsWheel.png')}/>
        <Text></Text>
      </TouchableOpacity>
      <View style={styles.boxcontainer}>
      <View style={styles.cat}>
      </View>
      <TouchableOpacity 
        style={styles.changeaccesories}
        onPress={()=>
        this.props.navigation.navigate('customize')}
      >
        <Text style={{textAlign:'center',fontSize:25,alignContent: 'center',}}>Change Accessories</Text>
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
    top: H/7,
    height:H/120,
    width:W,
    backgroundColor:'black',
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
  top:H/25,
  width: H/7,
  height: H/7,
  alignSelf:'center',
  borderTopColor:'black',
  borderColor:'black',
  borderWidth:4,
  },
  setting:{
    position:"absolute",
    textAlign: 'center',
    top:H/6,
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
  backgroundColor: '#BBE0B7',
  alignSelf: 'center',
  alignContent: 'center',
  },
  boxcontainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    width: W,
  },
  cat:{
  width:W/1.55,
  height:H/3,
  borderRadius:W/10,
  marginRight:5,
  },
  changeaccesories:{
    width:W/3,
    height:H/7,
    borderRadius:W/20,
    backgroundColor:'#7CA6E5',
    marginTop: H/10,
  },

});
