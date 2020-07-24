import React , {useEffect, useState} from 'react';
import {View,Text,StyleSheet } from 'react-native';
import {Card , TextInput, Dialog,Divider, Paragraph , Portal,Provider,Button} from 'react-native-paper';
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackActions } from '@react-navigation/native';

const DetailsCase = ({route,navigation}) => {
    const key = route.params.id;
    const[cno , setCno] = useState();
    const[rName , setrName] = useState();
    const[cName , setcName] = useState();
    const[cAdd , setAdd] = useState();
    const[cLat , setcLat] = useState();
    const[cLong , setcLong] = useState();
    const[cDate , setcDate] = useState();
    const[cTime , setcTime] = useState();
    const[cSpecieName , setcSpecieName] = useState();
    const[cPno , setcPno] = useState();
    const[cSpecie, setcSpecie] = useState();
    const[cSize, setcSize] = useState();
    const [visible , setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);
    const [buttonS , setbuttonS] = useState({
        icons : 'file-upload' ,
        saveId : 'save',
        color : 'white'
    });
    const [saveId , setSaveId] = useState('save');
    useEffect(() => {
            database().ref('case/'+key)
                      .on('value' , snapshot => {
                          setCno(String(snapshot.child('caseno').val()))
                          setrName(snapshot.child('rescuername').val())
                          setcName(snapshot.child('callername').val())
                          setAdd(snapshot.child('calleradress').val())
                          setcLat(String(snapshot.child('latitude').val()))
                          setcLong(String(snapshot.child('longitude').val()))
                          setcPno(snapshot.child('callercno').val())
                          setcDate(snapshot.child('date').val())
                          setcTime(snapshot.child('time').val())
                          setcSpecieName(snapshot.child('speciename').val())
                          setcSpecie(snapshot.child('species').val())
                          setcSize(snapshot.child('size').val())
                          console.log(cno)
                      })

    },[]);

    
    const updateDetails = () => {
        database().ref('case/'+key)
                  .update({
                      caseno : Number(cno),
                      rescuername : rName,
                      callername : cName,
                      calleraddress : cAdd , 
                      latitude : Number(cLat) ,
                      longitude : Number(cLong),
                      callercno : cPno,
                      date : cDate,
                      time : cTime,
                      speciename : cSpecieName,
                      species : cSpecie,
                      size : cSize
                  })
                  .then(response => {
                      setbuttonS({icons : 'check-circle' , 
                                saveId : 'saved' ,
                                color : '#b1ff32'});
                     
                  });
    }

    const deleteCase = () => {
        database().ref('case/'+key)
                  .remove()
                  .then(response => {
                      setVisible(false);
                      navigation.goBack();
                  })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <View style = {{flexDirection : 'row'}}>
                  <Icon color = 'white' style = {{marginRight :30}} size = {20} name = 'trash' onPress = {() => setVisible(true)}/>
                  <Icon color = {buttonS.color} style = {{marginRight :30}} size = {20} name = {buttonS.icons} onPress = {() => updateDetails()}/>
                  {/* <TouchableOpacity>
                    <Icon name= 'file-upload' size={20} color="white" style = {{margin : 8 }} />
                    <Text style = {{color : 'white' , fontWeight : 'bold' , fontSize : 16 , marginTop:10 , marginRight : 15 }}>Upload</Text>
                </TouchableOpacity> */}
            </View>
          ),
        });
      }, [navigation , cno , rName,cName,cAdd,cLat,cLong,cPno,cDate,cTime,cSpecieName,cSpecie , cSize,buttonS ]);

    return (
       <View style = {styles.container}> 
            <Provider>
            <Portal>
                <Dialog  dismissable = {false} style = {{ backgroundColor : '#282828'}} visible={visible} >
                <Dialog.Title style = {{alignSelf : 'center' , color : 'white'}}>Delete</Dialog.Title>
                <Dialog.Content>
                    <Paragraph style = {{margin : 5 , alignSelf : 'center' , color : 'white'}}>Are you sure you want to Delete ?</Paragraph>
                    <Divider style = {{marginTop : 10 ,backgroundColor : '#787878'}} />
                    <Button margin = {5} color = '#b1ff32' onPress = {() => deleteCase()}>Yes</Button>
                    <Divider style = {{marginTop : 5 ,backgroundColor : '#787878'}} />
                    <Button marginTop = {5} color = 'white' onPress = {() => setVisible(false)}>No</Button>
                </Dialog.Content>
                </Dialog>
            </Portal>  
            <Card style = {{margin : 10,backgroundColor : '#282828'}}>
                <Card.Title titleStyle = {{color: '#b1ff32'}} title="Case Detail"/>
                  <ScrollView contentContainerStyle = {{paddingBottom : 50}}>
                    <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Case No :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cno}
                        onChangeText = {text => setCno(text)}
                        />
                        <TextInput
                            theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                            background : '#282828'}}}
                            mode = 'flat'
                            underlineColor = 'white'
                            label = 'Rescuer Name :'
                            style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                            onChangeText = {rname => setrName(rname)}
                            value = {rName}
                            />
                    <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Caller Name :'
                        style = {{alignSelf : 'stretch', margin : 10 ,height : 50}}
                        value = {cName}
                        onChangeText = {name => setcName(name)}
                        />

                     <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        numberOfLines = {4}
                        label = 'Address :'
                        multiline = {true}
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 80}}
                        value = {cAdd}
                        onChangeText = {add => setAdd(add)}
                        />
                    <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Latitude :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cLat}
                        onChangeText = {lat => setcLat(lat)}
                        />   
                      <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Longitude :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cLong}
                        onChangeText = {long => setcLong(long)}
                        />   
                    <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Caller Phone Number :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cPno}
                        onChangeText = {phoneNo => setcPno(phoneNo)}
                        />
                     <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Date :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cDate}
                        onChangeText = {date => setcDate(date)}
                        />
                     <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Time :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cTime}
                        onChangeText = {time => setcTime(time)}
                        />   
                      <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Specie Name :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cSpecieName}
                        onChangeText = {sname => setcSpecieName(sname)}
                        />       
                     <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Specie :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cSpecie}
                        onChangeText = {species => setcSpecie(species)}
                        />       
                    <TextInput 
                        theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                        background : '#282828'}}}
                        mode = 'flat'
                        underlineColor = 'white'
                        label = 'Size :'
                        style = {{alignSelf : 'stretch' , margin : 10 ,height : 50}}
                        value = {cSize}
                        onChangeText = {size => setcSize(size)}
                        />
                    
            </ScrollView>
        </Card>
        
    </Provider>   
</View>
    );

}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor : 'black'
    }
});

export default DetailsCase;