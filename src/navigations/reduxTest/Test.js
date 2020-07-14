import React , {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import ReduxTest from './ReduxTest';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState ={
    counter : 0
};

const reducer = (state = initialState , action) => {
    switch(action.type){
        case 'INCREMENT' :
                return {counter : state.counter + 1}

        case 'DECREMENT' :
                return {counter : state.counter - 1}      
                
        default :
                return state
    }
}    

const store = createStore(reducer)

const Test = () => {
        return (
            <Provider store = {store}>
                 <ReduxTest/>
            </Provider>
        )
}


export default Test;