import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import Welcome from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import Parent from "./Parent";
import Account from "../screens/Account";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Forgatepassword from "../screens/forgetpassword";
import Verify from "../screens/Verify";
import Newpassword from "../screens/Newpassword";
import Resetsuccess from "../screens/Resetsuccessful";
import Profile from "../screens/Profile";


const Stack = createNativeStackNavigator()

function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Parent" component={Parent}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen}/>
                <Stack.Screen name="Account" component={Account}/>
                <Stack.Screen name="Signin" component={Signin}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Forgate" component={Forgatepassword}/>
                <Stack.Screen name="Verify" component={Verify}/>
                <Stack.Screen name="Newpass" component={Newpassword}/>
                <Stack.Screen name="Reset" component={Resetsuccess}/>
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;