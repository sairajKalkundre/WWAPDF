import React  from 'react';
import { View , StyleSheet ,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DropDownButton = (props) => {
    return (
        <View style = {styles.dropdown}>
            <TouchableOpacity onPress = {() => props.press()}>
                <View style = {{ flexDirection : 'row' , alignContent : 'stretch'}}>
                    <Text style = {{padding : 10 ,color : 'white' , fontWeight : 'bold'}}>{props.value}</Text>
                    <Icon name = 'arrow-down' size = {15} color = 'white' style = {{alignContent : 'flex-end',marginLeft : 'auto', marginRight : 10, marginTop : 10}}/>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    dropdown : {
        borderWidth : 1 ,
        borderRadius : 5, 
        borderColor : '#fff' ,
        top : 10 ,
        margin : 10
    }
});

export default DropDownButton;