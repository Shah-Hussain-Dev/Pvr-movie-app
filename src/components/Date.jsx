import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import moment from 'moment'

const Date = ({date,selected,onSelectDate}) => {
    const day = moment(date).format('ddd');

    const dayNumber = moment(date).format("D")
    const fullDate = moment(date).format("YYYY-MM-DD")

  return (
    <TouchableOpacity style={[styles.container,
    selected === fullDate && {backgroundColor:'orange'},
    ]}
    onPress={()=>onSelectDate(fullDate)}
    >
        <Text style={[styles.day,selected === fullDate && {color:'white',fontWeight:'500'}]}>{day}</Text>
        <View style={{height:10}}></View>
        <Text style={[styles.number,selected === fullDate && {color:'white',fontWeight:'500'}]}>{dayNumber}</Text>
    </TouchableOpacity>
  )
}

export default Date

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E0E0E0',
        borderRadius:10,
        borderColor:'#ddd',
        padding:10,
        width:70,
        height:70,
        elevation:5,
        marginHorizontal:6,
        marginVertical:10,
        justifyContent:'center',
        alignItems: 'center'
    },
    day:{
        fontSize:17,
        fontWeight:'500',
    },
    number:{
        fontSize:20,
        fontWeight:'500',
    }

})