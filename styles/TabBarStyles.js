import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    bottomTabContainer: {
        position: 'absolute',
        bottom: (windowWidth / 1000),
        alignItems: 'flex-start',
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        width: windowWidth,
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

      icon: {
        resizeMode: 'contain',
        borderRadius: 10,
      },

      horizontalRule: {
        position: 'absolute',
        bottom: (windowHeight / 13),
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: windowWidth,
    },

    circleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: Colors.white,
      width: windowWidth / 2,
      marginRight: 10,
      marginTop: 10,
    },

    fullScreenCircleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: Colors.white,
      width: windowWidth,
      marginRight: 10,
      marginTop: 10,
      position: 'absolute',
      right: 24,
      top: 0
    },
  
    circle: {
      width: (windowWidth / 8),
      height: (windowWidth / 8),
      borderRadius: (windowWidth / 16),
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: (windowWidth / 90),
      marginTop: (windowHeight / 200),
    },
});