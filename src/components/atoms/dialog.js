import React from 'react';
import {Paragraph, Dialog, Portal, Divider, Button  } from 'react-native-paper';

const Dailog = (props) => {
    return (
            <Portal>
                <Dialog  visible = {props.display} dismissable = {false} style = {{alignSelf : 'center' , backgroundColor : '#282828' , width : '70%' , borderRadius : 10}}>
                    <Dialog.Title style = {{textTransform : 'uppercase',fontWeight : 'bold' , alignSelf : 'center' , color : 'white'}}>{props.label}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style = {{margin : 5 , alignSelf : 'center',fontSize: 15   , color : 'white'}}>{props.subLabel}</Paragraph>
                        <Divider style = {{marginTop : 10 ,backgroundColor : '#787878'}} />
                        <Button  margin = {3} color = '#b1ff32' onPress = {() => props.yesClick()}>{props.positive}</Button>
                        <Divider style = {{marginTop : 5 ,backgroundColor : '#787878'}} />
                        <Button marginTop = {3} color = 'white' onPress = {() => props.noClick()}>{props.negative}</Button>
                    </Dialog.Content>
                </Dialog>
            </Portal>  
    );
}

export default Dailog;