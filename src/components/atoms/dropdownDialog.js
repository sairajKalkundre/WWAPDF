import React from 'react';
import {Dialog, Portal, Divider, RadioButton, Button} from 'react-native-paper';
import {View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DropDownDialog = (props) => {
     const map = () => {
         return props.data.map(element => {
            return (
                <View>
                    <RadioButton.Item  labelStyle = {{color : 'white' }} label = {element.name} value = {element.key} />
                    <Divider style = {{marginTop : 5 ,backgroundColor : '#787878'}} />
                </View>
            );
         });
     }
    return (
        <Portal>
            <Dialog  visible = {props.dvis} dismissable = {false} style = {{backgroundColor : '#282828'}}>
                <Dialog.Title style = {{alignSelf : 'center' , color : 'white'}}>{props.name}</Dialog.Title>
                <Dialog.Content style = {props.style === 'yes' ? {height : 300 , width : '100%'} : null}>
                <RadioButton.Group onValueChange = {value => props.setValue(value)} value = {props.dropvalue}>
                    <ScrollView>
                    {map()}
                    </ScrollView>
                </RadioButton.Group>
                </Dialog.Content>
                <Dialog.Actions style = {{alignSelf : 'center'}}>
                <Button color = 'white' onPress = {() => props.ok()}>OK</Button>
                </Dialog.Actions>
            </Dialog>
    </Portal>  
    )
}

export default DropDownDialog;