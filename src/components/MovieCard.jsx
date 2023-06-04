import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ item,id}) => {
const navigation = useNavigation()
  return (
    <Animatable.View style={{marginTop:60,}}
    animation="slideInDown"
    duration={2000}
    delay={id*300}
    
    >
      <Pressable
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 20,
          marginVertical: 10,
          justifyContent: "center",
          height: Dimensions.get("window").height / 2.5,
          width: (Dimensions.get("window").width - 80) / 2,
        }}
      >
        <Image  source={{
            uri:`https://image.tmdb.org/t/p/original/${item?.poster_path}`}}
                style={{width:"100%", height:"70%",resizeMode:'contain',borderRadius:5}}
            />

          <View>
          <Text style={{marginTop:6,fontSize:15,fontWeight:'400'}}>{item.title.substring(0,20)}</Text>
          <Text style={{color:'gray',marginTop:4,fontSize:15,fontWeight:'400'}}>U/A • {item.original_language}</Text>
          </View>
          <TouchableOpacity style={styles.bookBtn} onPress={()=>navigation.navigate('MovieScreen',{title:item.title})}>
            <Text style={{fontSize:15,fontWeight:'700'}}>Book</Text>
        </TouchableOpacity>
      </Pressable>

    </Animatable.View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
    bookBtn:{
        backgroundColor:'orange',
        // padding:20,
        padding:10,
        borderRadius:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        elevation:4,
        marginTop:10,

    }
});
