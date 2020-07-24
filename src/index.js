import React , {useEffect} from 'react';
import database from '@react-native-firebase/database';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native';
import Navigator from '_navigations';

const App = () => {
    useEffect(() =>{
        SplashScreen.hide();
        database().setPersistenceEnabled(true)       
      }, []);

      return(
          <View style = {{flex : 1 , justifyContent : 'center'}}>
          <Navigator/>
          </View>
      )  
}


export default App;