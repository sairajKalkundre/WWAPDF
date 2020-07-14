import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SquareNavigation = (props) => {
    return (
        <View style = {styles.squareShapeView}>
            <Icon name= {props.iconName} size={30} color="white" />
            <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
        squareShapeView : {
            width : 80,
            height : 80,
            alignItems : 'center',
            borderColor : 'white',
            justifyContent : 'center',
            backgroundColor : 'black',
            borderRadius : 10
        }
});

export default SquareNavigation;