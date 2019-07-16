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
  <View style={[styles.all]} />
);
const SecondRoute = () => (
  <View style={[styles.all]} />
);
 
const ThirdRoute = () => (
  <View style={[styles.all]} />
);
 
export default class EsJobs extends Component<Props>{

state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pending' },
      { key: 'second', title: 'Upcoming' },
      { key: 'third', title: 'Past' },      
    ],
  };


render(){
  return(
    <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: windowW }}
      />
    )
}
}