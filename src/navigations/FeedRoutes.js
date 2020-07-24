import React   from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Feeds} from '_scenes/feeds';
import {AddFeed} from '_scenes/feeds';

import {All} from '_scenes/admincase';
import {DetailsCase} from '_scenes/admincase';
import {PdfGenerate} from '_scenes/pdf';
const FeedStack = createStackNavigator();

export default function FeedRoutes () {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="Feed" component={Feeds} options = {{title : 'Feed' ,
                headerStyle : {
                height : 40,
                backgroundColor : '#181818' ,
                shadowOpacity : 0},
                headerTintColor : '#fff',
                headerMode : 'none',
                headerTintStyle : {
                fontWeight : 'bold'}
            }}/>
            <FeedStack.Screen name="Add Feed" component={AddFeed} options = {{title : 'Feed' ,
                headerStyle : {
                height : 40,
                backgroundColor : '#181818' ,
                shadowOpacity : 0},
                headerTintColor : '#fff',
                headerMode : 'none',
                headerTintStyle : {
                fontWeight : 'bold'}
            }}/>
            <FeedStack.Screen name="AllCase" component={All} options = {{title : 'wwa' ,
                headerStyle : {
                backgroundColor : '#1F1B24' ,
                shadowOpacity : 0},
                headerTintColor : '#fff',
                headerMode : 'none',
                headerTintStyle : {
                fontWeight : 'bold'}
            }}/>
            <FeedStack.Screen name="Dcase" component={DetailsCase} options = {{title : 'wwa' ,
                headerStyle : {
                backgroundColor : '#1F1B24' ,
                shadowOpacity : 0},
                headerTintColor : '#fff',
                headerMode : 'none',
                headerTintStyle : {
                fontWeight : 'bold'}
            }}/>
        <FeedStack.Screen name="PDF" component={PdfGenerate} options = {{title : 'PDF Form' ,
                headerStyle : {
                backgroundColor : '#1F1B24' ,
                shadowOpacity : 0},
                headerTintColor : '#fff',
                headerMode : 'none',
                headerTintStyle : {
                fontWeight : 'bold'}
            }}/>
    </FeedStack.Navigator>
            
    )
}