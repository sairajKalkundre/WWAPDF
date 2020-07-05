import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar,Text, Button, Card, Title, Paragraph , Divider } from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'

const DashBoard = ({navigation}) => {

    const nextPage = () => {
        auth().onAuthStateChanged ((user) => {
            if(user) {
                navigation.navigate('PDF')
            }
            else {
                navigation.navigate('OTP')
            }
        })
        }

    const adminPage = () => {
        navigation.navigate('AllCase')
        //auth().signOut().then(() => console.log('User signed Out'));
    }
        return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style = {styles.container1}>
                            <Card style = {{marginLeft : 10 , marginRight : 10,backgroundColor : '#282828' , borderRadius : 12}}>
                                <Card.Title titleStyle = {{color: 'white' , fontSize : 15}} title="Navigate"/>
                                    <View style = {styles.topCardDesign} > 
                                        <ProgressCircle
                                                    percent={0}
                                                    radius={35}
                                                    borderWidth={1}
                                                    color="white"
                                                    shadowColor="#999"
                                                    bgColor="black">
                                                    <Icon name= 'cat' size={20} color="white" />
                                                    <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Rescue</Text>
                                            </ProgressCircle>
                                    
                                        <ProgressCircle
                                                percent={0}
                                                radius={35}
                                                borderWidth={1}
                                                color="white"
                                                shadowColor="#999"
                                                bgColor="black">
                                                <Icon name = 'comment-alt' size={20} color="white" />
                                                <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Chat</Text>
                                        </ProgressCircle>

                                        <ProgressCircle
                                                percent={0}
                                                radius={35}
                                                borderWidth={1}
                                                color="white"
                                                shadowColor="#999"
                                                bgColor="black">
                                                <Icon name = 'map-pin' size={20} color="white" />
                                                <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Map</Text>
                                        </ProgressCircle>

                                        <ProgressCircle
                                                percent={0}
                                                radius={35}
                                                borderWidth={1}
                                                color="white"
                                                shadowColor="#999"
                                                bgColor="black">
                                                <Icon name = 'donate' size={20} color="white" />
                                                <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Donate</Text>
                                        </ProgressCircle>
                                    </View>
                            </Card>
                        </View>
                        <View style = {styles.container2}>
                            <Card style = {{marginLeft : 10 , marginRight : 10, backgroundColor : '#000' , borderRadius : 12}}>
                             <View style = {styles.cardDesign}> 
                              <Card.Title titleStyle = {{color: 'white' , fontSize : 15}}  title="Rescued History" />
                                <ProgressCircle
                                            percent={60}
                                            radius={100}
                                            borderWidth={10}
                                            color="#b1ff32"
                                            shadowColor="#202020"
                                            bgColor="black">
                                            <Icon name= 'dog' size={30} color="white" />
                                            <Text style={{ marginTop : 20 , fontSize: 25 , color : 'white' }}>60 </Text>
                                            <Text style={{ fontSize: 12 , color : 'white' }}>Rescued Today </Text>
                                    </ProgressCircle>
                                    <View style = {{marginTop : 20 , flexDirection : 'row' , justifyContent : 'space-between' }}>
                                        <View style = {{flexDirection : 'column' , marginRight : 20}}>
                                            <Text style={{ fontWeight : 'bold' , marginTop : 10 , fontSize: 18 , color : 'white' ,}}>Total Rescued</Text>
                                            <Text style={{  marginTop : 10 , fontSize: 18 , color : 'white', alignSelf : 'center' , height : 30 }}>40 </Text>
                                        </View>
                                        <View style = {{flexDirection : 'column' }}>
                                            <Text style={{ fontWeight : 'bold' , marginTop : 10 , fontSize: 18 , color : 'white' ,}}>Total Released</Text>
                                            <Text style={{  marginTop : 10 , fontSize: 18 , color : 'white', alignSelf : 'center' , height : 30 }}>40 </Text>
                                        </View>
                                    </View>
                                </View>
                        </Card>
                        </View> 
                        <View style = {styles.container3}>
                            <Card style = {{marginLeft : 10 , marginRight : 10, backgroundColor : '#282828' ,borderRadius : 12}}>
                                <Card.Title titleStyle = {{color: 'white' , fontSize: 15 }} title="Navigate"/>
                                    <View style = {styles.topCardDesign} > 
                                    <TouchableOpacity onPress = {() => nextPage()}>
                                        <View style = {styles.squareShapeView}>
                                                    <Icon name= 'user-md' size={30} color="white" />
                                                    <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Rescuer</Text>
                                            </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress = {() => adminPage()}>
                                        <View style = {styles.squareShapeView}>
                                                <Icon name = 'users-cog' size={30} color="white" />
                                                <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Admin</Text>
                                        </View>
                                    </TouchableOpacity>
                                        <View style = {styles.squareShapeView}>
                                                <Icon name = 'chart-line' size={30} color="white" />
                                                <Text style={{ marginTop : 3, fontSize: 12 , color : 'white' }}>Analysis</Text>
                                        </View>
                                    </View>
                            </Card>
                        </View>

                    </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
            flex : 1,
            backgroundColor : 'black',
    },
    container1 : {
        marginTop : 10
    },
    container2 : {
        marginTop : 10
    },
    container3 : {
        marginTop : 10,
        marginBottom : 20
    },
    cardDesign : {
        alignItems : 'center',
        
    },
    topCardDesign : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 5
    },
    squareShapeView : {
        width : 80,
        height : 80,
        alignItems : 'center',
        borderColor : 'white',
        justifyContent : 'center',
        backgroundColor : 'black',
        borderRadius : 10
    }
    });

export default DashBoard;