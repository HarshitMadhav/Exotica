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

export default class Escorts extends Component<Props>{

render(){
  return(
    <View style={styles.all}> 
    </View>
  )
}
}