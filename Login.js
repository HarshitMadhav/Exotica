import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage, Text, View ,NetInfo ,ScrollView,Image,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';


type Props = {};
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height



export default class App extends Component<Props> {
state = {
    phone: '',
    password:'',
  };
 


     _handlePressLogin() {
        this.props.navigation.navigate('DrawerNavigator')
  }
  
  _noAccount(){
    this.props.navigation.navigate('Register')
  }

  render() {
        let { phone,password } = this.state;
    return (
    	<View style={{flex:1, flexDirection:'column'}}>
    	<ScrollView style ={{width :windowW, height:windowH}}>
     <Text style={{marginTop:10,fontSize:15, textAlign:'center'}}>LOG IN WITH SOCIAL ACCOUNT</Text>
     <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems:'flex-start'}}>
     	<Image style={styles.authimages}
     	  source={require('./resources/fb.png')}/>
        
        <Image style={styles.authimages}
            source={require('./resources/twitter.png')}/>
        
        <Image style={styles.authimages}
            source={require('./resources/gplus.png')}/>
     </View>
     <View style={{marginTop:20}}>
        <Image style ={{width:windowW}}
        source={require('./resources/or.png')}/>
        <View style={{margin: 20,marginTop: 24}}>
        <TextField
        label='Phone number'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
        <TextField
        label='Password'
        value={password}
        onChangeText={ (password) => this.setState({ password }) }
      />
</View>
		<Button
        	style={{width:window.width-20, height:40, backgroundColor:'black',color: 'white',padding :5 ,margin:10  }}
        	onPress={() => this._handlePressLogin()}
        	title="LOG IN"
        >
        LOG IN</Button>

        <TouchableOpacity>
            <Text style={styles.container2}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this._noAccount('Register')}>
        <Text style={styles.container2}>Dont have an account?</Text>
        </TouchableOpacity>
     </View>
     </ScrollView>
     </View>
    );
  }
}
