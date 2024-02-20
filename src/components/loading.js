import React from "react";
import {View, Text, ActivityIndicator} from 'react-native'
import styles from "../screens/Styles";

export default function Loading(props) {
    return(
        <View style={styles.loadingc}>
            <ActivityIndicator {...props} style={{top: 20}}/>
        </View>
    )
}