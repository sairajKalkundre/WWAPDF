import React , {useEffect} from 'react';

import {HelloWorld} from '_atoms';
import SplashScreen from 'react-native-splash-screen';
import { HelloButton } from '_atoms';
import { View } from 'react-native';
import Navigator from '_navigations';
const App = () => {
    useEffect(() =>{
        SplashScreen.hide();
      }, []);

      return(
          <View style = {{flex : 1 , justifyContent : 'center'}}>
          <Navigator/>
          </View>
      )  
}


export default App;