import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import Welcome from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import SearchScreen from "../screens/SearchScreen";


const Stack = createNativeStackNavigator()

function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;