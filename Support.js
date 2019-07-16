import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  AsyncStorage,
  ScrollView,
  Dimensions,
  TextInput,
  Switch,
} from 'react-native'; 
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';


const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};

export default class Support extends Component<Props>{

render(){
  return(
    <View style={styles.all}>
    <View style={{flexDirection:'row', margin:10, backgroundColor:'white', bottomBorderWidth:1}}>
      <Image style={{width:30, height:30, margin:10}}
      source={require('./resources/hand.png')}/>
      <Text style={{fontSize:15, color:'black',marginTop:10,marginBottom:10}}>About Us</Text>
    </View>

    <View style={{flexDirection:'row', margin:10, backgroundColor:'white', bottomBorderWidth:1}}>
      <Image style={{width:30, height:30, margin:10}}
      source={require('./resources/lock.png')}/>
      <Text style={{fontSize:15, color:'black',marginTop:10,marginBottom:10}}>Privacy Policy</Text>
    </View>
  
      <View style={{flexDirection:'row', margin:10, backgroundColor:'white', bottomBorderWidth:1}}>
      <Image style={{width:30, height:30, margin:10}}
      source={require('./resources/list.png')}/>
      <Text style={{fontSize:15, color:'black',marginTop:10,marginBottom:10}}>Terms and Conditions</Text>
    </View>
    
        <View style={{flexDirection:'row', margin:10, backgroundColor:'white', bottomBorderWidth:1}}>
      <Image style={{width:30, height:30, margin:10}}
      source={require('./resources/call.png')}/>
      <Text style={{fontSize:15, color:'black',marginTop:10,marginBottom:10}}>Contact Us</Text>
    </View>

        <View style={{flexDirection:'row', margin:10, backgroundColor:'white', bottomBorderWidth:1}}>
      <Image style={{width:30, height:30, margin:10}}
      source={require('./resources/i.png')}/>
      <Text style={{fontSize:15, color:'black',marginTop:10,marginBottom:10}}>FAQ</Text>
    </View>

    </View>
  )
}
}