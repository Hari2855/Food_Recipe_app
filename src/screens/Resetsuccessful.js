import React, { useContext } from "react";
import { Image, ImageBackground, TextInput, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import {CheckIcon} from "react-native-heroicons/outline";
import styles from "./Styles";

export default function Resetsuccess() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
                    <TouchableOpacity style={styles.circle}>
                        <CheckIcon size={hp(4)} strokeWidth={2.5} color={"#ffffff"}/>
                    </TouchableOpacity>
                    <Text style={[styles.text, { marginTop: hp(5), fontSize: hp(3.3), alignSelf: 'center' }]}>Password reset successful!</Text>
                    <Text style={[styles.text1, { marginTop: hp(2), fontStyle: 'normal', alignSelf: 'center' }]}>Your successfully reset your password.Please use</Text>
                    <Text style={[styles.text1, { fontStyle: 'normal', alignSelf: 'center' }]}>your new password when logging in.</Text>
                    <TouchableOpacity style={[styles.button, { alignSelf: 'center', marginTop: hp(5) }]} onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.text2}>Done</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}