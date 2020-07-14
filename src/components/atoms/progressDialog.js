import React  from 'react';
import {ActivityIndicator , Dialog, Portal, Text } from 'react-native-paper';

 const ProgressDialog  = ({name , visible}) => {
    return (
        <Portal>
            <Dialog dismissable = {false} 
                    style = {{alignSelf : 'center' , height : 110 , width : 150 ,backgroundColor : '#303030' , borderRadius : 15}} 
                    visible={visible} >
            <Dialog.Content>
                <ActivityIndicator animating = {true}  size = '40' color = '#fff'/>
                <Text style = {{fontSize : 12 ,color : 'white' , marginTop : 10 , marginLeft : 5}}>{name}</Text>
            </Dialog.Content>
            </Dialog>
      </Portal>  
    )};

    export default ProgressDialog;