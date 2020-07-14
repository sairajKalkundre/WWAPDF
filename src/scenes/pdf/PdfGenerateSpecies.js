import React , {useState, useEffect} from 'react';
import {
  View, Platform,ScrollView
} from 'react-native';

import { Button  , Text} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import  {GlobalStyles}  from '_styles/GlobalStyles';
import { TextInput } from 'react-native-paper';

const PdfGenerateSpecies = ({route ,navigation}) => {
    const region = route.params.caseData.lat;
    const [species , setSpecies] = useState({
      scount : '',
      stype : '',
      ssite : '',
      sage : '',
      sHealth : '',
      sname : ''
    });

    return (
      <ScrollView style = {{backgroundColor : '#121212'}}>
        <View style = {GlobalStyles.container}>
                <View
                      style = {{
                        ...(Platform.OS !== 'android' && {
                          zIndex : 10
                        })
                      }}>
                      <DropDownPicker
                              items={[
                                  {label: '1', value: '1'},
                                  {label: '2', value: '2'},
                                  {label: '3', value: '3'},
                                  {label: '4', value: '4'},
                                  {label: '5', value: '5'}
                              ]}
                              placeholder = 'Species Count'
                              labelStyle = {{color : 'white'}}
                              alignText = 'flex-start'
                              arrowColor = 'white'
                              itemStyle = {{alignItems : 'flex-start'}}
                              containerStyle = {{ height : 60}}
                              style = {GlobalStyles.dropDownStyle}
                              dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                              onChangeItem={item => setSpecies({
                                  scount: item.value
                              })}
                            />
                  </View>
                  <View
                      style = {{
                        ...(Platform.OS !== 'android' && {
                          zIndex : 9
                        })
                      }}>
                            <DropDownPicker
                              items={[
                                  {label: 'Aves', value: 'Aves'},
                                  {label: 'Mammals', value: 'Mammals'},
                                  {label: 'Reptiles', value: 'Reptiles'},
                              ]}
                              placeholder = 'Species Type'
                              labelStyle = {{color : 'white'}}
                              alignText = 'flex-start'
                              arrowColor = 'white'
                              itemStyle = {{alignItems : 'flex-start'}}
                              containerStyle = {{height : 60}}
                              style = {GlobalStyles.dropDownStyle}
                              dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                              onChangeItem={item => setSpecies({
                                  stype: item.value
                              })}
                            />
                    </View>
                <View
                      style = {{
                        ...(Platform.OS !== 'android' && {
                          zIndex : 8
                        })
                      }}>
                  <DropDownPicker
                      items={[
                          {label: 'House', value: 'House'},
                          {label: 'Inside Two Wheeker', value: 'Inside Two Wheeker'},
                          {label: 'Inside Four Wheeler', value: 'Inside Four Wheeler'},
                          {label: 'Inside Heavy Vehicle', value: 'Inside Heavy Vehicle'},
                          {label: 'Construction Site', value: 'Construction Site'},
                          {label: 'Between Rocks', value: 'Between Rocks'},
                          {label: 'In Gardens', value: 'In Gardens'},
                          {label: 'Dunk', value: 'Dunk'},
                          {label: 'Lobby', value: 'Lobby'},
                          {label: 'Roadside', value: 'Roadside'},
                          {label: 'On Highway', value: 'On Highway'},
                          {label: 'In Swimming Pool', value: 'In Swimming Pool'},
                          {label: 'In Lake', value: 'In Lake'},
                          {label: 'In Pond', value: 'In Pond'},
                          {label: 'In Water Tank', value: 'In Water Tank'},
                          {label: 'Inside Housing Complex', value: 'Inside Housing Complex'},
                          {label: 'On the Tree', value: 'On the Tree'},
                          {label: 'Inside Hole', value: 'Inside Hole'}
                      ]}
                      placeholder = 'Rescue Site'
                      labelStyle = {{color : 'white'}}
                      alignText = 'flex-start'
                      arrowColor = 'white'
                      itemStyle = {{alignItems : 'flex-start'}}
                      containerStyle = {{height : 60}}
                      style = {GlobalStyles.dropDownStyle}
                      dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                      onChangeItem={item => setSpecies({
                          ssite: item.value
                      })}
                    />
                    </View>
                <View
                    style = {{
                      ...(Platform.OS !== 'android' && {
                        zIndex : 7
                      })
                    }}>
                        <DropDownPicker
                          items={[
                              {label: 'Juvenile', value: 'Juvenile'},
                              {label: 'Adult', value: 'Adult'},
                              {label: 'Sub-Adult', value: 'Sub-Adult'},
                          ]}
                          placeholder = 'Age'
                          labelStyle = {{color : 'white'}}
                          alignText = 'flex-start'
                          arrowColor = 'white'
                          itemStyle = {{alignItems : 'flex-start'}}
                          containerStyle = {{height : 60}}
                          style = {GlobalStyles.dropDownStyle}
                          dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                          onChangeItem={item => setSpecies({
                              sage: item.value
                          })}
                        />
                        </View>
                  <View
                    style = {{
                      ...(Platform.OS !== 'android' && {
                        zIndex : 6
                      })
                    }}>
                   <DropDownPicker
                      items={[
                          {label: 'Fit to release', value: 'Fit to release'},
                          {label: 'Mildly Injured', value: 'Mildly Injured'},
                          {label: 'Highly Injured', value: 'Highly Injured'},
                          {label: 'Dehydrated', value: 'Dehydrated'}
                      ]}
                      placeholder = 'Health Condition'
                      labelStyle = {{color : 'white'}}
                      alignText = 'flex-start'
                      arrowColor = 'white'
                      itemStyle = {{alignItems : 'flex-start'}}
                      containerStyle = {{height : 60}}
                      style = {GlobalStyles.dropDownStyle}
                      dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                      onChangeItem={item => setSpecies({
                          sHealth: item.value
                      })}
                    />
                    </View>

                    <TextInput 
                          theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                          background : '#121212'}}}
                          mode = 'flat'
                          underlineColor = 'white'
                          style = {GlobalStyles.input}
                          label = 'e.g Species' 
                          value = {region}
                          onChangeText = {text => setSpecies({sname : text})}/>
                          
                      <Button 
                              style = {GlobalStyles.btnStyle}
                              color = 'white' 
                              mode = 'contained'
                              //onPress = {() => console.log(species.scount)} 
                              onPress = {() => navigation.navigate('PDFrescuer' ,{
                                  specieData : species,
                                  caseData : route.params.caseData,
                                  
                              })}
                              icon = "arrow-right">Next</Button>
        </View>
        </ScrollView>
        )};
      
      export default PdfGenerateSpecies;
      