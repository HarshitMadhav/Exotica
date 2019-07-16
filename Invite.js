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
  Share
} from 'react-native'; 
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';


const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};

export default class Invite extends Component<Props>{

constructor(props){
    super(props);

  }

  _showResult(result){
    this.setState({result})
  }

  _shareMessage(){
      Share.share({message:'This is a simple shared message'}).then(this._showResult);
  }

  _fancyShareMessage(){
    Share.share({
      message:'This is a fancy shared message', url:'https://www.google.com/'
    },{
      tintColor:'green',
      dialogTitle:'Share this app via....'
    }
    ).then(this._showResult);
  }

render(){
  return(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#D3D3D3', alignItems:'center',}}>
    <Image style ={{marginTop:30,width:150, height:150}}
    source={require('./resources/in.png')}/>

    <Text style={{color:'black', fontSize:15,margin:10}}>SHARE YOUR INVITE CODE</Text>
    <Text style ={{color:'black', fontSize:18, margin:10}}>pr9800</Text>
    <Text style ={{color:'black', fontSize:13, margin:10}}>Invite your friends by sharing the above code.</Text>
    
        <Button
          style={{width:windowW-20, height:40, backgroundColor:'black',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._fancyShareMessage()}
          title="Invite Friends"
        >
        Invite Friends</Button>

    </View>
  )
}
}