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
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};

const FirstRoute = () => (
  <View style={[styles.all]}>
  
  <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:15, color:'black', margin:10}}>Booking#29934746</Text>
      <View style={{backgroundColor:'white',margin:10, justifyContent:'flex-start'}}>
        <Text style={{fontSize:10, color:'grey',alignSelf:'flex-end'}}>Fri,Dec01,2017 8:00PM</Text>
        <Text style={{fontSize:13, color:'black', alignSelf:'center'}}>Female-2 hours</Text>
        <Image style={{width:25, height:25}}
          source={require('./resources/fb.png')}
        />
        <Text style ={{fontSize:13, color:'grey'}}>Job Location</Text>
        <Text style ={{fontSize:13, color:'black'}}>Home</Text>
        <Text style ={{fontSize:13, color:'black'}}>G-8, Near Oxford park</Text>
        <Text style ={{fontSize:13, color:'black'}}>Prahlad Nagar</Text>      
        
        <Button
          style={{ height:40, backgroundColor:'black',color: 'white',padding :5 ,margin:10  }}
          title="Cancel Booking"
        >
        Cancel Booking</Button>

      </View>

  </View>

   </View>
);
const SecondRoute = () => (
  <View style={[styles.all]}>
    <Text>Hello</Text>
  </View>
);
 

export default class ClientJobs extends Component<Props>{

state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Past' },
      { key: 'second', title: 'Upcoming' },
    ],
  };


render(){
  return(
    <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })} 
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: windowW, height:40 }}
        renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{backgroundColor: 'black'}}
                       
                        tabStyle={{color:'black', backgroundColor:'white'}}
                        labelStyle={{color:'black'}}
                        style={{backgroundColor:'white',color:'white'}}
                    />
                  }
      />
    )
}
}