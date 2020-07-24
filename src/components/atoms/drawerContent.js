import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';


const DrawerContent = (props) => {
    return(
        <View style={{flex:1 , backgroundColor : '#181818'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('_assets/images/myProfile.jpg')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Sairaj Kalkundre</Title>
                                <Caption style={styles.caption}>Developer</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='user-md' 
                                color='white'
                                size={size}
                                />
                            )}
                            label = {() => (
                                <Text style = {{color : 'white'}}>Rescuer</Text>)}
                            onPress={() => {props.navigation.navigate('PDF')}}
                        />
                        <View style = {{marginLeft : 10 ,marginRight: 10 , borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='unlock-alt' 
                                color='white'
                                size={size}
                                />
                            )}
                            label = {() => (
                                <Text style = {{color : 'white'}}>Admin</Text>)}
                            onPress={() => {props.navigation.navigate('AllCase')}}
                        />
                        <View style = {{marginLeft : 10 ,marginRight: 10 , borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark" 
                                color='white'
                                size={size}
                                />
                            )}
                            label = {() => (
                                <Text style = {{color : 'white'}}>Bookmarks</Text>)}
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                         <View style = {{marginLeft : 10 ,marginRight: 10 , borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user" 
                                color='white'
                                size={size}
                                />
                            )}
                            label = {() => (
                                <Text style = {{color : 'white'}}>Community</Text>)}
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <View style = {{marginLeft : 10 ,marginRight: 10 , borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1
    },
    userInfoSection: {
      paddingLeft: 10,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      color : 'white',
      fontWeight: 'bold',
    },
    caption: {
      color : '#99A3A4',
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
  export default  DrawerContent;