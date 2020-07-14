import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
      container : {
        flex : 1,
        margin : 20,
        justifyContent : 'flex-start',
        flexDirection : 'column',
        alignItems : 'stretch',
        backgroundColor : '#121212'
    },
    dropDownStyle :{
       backgroundColor : '#121212',
       marginTop : 20,

    },
    titleStyle : {
      alignSelf : 'center',
      marginTop : 20,
      fontSize : 30,
      fontWeight : 'bold',
      color : '#fff'
    },
    input : {
       marginTop : 20 ,
     },
     btnStyle : {
       alignSelf : 'flex-end',
       
       marginTop : 20
     }
});
