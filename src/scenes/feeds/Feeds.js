import React,{useState , useEffect} from 'react';
import {View , StyleSheet , Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Chip}from 'react-native-paper';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { DrawerActions } from '@react-navigation/native';
import {FeedUI} from '_atoms';

const Feeds = ({navigation}) => {

    const [uName , setName] = useState('');
    const [url , setUrl] = useState('');
    const [desig , setDesig] = useState('');
    const [feedDetail , setfeedDetail] = useState([]);
    var width =  Dimensions.get('window').width  * 0.78
    const user = auth().currentUser;

    useEffect(() => {
        if(user){
            const profile = database().ref('usersreact/' + user.uid)
                                        .on('value' , snapshot => {
                                            setName(snapshot.child('userName').val())
                                            setUrl(snapshot.child('imgurl').val())
                                            setDesig(snapshot.child('designation').val())
                                        });
                                    return () => database().ref('usersreact/' + user.uid)
                                                    .off('value' , profile);
             }else{
                 navigation.navigate('ProfileDetails')
             }
           
             },[]);

    useEffect(() => {
            const feedD = database().ref('feeds/')
                                    .on('value' , snapshot => {
                                        let feedTest = [];
                                        snapshot.forEach(function (childSnapshot){
                                                var key = childSnapshot.key;
                                                var dsc = snapshot.child(key + '/des').val();
                                                var furl = snapshot.child(key + '/feedUrl').val();
                                                var loc = snapshot.child(key +'/location').val();
                                                var uimg = snapshot.child(key + '/userImg').val();
                                                var uname = snapshot.child(key + '/username').val();
                                                feedTest.push({des : dsc , feedUrl : furl , location : loc , userImg : uimg , username : uname})
                                        });
                                        setfeedDetail(feedTest)
                                        console.log(feedDetail)
                                    });
                                return () => database().ref('feed/')
                                                .off('value' , feedD);
                 },[]);
            const addFeedActivity = () => {
                    navigation.navigate('Add Feed' , {
                        rName : uName ,
                        rescuerDesignation : desig,
                        rescuerImage : url
                    });
            }
            React.useLayoutEffect(() => {
                navigation.setOptions({
                headerRight: () => (
                    <View style = {{top : 2 ,marginRight : 10}}>
                        <TouchableOpacity onPress = {() => addFeedActivity()} style = {{alignItems : 'center'}}>
                            <MaterialCommunityIcons name = 'camera-outline' color = '#BDC3C7' size = {25}></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                ),
                headerLeft: () => (
                    <View style = {{top : 2 ,marginLeft : 10}}>
                        <TouchableOpacity onPress = {() => navigation.dispatch(DrawerActions.toggleDrawer())} style = {{alignItems : 'center'}}>
                            <MaterialCommunityIcons name = 'menu' color = '#BDC3C7' size = {25}></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                )
                });
            }, []);

    return (

        <View style = {styles.container}>   
            <View style = {{flexDirection : 'row' ,  marginTop : 10 ,marginBottom : 10}}>
                <Chip selectedColor = 'black' selected  = {true} textStyle = {{color : 'black'}} style = {{ backgroundColor : '#A6ACAF' , marginLeft : 10}}>Aves</Chip>
                <Chip textStyle = {{color : 'white'}} style = {{ backgroundColor : '#282828', marginLeft : 10 }}>Mammals</Chip>
                <Chip textStyle = {{color : 'white'}} style = {{ backgroundColor : '#282828' , marginLeft : 10}}>Reptiles</Chip>
            </View>
            <FlatList 
                    data = {feedDetail}
                    renderItem = {({item , index}) =>{
                        return (
                            <FeedUI profileImg = {item.userImg}  
                                    userName = {item.username}
                                    feedLocation = {item.location}
                                    feedImage = {item.feedUrl}
                                    feedDesc = {item.des}/>
                        );
                    }
                    }
                    />
             
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex : 1 ,
        backgroundColor : 'black'
    }
});

export default Feeds;
