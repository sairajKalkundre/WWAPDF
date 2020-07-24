/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import {Image , StyleSheet,View,Text,Dimensions, TouchableOpacity,} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';

 const generatePdf = async () => {
  // Create a PDF page with text and rectangles
        const hello =   RNFetchBlob.fs.dirs.DownloadDir;
        const pngPath = `${hello}/ngo.png`;
        const logoPath = `${hello}/wwa.png`;
        const nameR = 'sairaj';
        const page1 = PDFPage.create()
                              .setMediaBox(595, 805)
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
            x : 180 ,
            y : 650 ,
            fontWeight : 'italic',
            fontSize : 35,
            fontName : 'Roboto-Bold'
          })
          
          .drawText('CASE NO :',{
            x : 20 ,
            y : 600 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('DATE :',{
            x : 410 ,
            y : 600 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('RESCUE DETAILS',{
            x : 200 ,
            y : 550 ,
            fontWeight : 'bold',
            fontSize : 25,
            fontName : 'Roboto-Bold'
          })
          .drawText('REGION :',{
            x : 20 ,
            y : 500 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('OPERATION TYPE :',{
            x : 300 ,
            y : 500 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('SPECIE COUNT :',{
            x : 20 ,
            y : 450 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('TYPE :',{
            x : 250 ,
            y : 450 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('NAME :',{
            x : 450 ,
            y : 450 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('RESCUE SITE :',{
            x : 20 ,
            y : 400 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('AGE :',{
            x : 350 ,
            y : 400 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('HEALTH CONDITION :',{
            x : 20 ,
            y : 350 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawRectangle({
            x : 10,
            y : 330,
            width : 7900,
            height : 5,
            color : '#000000'
          })
          .drawText('RESCUER/CALLER DETAIL',{
            x : 150 ,
            y : 300 ,
            fontWeight : 'bold',
            fontSize : 25,
            fontName : 'Roboto-Bold'
          })
          .drawText('CALLER NAME :',{
            x : 20 ,
            y : 250 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('CONTACT NO :',{
            x : 350 ,
            y : 250 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('CALLER ADDRESS :',{
            x : 20 ,
            y : 200 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('RESCUE TYPE :',{
            x : 20 ,
            y : 150 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
          })
          .drawText('RESCUER NAME :',{
            x : 20 ,
            y : 100 ,
            fontWeight : 'bold',
            fontSize : 20,
            fontName : 'Roboto-Bold'
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

        const PdfTest = ({navigation}) => {
                
            return (   
                <View style = {styles.container}>
                    <TouchableOpacity onPress = {() => generatePdf()}>
                    <Text style = {{fontFamily : 'Roboto-Regular'}}>Click</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate('PdfDis')}>
                    <Text style = {{marginTop : 20}}>Display PDF</Text>
                    </TouchableOpacity>
                    < Image style = {{marginTop : 20}} source = {require('../image/ngo.png')} />
                </View>
            );

            
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
  
});

export default PdfTest;
