import React,{useState}  from 'react';
import {View,Text,StyleSheet,YellowBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from '@react-navigation/native';
import {AuthHeader} from '_molecules/auth';
import {AuthFooter} from '_molecules/auth';
import {Dialog} from '_atoms';
import {Provider} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useNetInfo} from '@react-native-community/netinfo';
import {CheckInternet} from '_atoms';

export default function Profile ({navigation}){
      YellowBox.ignoreWarnings(['Clipboard'])
      const [visible , setVisible] = useState(false);
      const netInfo = useNetInfo();
      const user = auth().currentUser;
      console.log('Phone' , user.phoneNumber);
      React.useLayoutEffect(() => {
          navigation.setOptions({
          
            headerRight: () => (
                <View style = {{flexDirection : 'row' , marginRight : 10}}>
                  <TouchableOpacity onPress = {() => {setVisible(true)}}style = {{alignItems : 'center'}}>
                      <Icon name = 'sign-out-alt' color = 'white' size = {15}></Icon>
                      <Text style ={{color : 'white'}}>Sign Out</Text>
                  </TouchableOpacity>
              </View>
            )
          });
        }, [visible]);

      const hideDialog = () => {
        setVisible(false);
      }

      const logOut = () => {
       auth().signOut().then(() => {
                              navigation.dispatch(
                                StackActions.replace('OTP')
                              );
                            });
      }
      return (
        <View style = {styles.container}>
           <Provider>
              {!netInfo.isConnected ?  <CheckInternet/> : null}
              <AuthHeader />
              <AuthFooter/>
              <Dialog yesClick = {logOut} noClick = {hideDialog} display = {visible} label = 'Logout' 
                      subLabel = 'Are you Sure?' positive = 'Yes' negative = 'No'/>
           </Provider>
         </View>
      );
  }

  const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'black'
    }
  });