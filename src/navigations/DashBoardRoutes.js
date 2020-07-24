import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from '_scenes/dashboard';
import {All} from '_scenes/admincase';
import {DetailsCase} from '_scenes/admincase';
import {PdfGenerate} from '_scenes/pdf';

const Stack = createStackNavigator();

function DashBoardRoutes() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="DashBoard" component={DashBoard} options = {{title : 'wwa' ,
                    headerStyle : {
                    height : 40,
                    backgroundColor : '#181818' ,
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