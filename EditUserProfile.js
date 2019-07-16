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
  TouchableWithoutFeedback,
} from 'react-native'; 
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import ImagePicker from 'react-native-image-picker';



const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

type props={};

export default class EditUserProfile extends Component<Props>{



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

changeImage=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else {
    const source = { uri: response.uri };

    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source,
    });
  }
});
}
render(){
  return(
    <View style={styles.all}>
    
<View style ={{ height:100, backgroundColor:'black',alignItems:'center' }}>    
    <Image style={ styles.thumbnail } source={require('./resources/images.png')} />
    <TouchableWithoutFeedback onPress={() => this.changeImage()}>
    <Image style={{width: 35,height: 35,borderRadius: 50,position:'absolute', right:windowW/2-60,}}
      source ={require('./resources/edit.png')}/>
     </TouchableWithoutFeedback>
    </View>
    <View style={{flexDirection:'column', margin:10}}>
    <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'column'}}>
    <Text style={{fontSize:15, color:'#830509'}}>First Name</Text>
    <TextInput style={{fontSize:15, color:'black'}}>David</TextInput>
    </View>
<View style={{flexDirection:'column'}}>
    <Text style={{fontSize:15, color:'#830509'}}>Last Name</Text>
    <TextInput style={{fontSize:15, color:'black'}}>Sam</TextInput>
    </View>
    </View>
        <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Email</Text>
    <TextInput style={{fontSize:15, color:'black'}}>david@gmail.com</TextInput>
        <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Mobile</Text>
    <TextInput style={{fontSize:15, color:'black'}}>+8888888888</TextInput>
            <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Language</Text>
    <TextInput style={{fontSize:15, color:'black'}}>English</TextInput>
            <Text style={{fontSize:15, color:'#830509', marginTop:10}}>Currency</Text>
    <TextInput style={{fontSize:15, color:'black'}}>USD</TextInput>
   </View>
    </View>
  )
}
}