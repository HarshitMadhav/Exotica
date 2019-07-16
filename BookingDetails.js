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


export default class BookingDetails extends Component{

render(){
  return(
    <View style={styles.all}>
    <KeyboardAwareScrollView>
    <View style={{backgroundColor:'white',margin:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:18, margin:10, fontWeight: 'bold'}}>2 hours</Text>
        <Text style={{fontSize:18, margin:10}}>$175.00</Text>
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:18, margin:10, fontWeight: 'bold'}}>Escort</Text>
        <Text style={{fontSize:18, margin:10}}>Jenny Luis</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:18, margin:10, fontWeight: 'bold'}}>Booking Date</Text>
        <Text style={{fontSize:18, margin:10}}>01 Dec 2017</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:18, margin:10, fontWeight: 'bold'}}>Booking Time</Text>
        <Text style={{fontSize:18, margin:10}}>Now</Text>
        </View>
    </View>
    <View style={{backgroundColor:'white', margin:10}}>
    <Text style={{fontSize:15, margin:10, fontWeight: 'bold'}}>Add Special Instructions for escort below.</Text>
    <TextInput style={{margin:10, borderWidth:2,borderRadius: 15,height:80,fontSize:15,borderStyle: 'solid',}}
    />
    </View>
    <Button
          style={{width:windowW-20, height:40, backgroundColor:'#830509',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._handlePressContinue()}
          title="Continue"
        >
        Continue</Button>
</KeyboardAwareScrollView>
    </View>
  )
}
}