import React from "react";
import { View, Text } from "react-native";

export default function AddRecipe() {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000'}}>
            <Text style={{fontSize: 18, color: '#ffffff', fontWeight: '500'}}>Add your <Text style={{color: '#e79d09'}}>Recipe here</Text></Text>
            <Text style={{fontSize: 18, color: '#ffffff', fontWeight: '500', marginTop: 5}}>Comming Soon</Text>
        </View>
    )
}