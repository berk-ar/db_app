import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { auth } from "../firebase_config";
import { signOut } from "firebase/auth";
import { Text, View } from "react-native";
import { SignOutScreen } from "../screens/SignOutScreen";
import SettingsScreen from "../screens/SettingsScreen";

const CustomDrawerContent = ({ navigation, state }) => (
    <DrawerContentScrollView>
        <View>
            <Text>Header Title</Text>
        </View>
        <DrawerItemList {...{ navigation, state }} />
        <DrawerItem label="Sign out" onPress={() => {
            signOut(auth)
                .then(() => navigation.navigate("Login"))
                .catch(err => console.log(err))
        }} />
    </DrawerContentScrollView>
)

export const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="SignOut" component={SignOutScreen} />
        </Drawer.Navigator>
    )
}