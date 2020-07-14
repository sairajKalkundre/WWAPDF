import React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputPdf = (props) => {
    return (
        <TextInput 
            editable = {props.edit}
            theme = {{colors : {text : 'white',primary : 'white' ,placeholder :'white',
            background : '#121212'}}}
            mode = 'flat'
            underlineColor = 'white'
            label = {props.lab}
            style = {{marginTop : 10, marginRight : 10 , marginLeft : 10}}
            value = {props.val}
            onChangeText = {(text) => props.changetxt(text)}
         />
    )
}

export default TextInputPdf;