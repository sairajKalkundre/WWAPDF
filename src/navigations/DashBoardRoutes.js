import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from '_scenes/dashboard';
import {All} from '_scenes/admincase';
import {DetailsCase} from '_scenes/admincase';
import {PdfGenerate} from '_scenes/pdf';
import {PdfGenerateRescue} from '_scenes/pdf';
import {PdfGenerateSpecies} from '_scenes/pdf';

const Stack = createStackNavigator();

function DashBoardRoutes() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="DashBoard" component={DashBoard} options = {{title : 'wwa' ,
                    headerStyle : {
                    backgroundColor : '#181818' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <Stack.Screen name="AllCase" component={All} options = {{title : 'wwa' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <Stack.Screen name="Dcase" component={DetailsCase} options = {{title : 'wwa' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
               <Stack.Screen name="PDF" component={PdfGenerate} options = {{title : 'PDF Form' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <Stack.Screen name="PDFspec" component={PdfGenerateSpecies} options = {{title : 'Form-2' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
                <Stack.Screen name="PDFrescuer" component={PdfGenerateRescue} options = {{title : 'Form-3' ,
                    headerStyle : {
                    backgroundColor : '#1F1B24' ,
                    shadowOpacity : 0},
                    headerTintColor : '#fff',
                    headerMode : 'none',
                    headerTintStyle : {
                    fontWeight : 'bold'}
                }}/>
            </Stack.Navigator>
    );
  }
  
  export default DashBoardRoutes;