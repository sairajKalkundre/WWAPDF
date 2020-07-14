import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import { CircleButton } from '_atoms';
import {useNavigation} from '@react-navigation/native';

const DashHeader = () => {
    const navigation = useNavigation();
    
    const adminPage = () => {
        navigation.navigate('AllCase')
    }
    
    return (
        <View style = {styles.container1}>
            <Card style = {{marginLeft : 10 , marginRight : 10,backgroundColor : '#282828' , borderRadius : 12}}>
                <Card.Title titleStyle = {{color: 'white' , fontSize : 15}} title="Navigate"/>
                    <View style = {styles.topCardDesign} > 
                        <CircleButton name = 'Rescue' pressHandler = {adminPage}   iconName = 'cat'/>
                        <CircleButton name = 'Chat' iconName = 'comment-alt'/>
                        <CircleButton name = 'Map' iconName = 'map-pin'/>
                        <CircleButton name = 'Donate' iconName = 'donate'/>
                    </View>
            </Card>
    </View>
    )
}
const styles = StyleSheet.create({
    container1 : {
        marginTop : 10
    },
    topCardDesign : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 5
    }
})

export default DashHeader;