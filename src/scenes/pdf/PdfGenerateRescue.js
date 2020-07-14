import React , {useState, useEffect} from 'react';
import {
  View ,ScrollView
} from 'react-native';

import { Button  , Text} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import  {GlobalStyles}  from '_styles/GlobalStyles';
import { TextInput } from 'react-native-paper';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import Mailer from 'react-native-mail';


const PdfGenerateRescuer = ({route , navigation}) => {
  const caseno = route.params.caseData.cno;
  const reg = route.params.caseData.city;
  const operation = route.params.caseData.top;
  const count = route.params.specieData.scount;
  const type = route.params.specieData.stype;
  const name = route.params.specieData.sname;
  const site = route.params.specieData.ssite;
  const age = route.params.specieData.sage;
  const health = route.params.specieData.sHealth;
  const [callerDetails , setCallerDetails] = useState({
    cname : '',
    cno : '',
    cadd : '',
    rtype : '',
    rname : ''
  }); 

    const generatePdf = async () => {
            const hello =   RNFetchBlob.fs.dirs.DownloadDir;
            const pngPath = `${hello}/ngo.png`;
            const logoPath = `${hello}/wwa.png`;
            const nameR = 'sairaj';
            const page1 = PDFPage.create()
                                  .setMediaBox(595, 842)
            .drawImage(pngPath , 'png',{
              x : 490,
              y : 5,
              width : 100,
              height : 100
            })
            .drawImage(logoPath , 'png',{
              x : 5,
              y : 690,
              width : 150,
              height : 100
            })
            .drawText('Reg.F28990 Thane',{
                x : 450 ,
                y : 750 ,
                fontSize : 15,
                fontName : 'Roboto-Bold'
              })
              .drawText('contact@wwaindia.org | wwaindia.org',{
                x : 330 ,
                y : 730 ,
                fontWeight : 'bold',
                fontSize : 15,
                fontName : 'Roboto-Bold'
              })
              .drawText('RESCUE FORM',{
                x : 220 ,
                y : 650 ,
                fontWeight : 'italic',
                fontSize : 35,
                fontName : 'Roboto-Bold'
              })
              
              .drawText('Case No :' + ' ' + caseno,{
                x : 20 ,
                y : 600 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Date :',{
                x : 410 ,
                y : 600 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('RESCUE DETAILS',{
                x : 250 ,
                y : 550 ,
                fontWeight : 'bold',
                fontSize : 25,
                fontName : 'Roboto-Bold'
              })
              .drawText('Region :' + ' ' + reg,{
                x : 20 ,
                y : 500 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Operation Type :' + ' ' + operation ,{
                x : 300 ,
                y : 500 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Specie Count :' + ' ' + count,{
                x : 20 ,
                y : 450 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Type : ' + type,{
                x : 250 ,
                y : 450 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Name : ' + name,{
                x : 450 ,
                y : 450 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Rescue Site : ' + site,{
                x : 20 ,
                y : 400 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Age : ' + age,{
                x : 350 ,
                y : 400 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Health Condition : ' + health,{
                x : 20 ,
                y : 350 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawRectangle({
                x : 10,
                y : 330,
                width : 580,
                height : 2,
                color : '#000000'
              })
              .drawText('RESCUER/CALLER DETAIL',{
                x : 200 ,
                y : 300 ,
                fontWeight : 'bold',
                fontSize : 25,
                fontName : 'Roboto-Bold'
              })
              .drawText('Caller Name :',{
                x : 20 ,
                y : 250 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Contact No :',{
                x : 350 ,
                y : 250 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Caller Address :',{
                x : 20 ,
                y : 200 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Rescue Type :',{
                x : 20 ,
                y : 150 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              .drawText('Rescuer Name :',{
                x : 20 ,
                y : 100 ,
                fontWeight : 'bold',
                fontSize : 22,
                fontName : 'Roboto-Regular'
              })
              ;
            const dirs =   RNFetchBlob.fs.dirs.DownloadDir;
            const pdfPath = `${dirs}/hello.pdf`;
            PDFDocument
            .create(pdfPath)
            .addPages(page1)
            .write() // Returns a promise that resolves with the PDF's path
            .then(path => {
              console.log('PDF created at: ' + path);
              // Do stuff with your shiny new PDF!
            });
      }

    return (
      <ScrollView style = {{backgroundColor : '#121212'}}>
        <View style = {GlobalStyles.container}>
              <TextInput 
                      theme = {{colors : {text : 'white',primary : 'white' ,placeholder :'white',
                      background : '#121212'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {GlobalStyles.input}
                      label = 'Caller Name' 
                      onChangeText = {text => setCallerDetails({cname : text})}/>

                <TextInput 
                      theme = {{colors : {text : 'white',primary : 'white' ,placeholder :'white',
                      background : '#121212'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {GlobalStyles.input}
                      label = 'Caller Number'
                      keyboardType = 'numeric'
                      onChangeText = {text => setCallerDetails({cno : text})}/>

                <TextInput 
                      theme = {{colors : {text : 'white',primary : 'white' ,placeholder :'white',
                      background : '#121212'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {GlobalStyles.input}
                      label = 'Caller Address' 
                      onChangeText = {text => setCallerDetails({cadd : text})}/>
              
              <DropDownPicker
                      items={[
                          {label: 'Solo', value: 'Solo'},
                          {label: 'Co-Rescue', value: 'Co-Rescue'},
                          {label: 'Team', value: 'Team'}
                      ]}
                      placeholder = 'Rescue Type'
                      labelStyle = {{color : 'white'}}
                      alignText = 'flex-start'
                      arrowColor = 'white'
                      itemStyle = {{alignItems : 'flex-start'}}
                      containerStyle = {{width : 250 , height : 60}}
                      style = {GlobalStyles.dropDownStyle}
                      dropDownStyle={{backgroundColor: '#121212' , marginTop : 20}}
                      onChangeItem={item => setCallerDetails({
                          rtype: item.value
                      })}
                    />

                    <TextInput 
                      theme = {{colors : {text : 'white' ,primary : 'white' ,placeholder : 'white',
                      background : '#121212'}}}
                      mode = 'flat'
                      underlineColor = 'white'
                      style = {GlobalStyles.input}
                      label = 'Recuer Name' 
                      onChangeText = {text => setCallerDetails({rname : text})}/>

                      <View style = {{flexDirection : 'row' , marginTop : 20,justifyContent : 'space-between'}}>
                      <Button 
                          color = 'white' 
                          mode = 'contained' 
                          icon = 'wrench' onPress = {() => generatePdf()}>Create</Button>
                        <Button 
                          style = {{marginLeft : 10}}
                          color = 'white' 
                          mode = 'contained' 
                          icon = 'eye'>View</Button>
                        <Button 
                          style = {{marginLeft : 10 }}
                          color = 'white' 
                          mode = 'contained' 
                          icon = 'share'>Share</Button>
                         </View>
                        
        </View>
        </ScrollView>
        )};
      
      export default PdfGenerateRescuer;
      