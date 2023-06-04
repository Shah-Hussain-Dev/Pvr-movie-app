import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Calender from '../components/Calender';
import moment from 'moment';
import { malls } from '../data/data';
import { Place } from '../context/PlaceContext';

const MovieScreen = () => {
    const { selectedCity } = useContext(Place);

    const navigation = useNavigation()
    const route = useRoute()
    const [mall,setMall]= useState([])
    const today = moment().format('YYYY-MM-DD')
    const [selectedDate,setSeletedDate] = useState(today)
    useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:route.params.title,
      headerTitleStyle:{
       color:'gray'
      },
      headerStyle: {
        backgroundColor: "#f5f5f5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 0 },
        shadowRadius: 3,
        elevation: 4,
      },
    });
  }, []);
  return (
  <View>
      <ScrollView>
      <Calender selected={selectedDate} onSelectDate={setSeletedDate}/>
    </ScrollView>
    {malls.filter((item)=>item.place === selectedCity)
    .map((item)=>item.galleria.map((multiplex,index)=>
    <TouchableOpacity 
    onPress={()=>setMall(multiplex.name)}
    key={index} style={{marginHorizontal:20,marginVertical:10
    }}>
        <Text style={{fontSize:18,fontWeight:'500'}}>{multiplex.name}</Text>
        {mall.includes(multiplex.name) ? (
            <FlatList numColumns={3} 
            
            data={multiplex.showtimes} renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>navigation.navigate('TheaterScreen',{
                    name:route.params.title,
                    selectedData:selectedDate,
                    mall:mall,
                    showTime:item
                })}
                style={{borderColor:'green',borderWidth:2,padding:5,borderRadius:5,margin:10,width:80,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'900',letterSpacing:1,color:'green'}}>{item}</Text>
                </TouchableOpacity>
            )}/>
        ):null}
    </TouchableOpacity>
    ))}
  </View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})