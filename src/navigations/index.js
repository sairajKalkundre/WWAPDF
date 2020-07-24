
import React ,{useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DashBoardRoutes from './DashBoardRoutes';
import ProfileRoutes from './ProfileRoutes';
import FeedRoutes from './FeedRoutes';
import auth from '@react-native-firebase/auth'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from '_atoms'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
  
  const btmTabNav = () => {
    return(
          <Tab.Navigator
              initialRouteName="Post"
              tabBarOptions={{
                activeTintColor: 'white',
                style : {
                  backgroundColor : '#181818',
                  borderTopWidth : 0
                }
              }}>
              <Tab.Screen
                name="Post"
                component={FeedRoutes}
                options={{
                  tabBarLabel: 'Feeds',
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="bolt" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Tips"
                component={DashBoardRoutes}
                options={{
                  tabBarLabel: 'Tips',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="lightbulb" color={color} size={size} />
                  )
                }}
              />
              <Tab.Screen
                name="Rescue"
                component={DashBoardRoutes}
                options={{
                  tabBarLabel: 'Rescue',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="dog" color={color} size={size} />
                  )
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
    )
      
  }

  return (
    <NavigationContainer>
        <SafeAreaView style = {styles.topSafeArea} />
        <SafeAreaView style = {styles.bottomSafeArea}>
        <StatusBar backgroundColor = 'black' barStyle = "light-content"/>
        </SafeAreaView>
        <Drawer.Navigator
            drawerContent = {props => <DrawerContent {...props}/> } >
                <Drawer.Screen name="navDraw" component={btmTabNav} />
            </Drawer.Navigator>
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