import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DashBody = () => {
    return (
        <View style = {styles.container2}>
            <View style = {styles.cardDesign}> 
            <Text style = {{color : 'white' , margin : 10, marginLeft : 30 , fontSize: 15  , alignSelf : 'flex-start'}}>Rescued History</Text>
            <ProgressCircle
                        percent={60}
                        radius={100}
                        borderWidth={10}
                        color="#b1ff32"
                        shadowColor="#202020"
                        bgColor="black">
                        <Icon name= 'dog' size={30} color="white" />
                        <Text style={{ marginTop : 20 , fontSize: 25 , color : 'white' }}>60 </Text>
                        <Text style={{ fontSize: 12 , color : 'white' }}>Rescued Today </Text>
                </ProgressCircle>
                <View style = {{marginTop : 20 , flexDirection : 'row' , justifyContent : 'space-between' }}>
                    <View style = {{flexDirection : 'column' , marginRight : 20}}>
                        <Text style={{ fontWeight : 'bold' , marginTop : 10 , fontSize: 18 , color : 'white' ,}}>Total Rescued</Text>
                        <Text style={{  marginTop : 10 , fontSize: 18 , color : 'white', alignSelf : 'center' , height : 30 }}>40 </Text>
                    </View>
                    <View style = {{flexDirection : 'column' }}>
                        <Text style={{ fontWeight : 'bold' , marginTop : 10 , fontSize: 18 , color : 'white' ,}}>Total Released</Text>
                        <Text style={{  marginTop : 10 , fontSize: 18 , color : 'white', alignSelf : 'center' , height : 30 }}>40 </Text>
                    </View>
                </View>
            </View>
    </View> 
    )
}
const styles = StyleSheet.create({
    container2 : {
        marginTop : 10
    },
    cardDesign : {
        alignItems : 'center',
    }
});

export default DashBody;
