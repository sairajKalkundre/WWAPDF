import React, { useState }  from 'react';
import {View , StyleSheet , Image , Dimensions} from 'react-native';
import {Avatar, TextInput , Button , ActivityIndicator} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const AddFeed = ({navigation ,route}) => {
    const [imgUrl,setimgUrl] = useState('');
    const [desc , setDesc] = useState('');
    const [loc , setLoc] = useState('');
    const [isLoading , setLoading] = useState(false);
    var width =  Dimensions.get('window').width
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

      const uploadFeed = () => {
        setLoading(true);
        upload();
      }

    function upload() {
      const newref = database().ref('/feeds').push()
      const feedUri = storage().ref('feeds/' + newref.key)
        if(imgUrl === ''){
            //Display Error message
          }
        else{
            feedUri.putFile(imgUrl)
            .then((snapshot) => {
                              console.log('Image Uploaded');
                              feedUri.getDownloadURL()
                              .then((url) => {
                                        newref
                                          .set({
                                            username : route.params.rName,
                                            userImg : route.params.rescuerImage,
                                            feedUrl : url,
                                            location : loc,
                                            des : desc,
                                          })
                                          .then(() => {
                                                      setLoading(false);
                                                      console.log('Data added')
                                                      navigation.goBack()
                                                    });
                                                      
                                            });
                                          })
                              .catch((e) => {
                                          setLoading(false);
                                          console.log('Error' , e)});
        }

    }

    const displayAvatar = () => {
        if(imgUrl === ''){
          return <Image style={{width:width * 0.95,height: width * 0.6,top : 10 ,left : 10 }} source = {require('_assets/images/feed.jpg')}/>
        }
        else{
          return  <Image style={{width:width * 0.95,height: width * 0.6,top : 10 ,left : 10 }} source = {{uri : imgUrl}} />
        }
      }
  
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <View style = {{flexDirection : 'row' , marginRight : 20}}>
                <ActivityIndicator animating = {isLoading} style = {{marginRight : 10}}  size = 'small' color = '#fff'/>
                 <TouchableOpacity onPress = {() => uploadFeed()}>
                     <Icon name = 'check' color = 'white' size = {20}></Icon>
                 </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style = {{flexDirection : 'row' , marginLeft : 20}}>
               <TouchableOpacity onPress = {() => navigation.goBack()}>
                   <Icon name = 'times' color = 'white' size = {20}></Icon>
               </TouchableOpacity>
          </View>
        )
        });
      }, [isLoading , imgUrl , desc ,loc]);
return (
    <View style = {styles.container}>
        {displayAvatar()}
        <Button top = {10}  color = '#b1ff32' onPress = {() => imagePickerDisplay()}>Change Feed</Button>
        <TextInput 
            theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
            background : 'black'}}}
            mode = 'flat'
            underlineColor = 'white'
            style = {{marginLeft : 10 , marginRight : 10 }}
            multiline = {true}
            label = 'Details'
            onChangeText = {(text) => setDesc(text)}
            />
        <TextInput 
            theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
            background : 'black'}}}
            mode = 'flat'
            underlineColor = 'white'
            style = {{marginLeft : 10 , marginRight : 10}}
            label = 'Location' 
            onChangeText = {(text) => setLoc(text)}
            />
</View>
)}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'black',
      alignItems : 'stretch',
    }
  })

export default AddFeed;