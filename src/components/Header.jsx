import {  ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
const Header = () => {
   
  return (
    <View>
     <ImageBackground source={{uri:"https://w0.peakpx.com/wallpaper/342/837/HD-wallpaper-extraction-2-movie-chris-hemsworth.jpg"}}
     style={{height:200,resizeMode:'contain',alignItems:'center'}}
     >
     <Animatable.View  animation="slideInDown"
    duration={3000}  style={styles.headerCard} >
       <View>
       <Animatable.Text animation="zoomInUp" style={{fontSize:18,fontWeight:'900'}}>Now Showing</Animatable.Text>
        <Text style={{fontSize:15,marginVertical:3,color:'orange',fontWeight:'400'}}>In Cinemas near you</Text>

       </View>
      
        <TouchableOpacity style={styles.bookBtn}>
        <Text style={{fontSize:15,fontWeight:'700'}}>Explore Now</Text>
        </TouchableOpacity>
       
     </Animatable.View>

     </ImageBackground>
    </View>
  )
}

export default Header
10
const styles = StyleSheet.create({
    headerCard:{
        backgroundColor:'#fff',
        height:90,
        padding:10,
        zIndex:2,
        width:"90%",
        top:160,
        borderRadius:10,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    bookBtn:{
        backgroundColor:'orange',
        // padding:20,
        padding:10,
        borderRadius:50,
        elevation:4,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
    }
})