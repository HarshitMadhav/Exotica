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
import ProgressCircle from 'react-native-progress-circle'


const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};

export default class MyProfile extends Component<Props>{

constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      Alert.alert('Switch 1 is: ' + value);
   }

render(){
  return(
    <View style={{flex:1, backgroundColor:'white', flexDirection:'column'}}>
    
<View style ={{ height:100, backgroundColor:'black',alignItems:'center' }}>    
    <Text style={{fontSize:18, color:'white', margin:10}}>Jenny Luis</Text>
    <Image style={ styles.thumbnail } source={require('./resources/images.png')} />
         <Text style={{fontSize:18, color:'black', margin:10}}>GO OFFLINE</Text>
    
    </View>

      <Text style={{fontSize:16, color:'black', margin:10, alignSelf:'center', marginTop:130}}>YOUR WORK LOCATION</Text>
   <Text style={{fontSize:13, color:'black', margin:10,alignSelf:'center'}}>Display selected location here</Text>
       <Text style={{fontSize:13, color:'black', margin:10, alignSelf:'center'}}>Within 5 km work radius</Text>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>


      <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        </View>
    </View>
  )
}
}