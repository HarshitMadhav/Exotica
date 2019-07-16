import React, {Component} from 'react';
import {NavigationActions,StackActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View ,AsyncStorage,Image,TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './Style.js'


class Drawer extends Component {

 constructor(props){
    super(props)
 const { navigation } = this.props;
    this.state = {
      my: '',
      
     
    }
}


  render () {
    
    return (
      <View style={{flex:1}}>
        <ScrollView>
  
       <View  style={styles.headertop}>
          <Image style={ styles.thumbnail } source={require('./resources/images.png')} />
          <Text style={styles.headertext}>Username</Text> 
          <Text style={{fontSize:13, color:'white',marginTop:40, marginLeft:155}}>Wallet Balance:</Text>
          <Text style={{fontSize:13, color:'white', marginTop:-20, marginLeft:260}}>$0.00</Text>
        </View>

<TouchableOpacity onPress={() =>  this.props.navigation.navigate('MyProfile')}>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/prof.png')} />
                  <Text style = {styles.drawerText} >
          My Profile
         </Text>
            </View>
            </TouchableOpacity>
<TouchableOpacity onPress={() =>  this.props.navigation.navigate('ClientJobs')}>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/loc.png')} />
                  <Text style = {styles.drawerText} >
          Your Jobs
         </Text>
            </View>
</TouchableOpacity>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/wallet.png')} />
                  <Text style = {styles.drawerText} >
          My Wallet
         </Text>
            </View>
           
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/clock.png')} />
                  <Text style = {styles.drawerText} >
          On Going Job
         </Text>
            </View>

<TouchableOpacity onPress={() =>  this.props.navigation.navigate('EmergencyContact')}>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/dire.png')} />
                  <Text style = {styles.drawerText} >
          Emergency Contact
         </Text>
            </View>
</TouchableOpacity>
<TouchableOpacity onPress={() =>  this.props.navigation.navigate('Invite')}>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/msg.png')} />
                  <Text style = {styles.drawerText} >
          Invite Friends
         </Text>
            </View>
  </TouchableOpacity>
<TouchableOpacity onPress={() =>  this.props.navigation.navigate('Support')}>
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./resources/sup.png')} />
                  <Text style = {styles.drawerText} >
          Support
         </Text>
            </View>
  </TouchableOpacity>
        </ScrollView>

            <View style={{width : 300, height : 50,    backgroundColor : 'black',flexDirection:'row'}}>
            <Image style={{width:30, height:30, margin:10}}
              source={require('./resources/logout.png')}
            />
            <Text style={{color:'white', fontSize:18, margin:10}}>Logout</Text>
            </View>
      </View>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;
