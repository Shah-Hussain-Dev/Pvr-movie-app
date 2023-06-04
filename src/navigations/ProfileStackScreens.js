
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </ProfileStack.Navigator>
    );
  };

  export default ProfileStackScreens;