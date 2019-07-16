import { createStackNavigator ,createAppContainer ,createDrawerNavigator} from 'react-navigation';

import Home from './Home.js';
import Login from './Login.js';
import Invite from './Invite.js';
import Drawer from './Drawer.js';
import EsJobs from './EsJobs.js';
import Escorts from './Escorts.js';
import BookNow from './BookNow.js';
import Drawers from './Drawers.js';
import Sliders from './Sliders.js';
import Support from './Support.js';
import Feedback from './Feedback.js';
import Register from './Register.js';
import Duration from './Duration.js';
import MyProfile from './MyProfile.js';
import BookLater from './BookLater.js';
import ClientJobs from './ClientJobs.js';
import UserProfile from './UserProfile.js';
import HeadLocation from './HeadLocation.js';
import BookingDetails from './BookingDetails.js';
import ManageServices from './ManageServices.js';
import EditUserProfile from './EditUserProfile.js';
import EmergencyContact from './EmergencyContact.js';


import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,Image, Text, View ,Button} from 'react-native';


const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home ,
    
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: 'black',
     headerTintColor: '#ffffff',
     tintColor: {
     color: '#ffffff'
    },
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  }

},{
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: 300
});



const DrawerNavigators = createDrawerNavigator({
    Home:{
        screen: Home ,
    
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: 'black',
     headerTintColor: '#ffffff',
     tintColor: {
     color: '#ffffff'
    },
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  }

},{
    initialRouteName: 'Home',
    contentComponent: Drawers,
    drawerWidth: 300
});


const StackNavigator = createStackNavigator({
   Sliders: { screen: Sliders },
Login: { screen: Login ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Login',
      headerStyle: {
      backgroundColor: 'black'

    },

  }),
  },

  DrawerNavigator: {
    screen: DrawerNavigator,
   
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#ffffff',
      headerStyle: {
      backgroundColor: 'black',
      title: 'Send Enquiry',
    },
    headerLeft: 
    <View style={{flex:1, flexDirection:'row'}}>
    <TouchableOpacity onPress={() =>
     navigation.toggleDrawer()
 }> 
    <Image style = {{margin :15 ,height :30 ,width :30}}
           source={require('./resources/menu.png')} />
    
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('HeadLocation')}>
    <Text style={{width: 200, fontSize:15,padding:10, color:'white',marginTop:8}}>Choose location</Text>
    </TouchableOpacity>
</View>
    ,
 
  }),
  },

   

  DrawerNavigators: {
    screen: DrawerNavigators,
   
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#ffffff',
      headerStyle: {
      backgroundColor: 'black',
      title: 'Send Enquiry',
    },
    headerLeft: 
    <View style={{flex:1, flexDirection:'row'}}>
    <TouchableOpacity onPress={() =>
     navigation.toggleDrawer()
 }> 
    <Image style = {{margin :15 ,height :30 ,width :30}}
           source={require('./resources/menu.png')} />
    
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('HeadLocation')}>
    <Text style={{width: 200, fontSize:15,padding:10, color:'white',marginTop:8}}>Choose location</Text>
    </TouchableOpacity>
</View>
    ,
 
  }),
  },

  HeadLocation: { screen: HeadLocation ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Select Location',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },

	Register: { screen: Register ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Register',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  Duration: { screen: Duration ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Services in your location',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },
    

  BookNow: { screen: BookNow ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Add Location Address',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  BookLater: { screen: BookLater ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Choose Booking Date',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  BookingDetails: { screen: BookingDetails ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Booking Details',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },

    MyProfile: { screen: MyProfile ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'My Profile',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },

  UserProfile: { screen: UserProfile ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'My Profile',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  EditUserProfile: { screen: EditUserProfile ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Edit Profile',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  ManageServices: { screen: ManageServices ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Manage Services',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  Invite: { screen: Invite ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Invite Friends',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  EmergencyContact: { screen: EmergencyContact ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Emergency Contact',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },

  Support: { screen: Support,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Support',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  Feedback: { screen: Feedback,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Feedback',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  ClientJobs: { screen: ClientJobs,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Your Jobs',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },


  EsJobs: { screen: EsJobs,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Your Jobs',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },

    Escorts: { screen: Escorts,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: 'white',
     title: 'Escorts',
      headerStyle: {
      backgroundColor: 'black'

    }
 
  }),
  },
});


export default createAppContainer(StackNavigator);