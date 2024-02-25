import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";

export default function AddRecipe() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === 'dark' ? 'black' : 'white'}}>
            <Text style={{fontSize: 18, color: theme === 'dark' ? 'white' : 'black', fontWeight: '500'}}>Add your <Text style={{color: '#e79d09'}}>Recipe here</Text></Text>
            <Text style={{fontSize: 18, color: theme === 'dark' ? 'white' : 'black', fontWeight: '500', marginTop: 5}}>Comming Soon</Text>
        </View>
    )
}