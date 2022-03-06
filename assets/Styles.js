import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    backgroundColor: '#1b1b1b', 
    flex:1,
    paddingHorizontal:40,
    paddingVertical:60

},
h1: {
    color:'#fff',
    fontSize: 40
},

square:{
    borderRadius:15,
    width: 80,
    height: 70,
    marginBottom:20,

    backgroundColor: "#d95a4b",
    shadowColor: '#837070',
    shadowOffset: {width: 10,  height: 10},
    shadowOpacity: 10,
    shadowRadius: 10,

},
para : {
    fontSize:17,
    color:'#fff',
    marginVertical:5,
    lineHeight:25

},
loginBtn:{
    backgroundColor: '#d95a4b',
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
    backgroundColor: '#d95a4b',
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
},

});