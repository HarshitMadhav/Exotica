import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native'; 
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { TextField } from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'



const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height


export default class BookNow extends Component{

_handlePressSave(){
    this.props.navigation.navigate('BookingDetails')
}

render(){
  return(
    <View style={styles.all}>
    <KeyboardAwareScrollView>
    <Text style={{fontSize:18, margin:10}}>Area of Service</Text>
    <Text style={{fontSize:18, margin:10, backgroundColor:'white'}}>Service Location will be displayed here </Text>
    <Text style={{fontSize:18, margin:10}}>Service Address</Text>
    
    <TextInput style={{height:50,fontSize : 15, borderBottomColor: '#830509',borderBottomWidth: 1}}
     placeholder="Building/House/Flat No."/>
        <TextInput style={{height:50,fontSize : 15, borderBottomColor: '#830509',borderBottomWidth: 1}}
        placeholder="Landmark(e.g hospital, park etc. )"/>
            <TextInput style={{height:50,fontSize : 15, borderBottomColor: '#830509',borderBottomWidth: 1}}
            placeholder="Nickname (Optional)"/>
    
    <Button
          style={{width:windowW-20, height:40, backgroundColor:'#830509',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._handlePressSave()}
          title="Save"
        >
        Save</Button>
</KeyboardAwareScrollView>
    </View>
  )
}
}