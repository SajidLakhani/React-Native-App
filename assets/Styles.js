import {StyleSheet} from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default StyleSheet.create({

container: {
    backgroundColor: '#fff', 
    flex:1,
    paddingHorizontal:40,
    paddingVertical:60,

},
h1: {
    color:'#ba2e63',
    fontSize: 40
},

square:{
    borderRadius:15,
    width: 80,
    height: 70,
    marginBottom:20,
    backgroundColor: "#6c022a",
    shadowColor: '#837070',
    shadowOffset: {width: 10,  height: 10},
    shadowOpacity: 10,
    shadowRadius: 10,

},
para : {
    fontSize:17,
    color:'#a36578',
    marginVertical:5,
    lineHeight:25

},
loginBtn:{
    backgroundColor: '#6c022a',
    padding: 8,
    borderRadius: 10,
    marginTop: 150,
},
title : {
    textAlign:'center',
    fontSize:16,
    color:'#fff'
},
signupBtn:{
    backgroundColor: '#6c022a',
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
},

loginContainer: {
    backgroundColor: '#fff', 
    flex:1,
    padding: 20
},
input: {
    width:'100%',
    height: 'auto',
    marginVertical:5,
    borderWidth: 1,
    padding: 7,
    borderRadius:10,
    color:'#6c022a',
    borderColor:'#6c022a'
  },

  loginh1: {
    color:'#ba2e63',
    textAlign:'center',
    fontSize: 40,
    marginTop: 20,
    marginBottom:30
},

cross: {
    color:'#ba2e63',
    textAlign:'left',
    fontSize: 18,
    marginTop: 20,
    marginBottom:10
},

switchContainer:{
      marginHorizontal:5,
},

switchPara:{
    fontSize:17,
    marginHorizontal:5,
    marginTop:10,
    color:'#a36578'
},
loginBtn2:{
    backgroundColor: '#6c022a',
    padding: 10,
    borderRadius: 10,
},

confirm:{
    fontSize:12,
    color:'#a36578',
    marginVertical:10,
    textAlign:'center'
},
span:{
    color:'#ba2e63'
},
Pickercontainer: {
    flex: 1,
    marginVertical:5
  },
  dropdown:{
    height:'auto',
     width: '50%',
      padding:6,
      borderRadius:10,
      backgroundColor:'#fff',
      color: "#6c022a",
      borderWidth:1,
      borderColor:'#6c022a',
  },
  left:{
      marginLeft:3
  },
  right:{
      marginRight:3
  },

  head:{
      textAlign:'center',
      fontSize:30,
      color:'#ba2e63',
      marginTop:200
  },

  paracCongrats:{
      textAlign:'center',
    fontSize:14,
    color:'#a36578',
    marginVertical:40,
    lineHeight:25
  },

  continueBtn:{
      width:"100%",
      backgroundColor: '#6c022a',
      padding: 10,
      borderRadius: 10,

  }

});