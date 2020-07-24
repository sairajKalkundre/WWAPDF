import React,{useState , useEffect}  from 'react';
import {View,Text,StyleSheet,FlatList,Dimensions} from 'react-native';
import {ActivityIndicator,Searchbar , Divider} from 'react-native-paper';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

const AuthFooter = () => {
    const[check , setCheck] = useState([]);
    const[search , setSearch] = useState('');
    const[filterDisplay , setFilterDisplay] = useState([]);
    const [progressLoading , setprogressLoading] = useState(true);
    const user = auth().currentUser.uid;
    console.log(user);
    useEffect(() => {
            database().ref('case')
                       .on('value' , snapshot =>{
                         let todoTest = [];
                           snapshot.forEach(function (childSnapshot){
                               var key = childSnapshot.key;
                               var userId = snapshot.child(key + '/userId')
                               if(userId.val() === user)
                               {
                                    var caseno = String(snapshot.child(key + '/caseno').val());
                                    var sname = snapshot.child(key + '/speciename').val();
                                    var cname = snapshot.child(key + '/callername').val();
                                    todoTest.push({text : caseno , key : key , specie : sname , caller : cname})
                               }
                           });
                           const len = todoTest.length % 3;
                            for(i=0; i<=len;i++) {
                                todoTest.push({text: "", key: ""})
                            }
                           setFilterDisplay(todoTest)
                           setCheck(todoTest)
                          // console.log(todoTest)
                       });
     },[])

    const searchText = (e) => {
        setprogressLoading(true);
        setSearch(e);
        
    }
    useEffect(() =>{
            const query = search.toLowerCase();
            console.log(query)
            if(query !== null){
                const newCNo = check.filter((item) => item.text.toLowerCase().includes(query));
                const len = newCNo.length % 3;
                for(i=0; i<=len;i++) {
                newCNo.push({text: "", key: ""})
                }
                setFilterDisplay(newCNo);
                setprogressLoading(false)
            }
        },[search])

    return (
        <View>
            <Searchbar
                style = {{ disabled : 'true' , marginTop : 15 ,marginLeft : 20 , marginRight : 40 ,height : 40, backgroundColor : '#282828'}}
                theme = {{ colors : {text : 'white' , placeholder : 'white'}}}
                placeholder="Search"
                onChangeText = {e => searchText(e)}/>
                <ActivityIndicator animating = {progressLoading} style = {{position : "absolute" , alignSelf : 'flex-end' , top : 20 , right : 10}} size = 'small' color = '#fff'/>
                    <FlatList
                        marginTop = {10}
                        backgroundColor = 'black'
                        numColumns={3}
                        data = {filterDisplay}
                        renderItem = {({item , index}) => {
                            const { text } = item;
                            const { specie } = item ; 
                            const { caller } = item ;
                            if(text === "") return <View style={{flex: 1}}/>;
                            return(
                                <View style={[{flex : 1  , height: 150,margin : 2,
                                        borderRadius : 10, 
                                        alignItems : 'stretch',
                                        backgroundColor : '#222324',
                                        borderWidth : 1,
                                        borderColor : '#484848',
                                        marginBottom : 5,
                                        justifyContent : 'space-between'},
                                        index % 3 !==0 ? {marginLeft : 5} : null
                                        ]}>
                                        <View style={{marginLeft : 5 , marginRight:8}}>
                                            <Text style = {{margin : 5 , fontSize : 20 , alignSelf : 'center' ,color : '#30E584',fontWeight : 'bold'}}>{text}</Text>
                                            <View style = {{marginRight : 3 , marginLeft : 1 ,borderBottomColor : '#717D7E' , borderBottomWidth : 1 }}/>
                                            <View style = {{flexDirection : 'row' ,margin : 5 }}>
                                                <Icon size = {9} name = 'chevron-circle-right' color = 'white' style = {{marginLeft : 5 , marginTop : 4}} />
                                                <Text style = {{marginLeft : 2  ,color : 'white'}}>{specie}.</Text>
                                            </View>

                                            <View style = {{flexDirection : 'row' , margin : 5}}>
                                                <Icon size = {9}  name = 'chevron-circle-right' color = 'white' style = {{marginLeft : 5 , marginTop : 3}} />
                                                <Text style = {{marginLeft : 2 ,color : 'white'}}>{caller}.</Text>
                                            </View>
                                        </View>
                                       
                                </View>
                                );
                        }}/> 
        </View>
    )
}

export default AuthFooter;