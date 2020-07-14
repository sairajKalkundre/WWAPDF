import React , {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector , useDispatch} from 'react-redux';
const ReduxTest = () => {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

        return (
            <View style = {styles.container}>
                    <TouchableOpacity onPress = {() => dispatch({type : 'INCREMENT'})}>
                        <Text style = {{color : 'white' , fontSize : 20}}>Increase</Text>
                    </TouchableOpacity>
                    <Text style = {{color : 'white' , fontSize : 20}}>{counter}</Text>
                    <TouchableOpacity onPress = {() => dispatch({type : 'DECREMENT'})}>
                        <Text style = {{color : 'white' , fontSize : 20}}>Decrease</Text>
                    </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
        container : {
            flex : 1 ,
            flexDirection : 'row',
            justifyContent : 'space-around',
            alignItems : 'center',
            backgroundColor : 'black'
        }
});

export default ReduxTest;