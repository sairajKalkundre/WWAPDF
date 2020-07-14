import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import {SquareNavigation} from '_atoms';
import {useNavigation} from '@react-navigation/native';

const DashFooter = () => {
    const navigation = useNavigation();
    
    const adminPage = () => {
        navigation.navigate('AllCase')
    }

    const nextPage = () => {
        navigation.navigate('PDF')
    }
    
    return(
        <View style = {styles.container3}>
            <Card style = {{marginLeft : 10 , marginRight : 10, backgroundColor : '#282828' ,borderRadius : 12}}>
                <Card.Title titleStyle = {{color: 'white' , fontSize: 15 }} title="Navigate"/>
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