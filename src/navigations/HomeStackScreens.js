import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlacesScreen from '../screens/PlacesScreen';
import MovieScreen from '../screens/MovieScreen';
import TheaterScreen from '../screens/TheaterScreen';


const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:''}}/>
        <HomeStack.Screen name="PlacesScreen" component={PlacesScreen} options={{title:''}}/>
        <HomeStack.Screen name="MovieScreen" component={MovieScreen} options={{title:'',headerTitleAlign:'center'}}/>
        <HomeStack.Screen name="TheaterScreen" component={TheaterScreen} options={{title:'',headerTitleAlign:'center'}}/>
      </HomeStack.Navigator>
    );
  };
export default HomeStackScreens

