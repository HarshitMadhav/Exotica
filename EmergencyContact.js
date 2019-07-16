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

export default class EmergencyContact extends Component<Props>{

render(){
  return(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#D3D3D3', alignItems:'center',}}>
    <Image style ={{marginTop:30,width:150, height:150}}
    source={require('./resources/em.png')}/>

    <Text style={{color:'black', fontSize:15,margin:10}}>Make Your Travel Safe</Text>
    <Text style ={{color:'black', fontSize:18, margin:10}}>Send alert to your friends/family members
    in case of an emergency.</Text>
    <Text style ={{color:'black', fontSize:13, margin:10}}>Please add them to your emergency contacts.</Text>
    
        <Text style ={{color:'black', fontSize:13, margin:10, fontWeight:'bold'}}>You can add upto 5 contacts</Text>
    
        <Button
          style={{width:windowW-20, height:40, backgroundColor:'black',color: 'white',padding :5 ,margin:10  }}
          title="Add Contacts"
        >
        Add Contacts</Button>

    </View>
  )
}
}