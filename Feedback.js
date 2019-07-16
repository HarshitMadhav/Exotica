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
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'


const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

type props={};

export default class Feedback extends Component<Props>{

render(){
  return(
    <View style={styles.all}>

    <View style={{flexDirection:'row', margin:10, backgroundColor:'white'}}>
        <Image style={styles.thumbnail}
        source={require('./resources/images.png')}/>
          <View style={{flexDirection:'column', margin:10, backgroundColor:'white'}}>
            <Text style={{fontSize:20, color:'black'}}>David Sam</Text>
          <View style={{ flexDirection: 'row',}}>
          
          <StarRatingBar
        score={2.0}
        readOnly={false}
        continuous={true}
        starStyle={{
            width: 15,
            height: 15,
        }}
        emptyStarImage={<Image style={{width: 15, height: 15}} source={require('./resources/unfillstar.png')} />}
        filledStarImage={<Image style={{width: 15, height: 15}} source={require('./resources/fillstar.png')} />}
        scoreTextStyle={{color:'#ff6666'}}
          />
            </View>
          </View>

    </View>
    
    </View>
  )
}
}