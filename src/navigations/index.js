
import React ,{useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashBoardRoutes from './DashBoardRoutes';
import ProfileRoutes from './ProfileRoutes';
import auth from '@react-native-firebase/auth'
import Test from './reduxTest/Test';

const Tab = createBottomTabNavigator();
const THEME_COLOR = '#121212';
function App() {
  const [activityName , setActivityName] = useState('');
  useEffect(() =>{
    auth().onAuthStateChanged ((user) => {
      if(user) {
          setActivityName('Profile')
      }
      else{
        setActivityName('Login')
        }
  })
  }, [activityName]);
  
  return (
    <NavigationContainer>
        <SafeAreaView style = {styles.topSafeArea} />
        <SafeAreaView style = {styles.bottomSafeArea}>
        <StatusBar backgroundColor = 'black' barStyle = "light-content"/>
        </SafeAreaView>
        <Tab.Navigator
            initialRouteName="Dashboard"
            tabBarOptions={{
              activeTintColor: 'white',
              style : {
                backgroundColor : '#181818',
                borderTopWidth : 0
              }
            }}>
            <Tab.Screen
              name="Dashboard"
              component={DashBoardRoutes}
              options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                )
              }}
            />
             <Tab.Screen
              name="Post"
              component={Test}
              options={{
                tabBarLabel: 'Stories',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="tooltip-image-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="ProfileDetails"
              component={ProfileRoutes}
              options={{
                tabBarLabel: activityName,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topSafeArea : {
    backgroundColor :  THEME_COLOR
  },
  bottomSafeArea : {
    backgroundColor : THEME_COLOR
  }
 });
export default App;