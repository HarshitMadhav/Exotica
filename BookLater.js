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
import CalendarStrip from "react-native-calendar-strip";



const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height


export default class BookLater extends Component{

render(){
  return(
    <View style={styles.all}>
    <Text style={{fontSize:18, margin:10}}>Service Address</Text>

    <Text style ={{fontSize:18, margin:10, backgroundColor:'white'}}>Display selected booking address here</Text>


      <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 300, highlightColor: 'black'}}
                    style={{height:120, paddingTop: 15, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'black'}}
                    calendarColor={'white'}
                    highlightDateNameStyle={{color:'white'}}
                    highlightDateNumberStyle  ={{color:'white'}}
                    dateNumberStyle={{color: 'black'}}
                    dateNameStyle={{color: 'black'}}
                    iconLeft={require('./resources/prev.png')}
                    iconRight={require('./resources/arrow.png')}
                    iconContainer={{flex: 0.1}}
                />
    <Button
          style={{width:windowW-20, height:40, backgroundColor:'black',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._handlePressContinue()}
          title="Continue"
        >
        Continue</Button>

    </View>
  )
}
}