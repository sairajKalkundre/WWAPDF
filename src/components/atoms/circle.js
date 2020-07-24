import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CircleButton = (props) => {
    return (
        <TouchableOpacity onPress = {props.pressHandler ? () => props.pressHandler() : null}>
        <ProgressCircle
            percent={0}
            radius={35}
            borderWidth={1}
            color="white"
            shadowColor="#999"
            onPress = {() => props.pressHandler}
            bgColor="black">
            <Icon name= {props.iconName} size={20} color="white" />
            <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>{props.name}</Text>
        </ProgressCircle>
        </TouchableOpacity>
    )
}

export default CircleButton;