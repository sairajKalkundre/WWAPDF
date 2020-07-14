import React, { useState }  from 'react';
import {View , StyleSheet} from 'react-native';
import {Avatar, TextInput , Button , ActivityIndicator} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function EditProfile ({route , navigation}){
  const [imgUrl,setimgUrl] = useState('');
  const [name , setName] = useState(route.params.rescuerName);
  const [desig , setDesig] = useState(route.params.rescuerDesignation);
  const [isLoading , setLoading] = useState(false);
  const user = auth().currentUser.uid;
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const imagePickerDisplay = () =>{
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setimgUrl(response.uri);
          const source = { uri: response.uri };
          console.log(imgUrl);
        }
      });
    }

    const displayAvatar = () => {
      if(imgUrl == ''){
        return  <Avatar.Image size = {90} source = {require('_assets/images/myProfile.jpg')} style = {{margin : 10 , alignSelf : 'center'}} />
      }
      else{
        return  <Avatar.Image size = {90} source = {{uri : imgUrl}} style = {{margin : 10 , alignSelf : 'center'}} />
      }
    }

    const uploadProfile = () => {
        setLoading(true);
        upload();
    }

    function upload() {
      const profile = storage().ref('images/' + user)
      profile.putFile(imgUrl)
                   .then((snapshot) => {
                                     console.log('Image Uploaded');
                                     profile.getDownloadURL()
                                     .then((url) => {
                                       database().ref('/usersreact/' + user)
                                                  .update({
                                                    userId : user,
                                                    imgurl : url,
                                                    userName : name,
                                                    designation : desig
                                                  })
                                                  .then(() => {
                                                              setLoading(false);
                                                              console.log('Data added')})
                                                              navigation.goBack()
                                                    })
                                                  })
                                     .catch((e) => {
                                                 setLoading(false);
                                                 console.log('Error' , e)});

    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <View style = {{flexDirection : 'row' , marginRight : 10}}>
                <ActivityIndicator animating = {isLoading} style = {{marginRight : 10}}  size = 'small' color = '#fff'/>
                 <TouchableOpacity onPress = {() => uploadProfile()}>
                     <Icon name = 'check' color = 'white' size = {20}></Icon>
                 </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style = {{flexDirection : 'row' , marginLeft : 10}}>
               <TouchableOpacity onPress = {() => navigation.goBack()}>
                   <Icon name = 'times' color = 'white' size = {20}></Icon>
               </TouchableOpacity>
          </View>
        )
        });
      }, [isLoading , imgUrl,name,desig]);
    return (
        <View style = {styles.container}>
              {displayAvatar()}
             <Button color = 'white' onPress = {() => imagePickerDisplay()}>Change Profile Picture</Button>
             <TextInput 
                      theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                      background : 'black'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {{margin : 10}}
                      multiline = {true}
                      label = ' Name'
                      value = {name}
                      onChangeText = {(text) => setName(text)}
                      />

            <TextInput 
                      theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                      background : 'black'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {{margin : 10}}
                      label = 'Designation' 
                      value = {desig}
                      onChangeText = {(text) => setDesig(text)}
                      />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'black',
      alignItems : 'stretch',
      
    }
  })