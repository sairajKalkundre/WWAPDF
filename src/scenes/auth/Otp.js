import React , {useState, useEffect} from 'react';
import {StyleSheet, View,Text,YellowBox} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth'
import { Provider} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from '@react-navigation/native';
import {ProgressDialog} from '_atoms';

  const OTP = ({navigation}) => {
    YellowBox.ignoreWarnings(['Clipboard'])
    const [phoneNo,setphoneNo] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [phoneValidate , setphoneValidate] = useState(false);
    const [otpValidate , setotpValidate] = useState(false);
    const [progress , setProgress] = useState(false);
    const [progressLabel , setpLabel] = useState('');
    const [otpmessage , setotpmessage] = useState('');
    const [second , setSecond] = useState(null);

    useEffect(() => {
        if(second == 0) {
          setProgress(false)
        } 

        const interval = setInterval(() => {
            setSecond(second - 1);
        } , 1000);

        return () => clearInterval(interval);
    },[second]);

    const confirmUser = () => {
          auth().onAuthStateChanged ((user) => {
          if(user) {
            navigation.dispatch(
              StackActions.replace('Profile')
            );
          }
      })
    }
    const phoneNoValidation = () => {
          var len = phoneNo.length;
          if(len == 10){
              setphoneValidate(false)
              setProgress(true)
              setSecond(15)
              setpLabel('Generating OTP')
              signInWithPhoneNumber('+91 '+ phoneNo)
          }else{
              setphoneValidate(true)
          }
    }
      // Handle the button press
      async function signInWithPhoneNumber(phoneNumber) {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
            console.log(confirm) ;
            setProgress(false)
            setSecond(null);
            confirmUser();
      }

      const otpValidation = () => {
          var otpLen = code.length;
          if(otpLen == 6){
              setotpValidate(false);
              setProgress(true)
              setSecond(15)
              setpLabel('Validating OTP')
              confirmCode();
          }
          else{
            setotpValidate(true);
            setotpmessage('OTP should not be empty')
          }
      }


      async function confirmCode() {
        console.log(code);
        try {
          await confirm.confirm(code)
                        .then(user => {
                            console.log(user.uid)
                            setProgress(false);
                            navigation.dispatch(
                              StackActions.replace('Profile')
                            );
                          })
                          
          } catch (error) {
            setProgress(false);
            setotpValidate(true);
            setotpmessage(error.message);
          }
        }
    
    return (
      <Provider>
      <View style = {styles.container}>
             <ProgressDialog time = {second} name = {progressLabel} visible = {progress}/>
                      <Text style = {styles.textStyle}>SIGN-UP</Text>
                      <TextInput 
                        style = {{alignSelf : 'stretch' , marginLeft : 20,marginRight : 20 ,  fontSize : 25 , fontWeight : 'bold'}}
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#121212'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = {'+91 - ' + phoneNo}
                        keyboardType = 'numeric'
                        maxLength = {10}
                        onChangeText = {text => setphoneNo(text)}/>
                        <HelperText type = 'error' style = {{fontSize : 15 , color : 'red' , marginLeft : 20 }} visible = {phoneValidate}>
                          Invalid Phone Number
                        </HelperText>

                      <OTPInputView 
                        style = {{height : 40 ,alignSelf : 'stretch' ,marginBottom : 20 , marginLeft : 40,marginRight : 40,marginTop : 10}}
                        codeInputFieldStyle = {styles.underLineSB}
                        codeInputHighlightStyle = {styles.underLineStyleHighLighted}
                        pinCount = {6}
                        onCodeChanged = {code => setCode(code)}
                        onCodeFilled = {(code => {console.log(`code is ${code}`)})}/>
                       <HelperText type = 'error' style = {{fontSize : 15 , color : 'red' , marginLeft : 30 }} visible = {otpValidate}>
                         {otpmessage}
                        </HelperText>

                        <View>
                          <TouchableOpacity style = {{marginTop : 30 }}  onPress = {() => phoneNoValidation()}>
                                  <Text style = {{color : '#47B1DC' , fontSize : 20 , alignSelf : 'center'}}>Generate OTP</Text>
                          </TouchableOpacity>
                        </View>

                        <View>
                          <TouchableOpacity style = {{marginTop : 30 }} onPress = {() => otpValidation()}>
                                  <Text style = {{color : '#47B1DC' , fontSize : 20 , alignSelf : 'center'}}>Confirm</Text>
                          </TouchableOpacity>
                        </View>
     </View>
     </Provider>
    );
  };

  const styles = StyleSheet.create({
      textStyle : {
        alignSelf : 'center',
        fontWeight : 'bold',
        color : '#b1ff32',
        fontSize : 40,
        margin : 20
    },
    input : {
      color: '#fff',
      width : 300,
      padding : 16 ,
      marginTop : 26 ,
      marginLeft : 36 ,
      borderColor : '#bbb',
      borderWidth : 1,
      borderStyle : 'dashed',
      borderRadius : 10
    },
    underLineSB:{
      width : 30 ,
      height : 45,
      borderWidth : 0,
      borderBottomWidth : 1
    },
    underLineStyleHighLighted : {
        borderColor : '#03DAC6'
    },
    container : {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'stretch',
       backgroundColor : '#121212'
    }
   });

   export default OTP;