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
} from 'react-native'; 
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';

const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};
export default class Home extends Component<Props>{

  onPressFemale(){
   this.props.navigation.navigate('Duration')
  }

  render(){
  return(
      <View style ={{flex:1,flexDirection:'column', backgroundColor:'#D3D3D3'}}>
      <Image style={{width:windowW, height:200,}}
      source={require('./resources/homeimage.png')}
      />
      <Text style={{fontSize:18, color:'black', margin:10}}>Services in your locality</Text>
      
<TouchableOpacity onPress={() =>  this.props.navigation.navigate('Escorts')}>
         <View style = {{backgroundColor:'white',flexDirection:'row', justifyContent:'space-between'}}>
         <Image style={{height :50,width :50, resizeMode:'contain',margin:10}}
               source={require('./resources/female.png')} />

               <Text style = {{color :'black', fontSize:20, marginTop:20, marginRight:windowW/2-40}}>
               Female
               </Text>

               <Image style={{width:20, height:20, marginTop: 25, resizeMode:'contain',marginRight:10  }}
               source ={require('./resources/arrow.png')}/>
         </View>
         
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Duration')}>
                  <View style = {{backgroundColor:'white',flexDirection:'row', justifyContent:'space-between'}}>
         <Image style={{height :50,width :50, resizeMode:'contain',margin:10}}
               source={require('./resources/female.png')} />

               <Text style = {{color :'black', fontSize:20, marginTop:20,marginRight:windowW/2-40}}>
               Ladyboy
               </Text>

               <Image style={{width:20, height:20, marginTop: 25,marginRight:10, resizeMode:'contain'  }}
               source ={require('./resources/arrow.png')}/>
         </View>
</TouchableOpacity>
<TouchableOpacity onPress={() =>  this.props.navigation.navigate('Duration')}>
                  <View style = {{backgroundColor:'white',flexDirection:'row', justifyContent:'space-between'}}>
         <Image style={{height :50,width :50, resizeMode:'contain',margin:10}}
               source={require('./resources/female.png')} />

               <Text style = {{color :'black', fontSize:20, marginTop:20, marginRight:windowW/2-40}}>
               VIP Girls
               </Text>

               <Image style={{width:20, height:20, marginTop: 25, resizeMode:'contain',marginRight:10  }}
               source ={require('./resources/arrow.png')}/>
         </View>
         </TouchableOpacity>
      </View>
    );
  }
}