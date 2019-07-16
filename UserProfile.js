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

export default class UserProfile extends Component<Props>{


componentDidMount(){
  this.timer = setInterval(()=> this.getMovies(), 1000)
 }

 getMovies(){

 fetch('https://facebook.github.io/react-native/movies.json', {method: "GET"})
  .then((response) => response.json())
  .then((responseData) =>
  {
    //set your data here
     //Alert.alert(JSON.stringify(responseData));
  })
  .catch((error) => {
      //Alert.alert(JSON.stringify(error));
  });

}

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
    <View style={styles.all}>
    
<View style ={{ height:100, backgroundColor:'black',alignItems:'center' }}>    
    <Image style={ styles.thumbnail } source={require('./resources/images.png')} />
  <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('EditUserProfile')}>
    <Image style={{width: 35,height: 35,borderRadius: 50,position:'absolute', right:windowW/2-60,}}
      source ={require('./resources/edit.png')}/>
     </TouchableWithoutFeedback>
    </View>
    <View style={{flexDirection:'column', margin:10}}>
    <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'column'}}>
    <Text style={{fontSize:15, color:'#830509'}}>First Name</Text>
    <Text style={{fontSize:15, color:'black'}}>David</Text>
    </View>
<View style={{flexDirection:'column'}}>
    <Text style={{fontSize:15, color:'#830509'}}>Last Name</Text>
    <Text style={{fontSize:15, color:'black'}}>Sam</Text>
    </View>
    </View>
        <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Email</Text>
    <Text style={{fontSize:15, color:'black'}}>david@gmail.com</Text>
        <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Mobile</Text>
    <Text style={{fontSize:15, color:'black'}}>+8888888888</Text>
            <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Language</Text>
    <Text style={{fontSize:15, color:'black'}}>English</Text>
            <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Currency</Text>
    <Text style={{fontSize:15, color:'black'}}>USD</Text>
   </View>
    </View>
  )
}
}