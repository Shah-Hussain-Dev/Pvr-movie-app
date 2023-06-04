import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../context/PlaceContext";
import { data, genres, languages } from "../data/data";
import MovieCard from "../components/MovieCard";
import * as Animatable from "react-native-animatable";

import Header from "../components/Header";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState();
  const [selectedFilter,setSeletedFilter] = useState();
  const { selectedCity } = useContext(Place);
  const [location,setLocation] = useState();
  const [sortedData,setSortedData] = useState(data);

  const applyFilterData = (filter)=>{
    setModalVisible(false);
    return setSortedData(sortedData.filter((item)=>item.original_language === filter));
  }

  const getLocation =async()=>{
    const city = await AsyncStorage.getItem("city")
    setLocation(city)
  }
  useEffect(() => {
    getLocation();
  }, [location])
  
  useLayoutEffect(() => {
   
    navigation.setOptions({
      headerLeft: () => <Text style={{fontSize:20,fontWeight:'bold'}}>Hello Shah!</Text>,
      headerStyle: {
        backgroundColor: "#f5f5f5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 0 },
        shadowRadius: 3,
        elevation: 4,
      },
      headerRight: () => (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <TouchableOpacity>
            <Ionicons name="notifications-outline" color="black" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PlacesScreen")}>
            <Ionicons name="ios-location-outline" color="black" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PlacesScreen")}>
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={styles.headerText}
            >
              <Text>{location}</Text>
            </Animatable.Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ),
    });
  }, [selectedCity]);

  return (
    <View style={{flex:1}}>
      <FlatList
        numColumns={2}
        ListHeaderComponent={Header}
        data={sortedData}
        renderItem={({ item, index }) => (
          <MovieCard item={item} key={index} id={index} />
        )}
      />
     
      <BottomModal
        onBackDropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
           <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:20}}>
           <TouchableOpacity
              style={styles.filterBtn}
              onPress={()=>applyFilterData(selectedFilter)}
            >
              <Text style={{textAlign:'center',fontSize:18, textTransform:'uppercase',fontWeight:'bold'}}>Apply</Text>
            </TouchableOpacity>
           {selectedFilter&& ( <TouchableOpacity
              style={[styles.filterBtn,{backgroundColor:'black',}]}
              onPress={()=>{
                setSeletedFilter();
                setModalVisible(false);
                setSortedData(data)
              }}
            >
              <Text style={{textAlign:'center',fontSize:18, textTransform:'uppercase',fontWeight:'bold',color:'white'}}>Reset</Text>
            </TouchableOpacity>)}
           </View>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Filters" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        visible={modalVisible}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <Text
            style={{ paddingVertical: 5, fontWeight: "500", marginTop: 10, color:'black',
                    fontWeight:'bold',
                    fontSize:20,}}
          >
            Languages
          </Text>
          <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
           {languages.map((item,index)=>(
            selectedFilter === item.language ? (
              <TouchableOpacity onPress={()=>setSeletedFilter()}
             key={index}
                style={{
                  margin: 5,
                  backgroundColor:'orange',
                  elevation:3,
                  paddingVertical: 5,
                  borderRadius: 25,
                  paddingHorizontal: 11,
                }}
              >
                <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:16,
                    
                    }}>{item.language}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={()=>setSeletedFilter(item.language)}
             key={index}
                style={{
                  margin: 5,
                  borderColor: "orange",
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 25,
                  paddingHorizontal: 11,
                }}
              >
                <Text style={{
                    color:'orange',
                    fontWeight:'bold',
                    fontSize:16,
                    
                    }}>{item.language}</Text>
              </TouchableOpacity>
            )
           ))}
          </View>
          <Text
            style={{ paddingVertical: 5, fontWeight: "500", marginTop: 10, color:'black',
                    fontWeight:'bold',
                    fontSize:20}}
          >
            Genres
          </Text>
          <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
           {genres.map((item,index)=>(
            <TouchableOpacity 
             key={index}
                style={{
                  margin: 5,
                  borderColor: "orange",
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 25,
                  paddingHorizontal: 11,
                }}
              >
                <Text style={{
                    color:'orange',
                    fontWeight:'bold',
                    fontSize:16,
                    
                    }}>{item.genres}</Text>
              </TouchableOpacity>
           ))}
          </View>
        </ModalContent>
      </BottomModal>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          backgroundColor: "orange",
          position: "absolute",
          bottom: 20,
          elevation: 3,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  filterBtn:{
    marginVertical: 10,
    backgroundColor:'orange',
    width:Dimensions.get('screen').width /2 -40,
    borderRadius:50,
    paddingVertical:10,
    paddingHorizontal:20,
  
    elevation:4,
  }
});
