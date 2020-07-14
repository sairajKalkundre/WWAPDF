import React,{useState , useEffect} from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ProfileImage} from '_atoms';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const AuthHeader = () => {
    const [uName , setName] = useState('');
    const [url , setUrl] = useState('');
    const [desig , setDesig] = useState('');
    const navigation = useNavigation();
    const user = auth().currentUser.uid;

    const displayAvatar = () => {
        const source = url === '' ? require('_assets/images/myProfile.jpg') : {uri : url};
        return  <ProfileImage source = {source} style = {{marginTop : 10 , alignSelf : 'center'}} />
      }

    const editProf = () => {
        navigation.navigate('Edit' ,{
          rescuerName : uName ,
          rescuerDesignation : desig,
          rescuerImage : url
        });
      }

    useEffect(() => {
        database().ref('usersreact/' + user)
                   .on('value' , snapshot => {
                       setName(snapshot.child('userName').val())
                       setUrl(snapshot.child('imgurl').val())
                       setDesig(snapshot.child('designation').val())
                   })
     },[]);

    return(
        <View>
            <View style = {{ marginTop : 10 , marginBottom : 10 , marginRight : 40, flexDirection : 'row' ,justifyContent : 'space-around'}}>
                {displayAvatar()}
                    <View style = {{flexDirection : 'column'}}>
                        <Text style = {{color : 'white' ,fontSize : 15 , fontWeight : 'bold' ,marginTop : 25}}>122</Text>
                        <Text style = {{color : 'white'  ,marginTop : 5}}>Rescue</Text>
                    </View>
                    <TouchableOpacity onPress = {() => editProf()}style = {{borderWidth : 1 ,borderRadius : 5, borderColor : '#fff' , marginTop : 25}}>
                        <Text style = {{padding : 8 ,color : 'white' , fontWeight : 'bold'}}>Edit Profile</Text>
                    </TouchableOpacity>
            </View>
                <Text style = {{color : 'white' , marginTop : 5 , marginLeft : 25 ,fontWeight : 'bold', fontSize : 15}}>{uName}</Text>
                <Text style = {{color : 'white' , marginLeft : 25 , fontSize : 15}}>{desig}</Text>
        </View>
        
)};

export default AuthHeader;