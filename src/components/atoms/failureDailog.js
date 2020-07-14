import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {Dialog, Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FailureDailog = (props) => {
    return(
        <Portal>
            <Dialog  visible = {props.visib} dismissable = {false} style = {{ backgroundColor : '#282828'}}>
                <Dialog.Title style = {{alignSelf : 'center' , color : 'white'}}>Failure</Dialog.Title>
                <Dialog.Content style ={{alignItems : 'center'}}>
                <Icon name = 'exclamation' color = 'red' size = {45}></Icon>
                <Text style = {{margin : 15 , color : 'white'}}>Rescuer Name cannot be empty</Text>
                <TouchableOpacity style = {{borderWidth : 1 ,borderRadius : 5, borderColor : '#fff' , marginTop : 25}}>
                    <Text style = {{ padding : 8 ,color : 'white' , fontWeight : 'bold' , width : 70 , textAlign : 'center'}}>OK</Text>
                </TouchableOpacity>
                </Dialog.Content>
            </Dialog>
        </Portal>  
    )};

export default FailureDailog;