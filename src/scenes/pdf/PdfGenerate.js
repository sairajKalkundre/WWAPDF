import React , {useState, useEffect} from 'react';
import {View , ScrollView} from 'react-native';
import {Text , Provider , ActivityIndicator} from 'react-native-paper';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {DropDownDialog} from '_atoms';
import {TextInputPdf} from '_atoms';
import {DropDownButton} from '_atoms';
import {FailureDailog} from '_atoms';
import {SucessDialog} from '_atoms';
import auth from '@react-native-firebase/auth';

const PdfGenerate = ({navigation}) => {
      const [cno , setCno] = useState('');
      const[lat , setLat] = useState('');
      const[long , setLong] = useState('');
      const[spname , setSpname] = useState('');
      const[cname , setCname] = useState('');
      const[cpno , setCpno] = useState('');
      const[cadd , setcAdd] = useState('');
      const[rname , setRname] = useState('');
      const [city , setCity] = useState('City');
      const [oty , setOty] = useState('Operation Type');
      const [sc , setSc] = useState('Species Count');
      const [st , setSt] = useState('Species Type');
      const [rs , setRS] = useState('Rescue Site');
      const [age , setAge] = useState('Age');
      const [hc , setHC] = useState('Health Condition');
      const [rt , setRT] = useState('Rescue Type');
     
      const [dropData , setdropData] = useState([]);
      const [cityVis , setCityVis ] = useState(false);
      const [otyVis , setOtyVis ] = useState(false);
      const [scVis , setScVis ] = useState(false);
      const [stVis , setStVis ] = useState(false);
      const [rsVis , setRsVis ] = useState(false);
      const [ageVis , setAgeVis ] = useState(false);
      const [hcVis , setHcVis ] = useState(false);
      const [rtVis , setRtVis ] = useState(false);
      const[errorStatus , setEstatus] = useState({
        name : '',
        visib : false
      });
      const[sucessStatus , setSstatus] = useState(false);
      const [touchDisable , setTouch] = useState(false);
      const [loadUpdate , setUpdate] = useState(false);

      useEffect(() => {
        //start Listening
          const onValueChange = database().ref('/case/')
                    .on('value' , snapshot => {
                                      setCno(String(snapshot.numChildren() + 1));
                      });
        //Stop Listening
        return () => database().ref('/case/').off('value' , onValueChange);
      }
      ,[cno]);
      
      useEffect(() => {
        const watchId = Geolocation.watchPosition(
          pos => {
            setLat(String(pos.coords.latitude));
            setLong(String(pos.coords.longitude));
          }
        );
        return () => { Geolocation.clearWatch(watchId) };
      }, [lat, long]);
      
      const changeCallerName = (val) => {
          setCname(val);
      }
      const cityData = () => {
        setdropData([{name : 'Mumbai' , key :'Mumbai'} ,
                     {name : 'Navi-Mumbai' , key : 'Navi-Mumbai'},
                     {name : 'Thane' , key : 'Thane'},
                     {name : 'Yeoor' , key : 'Yeoor'},])
        setCityVis(true);
      }
      const otyData = () => {
        setdropData ([{name : 'Rescue' , key :'Rescue'} ,
                     {name : 'Seize' , key : 'Seize'}])
        setOtyVis(true);
      }
      const scData = () => {
        setdropData ([{name : '1' , key :'1'} ,
                      {name : '2' , key : '2'},
                      {name : '3' , key : '3'},
                      {name : '4' , key : '4'},
                      {name : '5' , key : '5'},
                    ])
        setScVis(true);
      }
      const stData = () => {
        setdropData ([{name : 'Aves' , key :'Aves'} ,
                      {name : 'Mammals' , key : 'Mammals'},
                      {name : 'Reptiles' , key : 'Reptiles'}
                    ])
        setStVis(true);
      }
      const rsData = () => {
        setdropData ([
                      {name: 'House', key: 'House'},
                      {name: 'Inside Two Wheeker', key: 'Inside Two Wheeker'},
                      {name: 'Inside Four Wheeler', key: 'Inside Four Wheeler'},
                      {name: 'Inside Heavy Vehicle', key: 'Inside Heavy Vehicle'},
                      {name: 'Construction Site', key: 'Construction Site'},
                      {name: 'Between Rocks', key: 'Between Rocks'},
                      {name: 'In Gardens', key: 'In Gardens'},
                      {name: 'Dunk', key: 'Dunk'},
                      {name: 'Lobby', key: 'Lobby'},
                      {name: 'Roadside', key: 'Roadside'},
                      {name: 'On Highway', key: 'On Highway'},
                      {name: 'In Swimming Pool', key: 'In Swimming Pool'},
                      {name: 'In Lake', key: 'In Lake'},
                      {name: 'In Pond', key: 'In Pond'},
                      {name: 'In Water Tank', key: 'In Water Tank'},
                      {name: 'Inside Housing Complex', key: 'Inside Housing Complex'},
                      {name: 'On the Tree', key: 'On the Tree'},
                      {name: 'Inside Hole', key: 'Inside Hole'}
                    ])
        setRsVis(true);
      }
      const ageData = () => {
        setdropData ([{name : 'Juvenile' , key :'Juvenile'} ,
                      {name : 'Adult' , key : 'Adult'},
                      {name : 'Sub-Adult' , key : 'Sub-Adult'}
                    ])
        setAgeVis(true);
      }
      const hcData = () => {
        setdropData ([{name : 'Fit to release' , key :'Fit to release'} ,
                      {name : 'Mildly Injured' , key : 'Mildly Injured'},
                      {name : 'Highly Injured' , key : 'Highly Injured'},
                      {name: 'Dehydrated', key: 'Dehydrated'}
                    ])
        setHcVis(true);
      }
      const rtData = () => {
        setdropData ([{name : 'Solo' , key :'Solo'} ,
                      {name : 'Co-Rescue' , key : 'Co-Rescue'},
                      {name : 'Team' , key : 'Team'}
                    ])
        setRtVis(true);
      }
      const validation = () => {
        if(city === 'City'){
          setEstatus({visib : true , name : 'City'})
        }else if(oty === 'Operation Type') {
          setEstatus({visib : true , name : 'Operation Type'})
        }else if(lat === ''){
          setEstatus({visib : true , name : 'Latitude'})
        }else if(long === ''){
          setEstatus({visib : true , name : 'Longitude'})
        }else if(sc === 'Species Count'){
          setEstatus({visib : true , name : 'Species Count'})
        }else if(st === 'Species Type'){
          setEstatus({visib : true , name : 'Species Type'})
        }else if(rs === 'Rescue Site'){
          setEstatus({visib : true , name : 'Rescue Site'})
        }else if(age === 'Age'){
          setEstatus({visib : true , name : 'Age'})
        }else if(hc === 'Health Condition'){
          setEstatus({visib : true , name : 'Health Condition'})
        }else if(spname === ''){
          setEstatus({visib : true , name : 'Specie Name'})
        }else if(cname === ''){
          setEstatus({visib : true , name : 'Caller Name'})
        }else if(cpno === ''){
          setEstatus({visib : true , name : 'Caller Phone No'})
        }else if(cadd === ''){
          setEstatus({visib : true , name : 'Caller Address'})
        }else if(rt === 'Rescue Type'){
          setEstatus({visib : true , name : 'Rescue Type'})
        }else if(rname === ''){
          setEstatus({visib : true , name : 'Rescuer Name'})
        }else{
          setTouch(true);
          setUpdate(true);
          uploadData();
        }
      }
      const uploadData = () => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        var dateFormat = date + '/' + month + '/' + year
        var timeFormat = hours + ':' + min + ':' + sec
        const user = auth().currentUser.uid;
        const pushId = database().ref('/case')
                                   .push();
              pushId.set({
                date: dateFormat , 
                time : timeFormat ,
                userId : user ,
                caseno : cno,
                city : city,
                operationType : oty,
                latitude : lat,
                longitude : long,
                speciesCount : sc,
                species : st,
                rescueSite : rs ,
                age : age,
                healthCondition : hc,
                speciename : spname ,
                callername : cname,
                callercno : cpno,
                calleradress : cadd,
                rescueType : rt,
                rescuername : rname
              })
              .then(() => {
                            setUpdate(false)
                            setSstatus(true)});
      }
      React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <View style = {{flexDirection : 'row' , marginRight : 10}}>
                <ActivityIndicator animating = {loadUpdate} style = {{marginRight : 10}}  size = 'small' color = '#fff'/>
                <TouchableOpacity disabled={touchDisable} onPress = {() => validation()}style = {{alignItems : 'center'}}>
                    <Icon name = 'arrow-up' color = 'white' size = {12}></Icon>
                    <Text style ={{color : 'white'}}>Upload</Text>
                </TouchableOpacity>
            </View>
          )
        });
      }, [city , oty , lat , long , sc , st , rs ,age , hc , spname , cname , cpno , cadd , rt , rname , touchDisable , loadUpdate]);
       
    return (
        <View style = {{backgroundColor : '#121212' , flex : 1}}>
            <Provider>
              <FailureDailog name = {errorStatus.name} visib = {errorStatus.visib} ok = {() => setEstatus({visib : false})}/>
              <SucessDialog visib = {sucessStatus} ok = {() => {
                                                                setTouch(false)
                                                                setSstatus(false)}}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setCity(val)} 
                              dropvalue = {city} name = 'City' dvis = {cityVis} 
                              ok = {() => setCityVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setOty(val)} 
                              dropvalue = {oty} name = 'Operation Type' dvis = {otyVis} 
                              ok = {() => setOtyVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setSc(val)} 
                              dropvalue = {sc} name = 'Species Count' dvis = {scVis} 
                              ok = {() => setScVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setSt(val)} 
                              dropvalue = {st} name = 'Species Type' dvis = {stVis} 
                              ok = {() => setStVis(false)}/>
              <DropDownDialog style = 'yes' data = {dropData} setValue = {(val) => setRS(val)} 
                              dropvalue = {rs} name = 'Rescue Site' dvis = {rsVis} 
                              ok = {() => setRsVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setAge(val)} 
                              dropvalue = {age} name = 'Age' dvis = {ageVis} 
                              ok = {() => setAgeVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setHC(val)} 
                              dropvalue = {hc} name = 'Health Condition' dvis = {hcVis} 
                              ok = {() => setHcVis(false)}/>
              <DropDownDialog data = {dropData} setValue = {(val) => setRT(val)} 
                              dropvalue = {rt} name = 'Rescue Type' dvis = {rtVis} 
                              ok = {() => setRtVis(false)}/>
                <ScrollView>
                  <TextInputPdf lab = 'Case No :' val = {cno} edit = {true}/>
                  <DropDownButton value = {city} press = {() => cityData()}/>
                  <DropDownButton value = {oty} press = {() => otyData()}/>
                  <TextInputPdf lab = 'Latitude :' val = {lat} edit = {false}/>
                  <TextInputPdf lab = 'Longitude :' val = {long} edit = {false}/>
                  <DropDownButton value = {sc} press = {() => scData()}/>
                  <DropDownButton value = {st} press = {() => stData()}/>
                  <DropDownButton value = {rs} press = {() => rsData()}/>
                  <DropDownButton value = {age} press = {() => ageData()}/>
                  <DropDownButton value = {hc} press = {() => hcData()}/>
                  <TextInputPdf changetxt = {(val) => {setSpname(val)}} lab = 'Species :' val = {spname} edit = {true}/>
                  <TextInputPdf changetxt = {changeCallerName} lab = 'Caller Name :' val = {cname} edit = {true}/>
                  <TextInputPdf changetxt = {(val) => {setCpno(val)}} lab = 'Caller Phone No :' val = {cpno} edit = {true}/>
                  <TextInputPdf changetxt = {(val) => {setcAdd(val)}} lab = 'Caller Address :' val = {cadd} edit = {true}/>
                  <DropDownButton value = {rt} press = {() => rtData()}/>
                  <TextInputPdf changetxt = {(val) => {setRname(val)}} lab = 'Rescuer Name :' val = {rname} edit = {true}/>
                </ScrollView>
           </Provider>
                  
        </View>
  )};
 export default PdfGenerate;
      