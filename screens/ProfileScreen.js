import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
import universalStyles from '../styles/universalStyles';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default class Profile extends React.Component{
  render() {
    return (      
      <View style={styles.container}>

      <View style={universalStyles.fullScreenCircleContainer1}>
        <View style={universalStyles.circle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <Image 
                source={require('../assets/shop.png')}
                style={universalStyles.circleLogos} />
            </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.line}></View>
      <View style={styles.circle}></View>

      <Text style={styles.Profile}>Profile</Text>
      <Text style={styles.Name}>Name: Dalek Cat</Text>
      <Text style={styles.Username}>Username: catlover1</Text>
      <Text style={styles.email}>Email: ***********@cats.com</Text>
      <Text style={styles.password}>Password: **********</Text>
      <Text style={styles.dateJoined}>Joined: XX-XX-XXXX</Text>
      <TouchableOpacity 
        style={styles.editsurvey}
        onPress={()=>
        this.props.navigation.navigate('Survey Screen')}
      >
        <Text style={styles.surveyButton}>Edit Survey Answers</Text>
      </TouchableOpacity>

      <View style={styles.setting}>
        <TouchableOpacity 
          style={styles.setting}
          onPress={()=>
          this.props.navigation.navigate('Settings')}
        >
        <Image 
            source= {require('../assets/settingsWheel.png')}
            style={styles.settingsImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.boxcontainer}>
      <View style={styles.cat}>
      </View>
      <TouchableOpacity 
        style={styles.changeaccesories}
        onPress={()=>
        this.props.navigation.navigate('customize')}
      >
        <Text style={styles.accessoryButton}>Change Accessories</Text>
      </TouchableOpacity>
      </View>
      </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  line:{
    top: H / 7,
    height: H / 120,
    backgroundColor: 'black',
  },
  Profile:{
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 5, 
    marginTop: 5, 
  },
  Name:{
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75
  },
  Username:{
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75
  },
  email:{
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75,
  },
  password: {
    fontSize: 18,
    textAlign: 'center',
  },
  dateJoined:{
    fontSize: 18,
    textAlign: 'center',
    margin: H / 65
  },
  circle:{
    top:H / 25,
    width: H / 7,
    height: H / 7,
    alignSelf:'center',
    borderTopColor:'black',
    borderColor:'black',
    borderWidth: 4,
  },
  setting: {
    position: "absolute",
    top: H / 14,
    left: W / 3.4,
  },
  editsurvey: {
    width: W / 1.2,
    height: H / 15,
    borderRadius: W/10,
    backgroundColor: '#BBE0B7',
    alignSelf: 'center',
    justifyContent: 'center',                 
    alignContent: 'center',
    marginTop: H / 32,
  },
  boxcontainer:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  cat:{
    width:W/1.55,
    height:H/3,
    borderRadius:W/10,
    marginRight:5,
  },
  changeaccesories:{
    width: W / 2.7,
    height: H / 8,
    borderRadius: 15,
    backgroundColor:'#7CA6E5',
    justifyContent: 'center',
    position: 'absolute',
    top: H / 16,
  },
  surveyButton: {
    alignSelf:'center', 
    fontSize: 25, 
    alignContent: 'center', 
    justifyContent: 'center'
  }, 
  settingsImage: {
    resizeMode: 'contain',
    transform: [{scale: 0.3}],
  },
  accessoryButton: {
    textAlign:'center',
    fontSize: 25,
    alignContent: 'center',
  },
  fullScreenCircleContainer1: {
      position: 'absolute',
      right: 24,
      top: 0
  },
});
