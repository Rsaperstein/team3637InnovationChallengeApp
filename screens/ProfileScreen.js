import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
import universalStyles from '../styles/universalStyles';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default class Profile extends React.Component{
  render() {
    return (      
      <View style={styles.container}>

        <View style={styles.line}></View>
        <View style={styles.circle}>
            <Image 
                  source= {require('../assets/dalekCat.png')}
                  style={styles.dalekCatImage}/>
        </View>

        <View style={styles.settingContainer}>
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

        <Text style={styles.Profile}>Profile</Text>
        <Text style={styles.Name}>Name: Dalek Cat</Text>
        <Text style={styles.Username}>Username: catlover1</Text>
        <Text style={styles.email}>Email: ***********@cats.com</Text>
        <Text style={styles.password}>Password: **********</Text>
        <Text style={styles.dateJoined}>Joined: XX-XX-XXXX</Text>
          
        <TouchableOpacity 
          style={styles.editsurvey}
        >
          <Text style={styles.surveyButton}>Edit Survey Answers</Text>
        </TouchableOpacity>

    

        <View style={styles.boxcontainer}>
          <View style={styles.sherlockCat}>
                <Image 
                  source= {require('../assets/sherlockCat.png')}
                  style={styles.sherlockCatImage}/>
          </View>
            <TouchableOpacity 
              style={styles.changeaccesories}
            >
              <Text style={styles.accessoryButton}>Change Accessories</Text>
            </TouchableOpacity>
          </View>

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
    backgroundColor: 'white'
  },
  line: {
    top: H / 7,
    height: H / 120,
    backgroundColor: 'black',
  },
  Profile: {
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 5, 
    marginTop: 5, 
  },
  Name: {
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75
  },
  Username: {
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75
  },
  email: {
    fontSize: 18,
    textAlign: 'center',
    margin: H / 75,
  },
  password: {
    fontSize: 18,
    textAlign: 'center',
  },
  dateJoined: {
    fontSize: 18,
    textAlign: 'center',
    margin: H / 65
  },
  circle: {
    top:H / 25,
    width: H / 7,
    height: H / 7,
    alignSelf:'center',
    borderTopColor:'black',
    borderColor:'black',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingContainer: {
    position: 'absolute',
    left: W / 1.8, 
    top: H / 20,
  },
  editsurvey: {
    width: W / 1.2,
    height: H / 15,
    borderRadius: W / 10,
    backgroundColor: '#BBE0B7',
    alignSelf: 'center',
    justifyContent: 'center',                 
    alignContent: 'center',
    marginTop: H / 32,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  boxcontainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  sherlockCatImage: {
    resizeMode: 'contain',
    transform: [{scale: 0.5}],
    marginRight: W / 2.2, 
  },
  dalekCatImage: {
    resizeMode: 'contain',
    transform: [{scale: 1.72}],
  },
  changeaccesories: {
    width: W / 2.4,
    height: H / 7,
    borderRadius: 15,
    backgroundColor:'#7CA6E5',
    justifyContent: 'center',
    position: 'absolute',
    top: H / 8,
    right: W / 8.5, 
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  surveyButton: {
    alignSelf:'center', 
    fontSize: 25, 
    alignContent: 'center', 
    justifyContent: 'center'
  }, 
  settingsImage: {
    resizeMode: 'contain',
    transform: [{scale: 0.2}],
  },
  accessoryButton: {
    textAlign:'center',
    fontSize: 25,
    alignContent: 'center',
  },
});
