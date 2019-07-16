import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage, Text, View ,NetInfo ,Image,ScrollView,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import Button from 'react-native-button'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


type Props = {};
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default class App extends Component<Props> {

  state = {
    fname: '',
    lname:'',
    email:'',
    pass:'',
    country:'',
    mobile:'',
  };

  _handlePressSignup=()=>{

            this.props.navigation.navigate('DrawerNavigators')
  }

  render() {
            let { fname,lname,email,pass,country,mobile } = this.state;
    return (

          <View style={{flex:1, flexDirection:'column'}}>
                <KeyboardAwareScrollView style ={{ height:windowH}}>

     <Text style={{marginTop:10,fontSize:15, textAlign:'center', marginTop:20}}>REGISTER WITH SOCIAL ACCOUNT</Text>
     <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'flex-start'}}>
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
<View style={{marginLeft:10, marginRight:10,flexDirection:'column'}}>
                  <TextField
        label='First Name'
        value={fname}
        onChangeText={ (fname) => this.setState({ fname }) }
      />
              <TextField
        label='Last Name'
        value={lname}
        onChangeText={ (lname) => this.setState({ lname }) }
      />
              <TextField
        label='Email'
        value={email}
        onChangeText={ (email) => this.setState({ email }) }
      />
              <TextField
        label='Password'
        value={pass}
        onChangeText={ (pass) => this.setState({ pass }) }
      />

              <TextField
        label='Country Code'
        value={country}
        onChangeText={ (Country) => this.setState({ country }) }
      />
              <TextField 
        label='Mobile'
        value={mobile}
        onChangeText={ (mobile) => this.setState({ mobile }) }
      />

          <Button
          style={{ padding:5,height:40, backgroundColor:'black',color: 'white'}}
          onPress={() => this._handlePressSignup()}
          title="SIGN UP"
        >Sign Up </Button>

      </View>

        <Text style={{fontSize:15, textAlign:'center', marginTop:10}}>Already have an account?</Text>

 <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Login')}>
        <Text style={{fontSize:15,marginTop:10, textAlign:'center'}}>Login here</Text>
        </TouchableOpacity>
</View>
</KeyboardAwareScrollView>
</View>     
    );
  }
}
