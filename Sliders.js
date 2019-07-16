import React, { Component } from 'react';
import { Alert,StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ImageSliderz from 'react-native-image-slideshow';
import SplashScreen from 'react-native-splash-screen'
import Button from 'react-native-button';
import styles from './Style.js'


const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;


export default class Sliders extends Component {
	static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    }
    }
     
 constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: require('./resources/images.png'),
        }, {
          url: require('./resources/launch_screen.png'),
        }, {
          url: require('./resources/im.png'),
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.state.dataSource.length -1) ? 0 : this.state.position + 1
        });
      }, 5000)
    });
    SplashScreen.hide();

  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

 _handlePress() {
 		this.props.navigation.navigate('Login')
 		
  }
  

 _handlePressRegister() {
    this.props.navigation.navigate('Register')
    
  }

  render() {
  	
    return (


    <View style={{width: '100%', height: '100%',flex: 1, flexDirection: 'column'}}>

    <ImageSliderz
        dataSource={this.state.dataSource}
        position={this.state.position}
        height='100%'
        arrowSize='0'
        onPositionChanged={position => this.setState({ position })} />

        <Text style={{marginTop:-200,color:'white', fontSize : 30, fontFamily:'poppinsMed'}}>{this.state.dataSource[this.state.position].title}</Text>
        <Text style={styles.welcomeText}>Hi, as title how can I do it.
I provided an image which has .PNG format and its background is transparent. And GLImage displayed background as black.</Text>

        <View style={{position:'absolute', bottom:10,flex:1, flexDirection:'row', }}>
        <TouchableOpacity style={styles.loginButton}>
        <Button style={{color: 'white'}}
        	color="transparent"
        	onPress={() => this._handlePress()}
        	title="Log In"
        >
        Log In</Button>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.regButton}>
        <Button
        	style={{color: 'white'}}
        	color="transparent"
        	onPress={() => this._handlePressRegister()}
        	title="Register"
        >
        Register</Button>
        </TouchableOpacity>
        </View>
    </View>
    );
  }
}