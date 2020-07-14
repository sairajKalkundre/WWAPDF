import React , {useState , useEffect}  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Profile} from '_scenes/auth';
import {EditProfile} from '_scenes/auth';
import {OTP} from '_scenes/auth';
import auth from '@react-native-firebase/auth'
const ProfileStack = createStackNavigator();

export default function ProfileRoutes () {
    const [isLoggedIn , setLoggedIn] = useState(false)
    useEffect(() => {
        auth().onAuthStateChanged ((user) => {
          if(user) {
            setLoggedIn(true)
          }
          else{
              setLoggedIn(false)
          }
      })
      }, [isLoggedIn]);
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Check" component={isLoggedIn ? Profile : OTP } options = {{title : isLoggedIn ? 'Profile' : 'Login' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <ProfileStack.Screen name="OTP" component={OTP} options = {{title : 'Login' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <ProfileStack.Screen name="Profile" component={Profile} options = {{title : 'wwa' ,
                    headerStyle : {
                    backgroundColor : '#181818' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                   <ProfileStack.Screen name="Edit" component={EditProfile} options = {{title : 'Edit Profile' ,
                    headerStyle : {
                    backgroundColor : '#181818' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
        </ProfileStack.Navigator>
    )
}