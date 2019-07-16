import {StyleSheet, Platform,Dimensions} from 'react-native';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default styles = StyleSheet.create({
  authimages:{
    height:50,
    width:50,
    marginTop:20,
    marginLeft:15,
    marginRight:15
  },

  all:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#D3D3D3'
  },
  
  input:{
    width:100,
    height:50,
  },
  container:{
    fontWeight:'bold',
    fontSize:15, 
    marginLeft:10,
  },
  container2:{
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    marginTop:10
  },

   loginButton:{
    width: windowW/2-10,
    height: 40,
    padding:5,
    marginLeft: 5,
  marginTop:-10,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: '#fff'
  },

  regButton:{
    width: windowW/2-10,
    height:40,
    padding:5,
    marginTop:windowH-200,
  marginLeft: 5,
  marginTop:-10,
  marginRight:5,
  marginBottom:10,
  borderRadius:5,
  borderWidth: 1,
  borderColor: '#fff'
  },

  welcomeText:{
    padding:10,
    position:'absolute',
    bottom:100,
    color:'white',
    fontSize : 20,
    fontFamily:'poppins',
    textAlign:'center'
  },
   drawericon: {
    borderLeftWidth: 1,
    width: 20,
    height: 20,
    marginLeft : 8 ,
    marginTop : 10,
    resizeMode:'contain'

  },
      menuItem:{
        padding: 10,
        flexDirection:'row',
        borderWidth: 0.5,
        borderColor: 'black'
    },

   drawerTexts: {
    
    width: 180,
    height: 20,
    marginLeft : 35 ,
    marginTop : -18,
    

  },
drawerText :{
      color : 'black',
      marginLeft : 10,
      marginTop : 6,
    
      fontSize: 18,
  },

  headertop :{

    width : 300,
     height : 110,
    backgroundColor : 'black',

  } ,
  headertext:{

    fontSize:18,
    color:'white',
    marginTop:-80,
    marginLeft:130
  },

  thumbnail: {
    width: 100,
    height: 100,
     borderRadius: 50,
     marginLeft : 10,

  },

    thumbnails: {
    width: 60,
    height: 60,
     borderRadius: 50,
     marginLeft : 10,

  },
   
});