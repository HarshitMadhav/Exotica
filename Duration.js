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
import Button from 'react-native-button'
import { DrawerActions } from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'



const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height


export default class Duration extends Component{

_renderItem = ({item}) => (
    <View style={styles.listItem}>
    <Image style={{width:40,height:40, resizeMode:'contain', marginTop:6, marginLeft:10}}
      source={require('./resources/radio_active.png')}
    />
          <Text style={{fontSize:20, margin:10}}>{item.key1}</Text>
    </View>
  );

_handlePressBookNow(){
 this.props.navigation.navigate('BookNow')
}

_handlePressBookLater(){
  this.props.navigation.navigate('BookLater')
}

  render(){
  return(
      <View style ={{flex:1,flexDirection:'column', backgroundColor:'#D3D3D3'}}>
      <Text style={{margin:10, fontSize:15}}>Select Service</Text>
    <FlatList
          data={[
            {key1: '2 Hours', key2: '4 Hours', key3:'10 Hours', key4:'12 Hours', key5:'24 Hours'},

          ]}
          renderItem={ this._renderItem}
        />


<View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Button
          style={{width:windowW/2-20, height:40, backgroundColor:'#830509',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._handlePressBookNow()}
          title="Book Now"
        >
        Book Now</Button>

    <Button
          style={{width:windowW/2-20, height:40, backgroundColor:'#830509',color: 'white',padding :5 ,margin:10  }}
          onPress={() => this._handlePressBookLater()}
          title="Book Later"
        >
        Book Later</Button>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 22
  },
  listItem: {
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'white'
  }
})