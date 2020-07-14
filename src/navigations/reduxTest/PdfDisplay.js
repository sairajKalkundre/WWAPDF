import React from 'react';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import {
  StyleSheet,View,Text,Dimensions, TouchableOpacity,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';

  const PdfDisplay = () => {
            
              const dirs =   RNFetchBlob.fs.dirs.DownloadDir;
              const pdfPath = `${dirs}/hello.pdf`;
              const source = {uri:pdfPath};
              return (
              <View style = {styles.container}>
                  
                      <Pdf
                              source={source}
                              onLoadComplete={(numberOfPages,pdfPath)=>{
                                  console.log(`number of pages: ${numberOfPages}`);
                              }}
                              onPageChanged={(page,numberOfPages)=>{
                                  console.log(`current page: ${page}`);
                              }}
                              onError={(error)=>{
                                  console.log(error);
                              }}
                              onPressLink={(uri)=>{
                                  console.log(`Link presse: ${uri}`)
                              }}
                              style={styles.pdf}/>
                      </View>
             
            );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 25,
      },
      pdf: {
          flex:1,
          width:Dimensions.get('window').width,
          height:Dimensions.get('window').height,
      }
  });
  
  export default PdfDisplay;
  