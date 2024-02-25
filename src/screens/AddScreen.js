import React from "react";
import { View, Text } from "react-native";

export default function AddRecipe() {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000'}}>
            <Text style={{fontSize: 18, color: '#646664', fontWeight: '500'}}>Add your <Text style={{color: '#ebc068'}}>Recipe</Text></Text>
        </View>
    )
}