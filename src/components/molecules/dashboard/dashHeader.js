import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import { CircleButton } from '_atoms';
import {useNetInfo} from '@react-native-community/netinfo';
import {CheckInternet} from '_atoms';

const DashHeader = () => {
    const netInfo = useNetInfo();
    return (
        <View>
              {netInfo.isConnected ? null : <CheckInternet/> }
                <View style ={{marginTop : 10}}>
                    <Card style = {{marginLeft : 10 , marginRight : 10,backgroundColor : '#282828' , borderRadius : 12}}>
                        <Card.Title titleStyle = {{color: 'white' , fontSize : 16}} title="User Panel"/>
                            <View style = {styles.topCardDesign} > 
                                <CircleButton name = 'Rescue'  iconName = 'cat'/>
                                <CircleButton name = 'Chat' iconName = 'comment-alt'/>
                                <CircleButton name = 'Map' iconName = 'map-pin'/>
                                <CircleButton name = 'Donate' iconName = 'donate'/>
                            </View>
                    </Card>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    topCardDesign : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 5
    }
})

export default DashHeader;