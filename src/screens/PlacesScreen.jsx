import {
    FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../context/PlaceContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PlacesScreen = () => {
  const { selectedCity, setSelectedCity } = useContext(Place);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Change Location</Text>
          </TouchableOpacity>
        </>
      ),
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

  const places = [
    {
      id: "0",
      place: "Bangalore",
      image:
        "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "1",
      place: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      place: "Chennai",
      image:
        "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      place: "Delhi - NCR",
      image:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      place: "Hyderabad",
      image:
        "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      place: "Kolkata",
      image:
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      place: "Jaipur",
      image:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      place: "Lucknow",
      image:
        "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

const selectCityData = async(city)=>{
    setSelectedCity(city)
    // await AsyncStorage.setItem("city", city)
    setTimeout(()=>{
        navigation.navigate('HomeScreen')
    },800)
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Search Your City..." />
        <Ionicons name="search" size={24} color="black" />
      </View>
      <View style={styles.citiesContainer}>
        <Text style={styles.selectCityText}>Select Location</Text>
        <FlatList numColumns={2} columnWrapperStyle={{justifyContent:'space-between'}} data={places} renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>selectCityData(item.place)}>
                <ImageBackground  imageStyle={{borderRadius:8}} style={{width:160,height:100,marginTop:15}}
                 source={{uri:item.image}}>
                {selectedCity === item.place && (
                    <View style={styles.cardIcon}>
                 <Ionicons name="checkmark-circle" size={24} color="white" />
                 </View>
                )}
                    <Text style={styles.cardText}>{item.place}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )}/>
      </View>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "gray",
    marginLeft:5
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#dedede",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 50,
    marginVertical: 10,
  },
  citiesContainer: {
    marginHorizontal: 10,
  },
  selectCityText: {
    fontSize: 18,
    fontWeight:'bold'
  },
  cardText:{
    position:'absolute',bottom:10,left:10,color:'white',fontSize:20,
  },
  cardIcon:{
    position:'absolute',top:5,left:5,color:'white',fontSize:20,
  },
});
