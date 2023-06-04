const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStackScreens from "./HomeStackScreens";
import ProfileStackScreens from "./ProfileStackScreens";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeStackScreens}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#000",fontSize:14},
            headerShown: false,
            tabBarOptions: { showIcon: true },
            tabBarIcon: ({ focused }) => 
              focused ? (
                <Ionicons name="md-home" size={24} color="black" />
              ) : (
                <Ionicons name="md-home-outline" size={24} color="black" />
              )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreens}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#000" ,fontSize:14},
            headerShown: false,
            tabBarIcon: ({ focused }) =>  focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
