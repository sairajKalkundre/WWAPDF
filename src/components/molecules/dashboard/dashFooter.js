import React,{useState} from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import {SquareNavigation} from '_atoms';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const DashFooter = () => {
    const [rPanel , setrpanel] = useState({
        name : 'Rescuer Panel',
        color : 'white'
    });
    const navigation = useNavigation();
    const adminPage = () => {
        navigation.navigate('AllCase')
    }

    const nextPage = () => {
        const user= auth().currentUser;
        if(user){
                    database().ref('/rescuerPermission')
                    .on('value' ,snapshot => {
                        if(snapshot.hasChild(String(user.phoneNumber))){
                            navigation.navigate('PDF')
                            setrpanel({name : 'Rescuer Panel',
                            color : 'white'})
                        }
                        else{
                            setrpanel({name : 'Not Rescuer',
                                        color : '#FF1672'})

                        }});
        }else{
            navigation.navigate('ProfileDetails')
        }
       
    }
    
    return(
        <View style = {styles.container3}>
            <Card style = {{marginLeft : 10 , marginRight : 10, backgroundColor : '#282828' ,borderRadius : 12}}>
                <Card.Title titleStyle = {{color: rPanel.color , fontSize: 16 }} title= {rPanel.name}/>
                    <View style = {styles.topCardDesign} > 
                    <TouchableOpacity onPress = {() => nextPage()}>
                        <SquareNavigation name = 'Rescuer' iconName = 'user-md' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => adminPage()}>
                        <SquareNavigation name = 'Admin' iconName = 'users-cog' />
                    </TouchableOpacity>
                        <SquareNavigation name = 'Analysis' iconName = 'chart-line' />
                    </View>
            </Card>
    </View>
    )
}
const styles = StyleSheet.create({
    container3 : {
        marginTop : 10,
        marginBottom : 20
    },
    topCardDesign : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 5
    }
})
 export default DashFooter;