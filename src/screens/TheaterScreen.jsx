import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
const TheaterScreen = () => {
    const navigation=useNavigation();
    const route = useRoute();
    const [selectedSeats,setSelectedSeats] = useState([]);
    const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);
    useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>{route.params.mall}</Text>
          </TouchableOpacity>
        </>
      ),
      headerTitle:"",
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

  const handleSeat = (row,seat)=>{
    const isSelected = selectedSeats.some((selectedSeat)=>selectedSeat.row === row && selectedSeat.seat ===seat)
    console.log("row",row,"seat",seat)
    if(isSelected){
      setSelectedSeats((prevState)=>
      prevState.filter((selectedSeat)=>selectedSeat.row !== row || selectedSeat.seat !== seat)
      )
    }else{
      setSelectedSeats((prevState)=>[...prevState,{row,seat}])
    }
  }
  console.log(selectedSeats)
  const renderSeats = ()=>{
   return rows.map((row,rowIndex)=>{
    return(
      <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}} key={rowIndex}>
        <View style={{width:40,marginRight:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontWeight:'900',fontSize:20}}>{row.row}</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          {row.seats.map((seat,index)=>(
            <Pressable key={index}  style={[styles.seat, 
            selectedSeats.some((selectedSeat)=>selectedSeat.row === row.row && selectedSeat.seat ===seat.seat) && styles.selectedSeat,seat.bookingStatus ==="disabled" && styles.bookedSeat]} onPress={()=>handleSeat(row.row,seat.seat)}>
              <Text style={{fontWeight:'900',fontSize:20}}>{seat.seat}</Text>
            </Pressable>
          ))}
          </View>
        </ScrollView>
      </View>
    )
   })
  }

  const pay =()=>{
const updatedRows = [...rows];
selectedSeats.forEach(seat=>{
  const rowIndex = updatedRows.findIndex((row)=>row.row ===seat.row);
  console.log(rowIndex)
  const seatIndex = updatedRows[rowIndex].seats.findIndex((s)=>s.seat === seat.seat)
console.log(seatIndex)
  updatedRows[rowIndex].seats[seatIndex].bookingStatus ="disabled";
})
  }
  return (
    <View>
      <Text  style={{marginTop:10,textAlign:'center',fontSize:15,textTransform:'uppercase',color:'gray'}}> Screen this way</Text>
      <Text  style={{marginTop:10,textAlign:'center',fontSize:15,textTransform:'uppercase',color:'gray',marginBottom:5}}> Classic(240)</Text>
      {renderSeats()}
     <View style={{justifyContent:'space-between',}}>
      <View>
      <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',gap:20,marginTop:40,backgroundColor:'#d3d3d3',paddingVertical:10}}>
        <View style={{flexDirection:"column",justifyContent:'center',alignItems:'center',gap:6}}>
          <TouchableOpacity style={{backgroundColor:'yellow',height:30,width:30,borderRadius:5,elevation:4}}></TouchableOpacity>
          <Text>Selected</Text>
        </View>
        <View style={{flexDirection:"column",justifyContent:'center',alignItems:'center',gap:6}}>
        <TouchableOpacity style={{backgroundColor:'white',height:30,width:30,borderRadius:5,elevation:4}}></TouchableOpacity>
          <Text>Vacant</Text>
        </View>
        <View style={{flexDirection:"column",justifyContent:'center',alignItems:'center',gap:6}}>
        <TouchableOpacity style={{backgroundColor:'gray',height:30,width:30,borderRadius:5,elevation:4}}></TouchableOpacity>
          <Text>Occupied</Text>
        </View>
      </View>
      </View>
      <View style={{}}>
        <TouchableOpacity style={{height:70,backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'white'}}> Seat Selected</Text>
          <Pressable onPress={pay} style={{fontSize:20,color:'white'}}> 
          <Text>PAY- 100</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
     </View>
    </View>
  )
}

export default TheaterScreen

const styles = StyleSheet.create({
    headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "gray",
    marginLeft:5
  },
  seat:{
    width:40,
    height:40,
    borderRadius:4,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:"lightgrey",
    alignItems: "center",
    justifyContent:"center",
    flexDirection:'row',
    margin:5,
  },
  selectedSeat:{
    backgroundColor:'yellow', 
    borderColor:'transparent',
    elevation:3
  },
  bookedSeat:{
    backgroundColor:'#989898',
    borderColor:'transparent',
  }
})