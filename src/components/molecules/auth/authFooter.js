import React,{useState , useEffect}  from 'react';
import {View,Text,StyleSheet,FlatList,Dimensions} from 'react-native';
import {ActivityIndicator,Searchbar} from 'react-native-paper';
import database from '@react-native-firebase/database';

const AuthFooter = () => {
    const[check , setCheck] = useState([]);
    const[search , setSearch] = useState('');
    const[filterDisplay , setFilterDisplay] = useState([]);
    const [progressLoading , setprogressLoading] = useState(true);

    useEffect(() => {
        database().ref('case')
                       .once('value')
                       .then(snapshot =>{
                       let todoTest = [];
                           snapshot.forEach(function (childSnapshot){
                               var key = childSnapshot.key;
                               var cname = String(snapshot.child(key + '/caseno').val());
                               todoTest.push({text : cname , key : key})
                           });
                           setFilterDisplay(todoTest)
                           setCheck(todoTest)
                          // console.log(todoTest)
                       })
                   .then(response => {
                           setprogressLoading(false);
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
                style = {{ disabled : 'true' , marginTop : 15 ,marginLeft : 25 , marginRight : 40 ,height : 40, backgroundColor : '#282828'}}
                theme = {{ colors : {text : 'white' , placeholder : 'white'}}}
                placeholder="Search"
                onChangeText = {e => searchText(e)}/>
                <ActivityIndicator animating = {progressLoading} style = {{position : "absolute" , alignSelf : 'flex-end' , top : 20 , right : 10}} size = 'small' color = '#fff'/>
                    <FlatList
                        marginTop = {10}
                        backgroundColor = 'black'
                        numColumns={3}
                        data = {filterDisplay}
                        renderItem = {({item}) => {
                            const { text } = item;
                            if(text === "") return <View style={{flex: 1}}/>;
                            return(
                                <View style={{flex : 1  , height: 100,margin : 2,
                                        borderRadius : 10, 
                                        backgroundColor : '#202020',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        }}>
                                <Text style = {{color : 'white'}}>{text}</Text>
                                </View>
                                );
                        }}/> 
        </View>
    )
}

export default AuthFooter;