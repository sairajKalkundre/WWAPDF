import React from 'react';
import {View ,Text,Image , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, TextInput}from 'react-native-paper';

const FeedUI = (props) => {
    var width =  Dimensions.get('window').width  * 0.80
    return (
        <View style = {{flexDirection : 'row'}}>
            <View style = {{marginLeft : 10 ,marginTop : 10}}>
                <Avatar.Image size = {45} source = {{uri : props.profileImg}}  />
            </View>
            <View style = {{left : 8}} >
                <Text style = {{color : 'white' , marginTop : 10 , fontSize : 18 , fontWeight : 'bold'}}>{props.userName}</Text>
                <Icon name = 'ellipsis-h' color = '#ABABAB' size = {20} style = {{alignSelf : 'flex-end' , position : 'absolute' , marginTop : 20}}></Icon>
                    <Text style = {{color : '#BDC3C7' ,top : 3, fontSize : 14,marginBottom : 15 }}>{props.feedLocation}</Text>
                    <View style={{  
                                    width: width,
                                    height: width * 0.7,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                    borderTopRightRadius: 15,
                                    borderTopLeftRadius: 15,
                                    overflow: 'hidden',
                                    }}>
                        <Image style={{width:width,height: width * 0.7 }} source = {{uri : props.feedImage}}/>
                    </View>
                    <View style = {{flexDirection : 'row'}}>
                            <Icon name = 'heart' color = 'red' size = {20} style = {{marginTop : 15}}></Icon>
                            <Text style = {{color : 'white' , marginTop : 17 , marginLeft : 7 , fontWeight : 'bold'}}>124</Text>
                            <Icon name = 'comment' color = '#fff' size = {20} style = {{marginLeft : 25 , marginTop : 15 }}></Icon>
                            <Text style = {{color : 'white' , marginTop : 17 , marginLeft : 7 , fontWeight : 'bold'}}>28</Text>
                            <Icon name = 'bookmark' color = '#fff' size = {20} style = {{marginLeft : 'auto',marginTop : 15 , marginRight : 10 }}></Icon>
                    </View>
                    <View style = {{width :width}}>
                        <Text style = {{fontSize : 16 ,color : 'white' , marginTop : 5 }}>{props.feedDesc}</Text>
                        <TextInput placeholder = 'comment' placeholderTextColor = 'white' 
                                theme = {{colors : {text : 'white',primary : '#202020' ,placeholder :'white',
                                background : '#202020'}}}
                                style = {{borderTopLeftRadius : 10 , borderTopRightRadius : 10 , borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 ,marginTop : 5 ,height : 40 }}/>
                        <Text style = {{color : '#BDC3C7' ,top : 3, fontSize : 12,marginBottom : 15 }}>2 days ago</Text>
                    </View>
            </View>
        </View>
)
}

export default FeedUI;