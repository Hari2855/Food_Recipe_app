import React, { useContext } from "react";
import { Image, ImageBackground, TextInput, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import styles from "./Styles";

export default function Newpassword() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.8)'}]}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={"#ffffff"} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/cherry.png')} style={[styles.img, {alignSelf: 'center', marginTop: hp(5)}]}/>
                    <Text style={[styles.text, {marginTop: hp(5), fontSize: hp(3.8), alignSelf: 'center'}]}>Create new password</Text>
                    <Text style={[styles.text1, {marginTop: hp(1), fontStyle: 'normal',alignSelf: 'center'}]}>Your password must be diffrent from previous used</Text>
                    <Text style={[styles.text1, {fontStyle: 'normal',alignSelf: 'center'}]}>password.</Text>
                    <Text style={styles.text3}>New Password</Text>
                    <TextInput placeholder="Enter Password" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} secureTextEntry={true} style={styles.input} />
                    <Text style={styles.text3}>Confirm Password</Text>
                    <TextInput placeholder="Confirm Password" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} secureTextEntry={true} style={styles.input} />
                    <TouchableOpacity style={[styles.button, {alignSelf: 'center',marginTop: hp(5), width: hp(30)}]} onPress={()=>navigation.navigate('Reset')}>
                        <Text style={styles.text2}>Confirm new password</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}