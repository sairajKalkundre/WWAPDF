import React , {useState , useEffect}  from 'react';
import {View,Text,StyleSheet , FlatList} from 'react-native';
import { Searchbar , Card, ActivityIndicator} from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome5';

const All = ({route , navigation}) => {
    const[check , setCheck] = useState([]);
    const[search , setSearch] = useState('');
    const[filterDisplay , setFilterDisplay] = useState([]);
    const [loading , setLoading] = useState(true);
    const passKey = ({item}) => {
            navigation.navigate('Dcase', {
                id : item.key
            })
    }
     useEffect(() => {
                    database().ref('case')
                              .on('value',snapshot => {
                                                    let todoTest = [];
                                                        snapshot.forEach(function (childSnapshot){
                                                            var key = childSnapshot.key;
                                                            var cname = String(snapshot.child(key + '/caseno').val());
                                                            todoTest.push({text : cname , key : key})
                                                        });
                                                        setFilterDisplay(todoTest)
                                                        setCheck(todoTest)
                                            });
                                        // .then(response => {
                                        //         setLoading(false);
                                        // });    
            },[])

            const searchText = (e) => {
                setLoading(true);
                setSearch(e);
                
        }
            useEffect(() =>{
                const query = search.toLowerCase();
                console.log(query)
                if(query !== null){
                    const newCNo = check.filter((item) => item.text.toLowerCase().includes(query));
                    setFilterDisplay(newCNo);
                    setLoading(false)
                }
               
            },[search])
        
    return (
                
            <View style = {styles.container}>
                <View>
                    <Searchbar
                            style = {{marginTop : 15 ,marginLeft : 15 , marginRight : 40 , marginBottom : 15 ,height : 40, backgroundColor : '#282828'}}
                            theme = {{ colors : {text : 'white' , placeholder : 'white'}}}
                            placeholder="Search case no : eg. 1"
                            onChangeText = {e => searchText(e)}
                    />
                    <ActivityIndicator animating = {loading} style = {{position : "absolute" , alignSelf : 'flex-end' , top : 20 , right : 10}} size = 'small' color = '#fff'/>
                </View>
                <Text style = {{color : '#b1ff32' , margin : 15 , fontWeight : 'bold' , fontSize : 20}}>Case</Text>
                      
                <Card style = {{ margin : 5,backgroundColor : 'black'}}>
                <View style = {{marginTop : 5, marginLeft:40 , borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                   <FlatList
                        data = {filterDisplay}
                        renderItem = {({item}) => (
                            <ScrollView>
                                <TouchableOpacity onPress = {() => passKey({item})}>
                                <View style = {{flexDirection : 'row' }}>
                                    <Icon name= 'cat' size={30} color="#717D7E" style = {{margin : 8 }} />
                                    <Text style = {{color : 'white' , margin : 15 , fontWeight : 'bold' , fontSize : 17}}>Case No {item.text}</Text>
                                    <Icon name= 'arrow-right' size={15} color="#717D7E" style = {{marginRight : 15 ,marginTop: 15 ,marginLeft: 'auto' ,  alignContent : 'flex-end'}} />
                                </View>
                                </TouchableOpacity>
                                <View style = {{ marginLeft : 45, borderBottomColor : '#717D7E' , borderBottomWidth : 1}}/>
                           </ScrollView>
                          
                        )}
                        />                   
                 </Card>
            </View>
        )
}

const styles = StyleSheet.create({
        container : {
            backgroundColor : 'black',
            flex : 1 , 
        }
});

export default All;