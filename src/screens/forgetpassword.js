import React, { useContext, useState } from "react";
import { Image, ImageBackground, TextInput, Text, TouchableOpacity, View, Alert } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import styles from "./Styles";
import auth from "@react-native-firebase/auth"

export default function Forgatepassword() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState("")

    const ResetPassword = () => {
        auth().sendPasswordResetEmail(email)
        .then(() => {
            Alert.alert("Password rset link is send to registred email id")
            navigation.navigate('Signin')
        })
        .catch(err => {
            console.log(err);
        })
    } 
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.8)'}]}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={"#ffffff"} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/cherry.png')} style={[styles.img, {alignSelf: 'center', marginTop: hp(5)}]}/>
                    <Text style={[styles.text, {marginTop: hp(5), fontSize: hp(3.8), alignSelf: 'center'}]}>Forgot Password?</Text>
                    <Text style={[styles.text1, {marginTop: hp(1), fontStyle: 'normal',alignSelf: 'center'}]}>Please enter your registred email address.</Text>
                    <Text style={[styles.text1, {fontStyle: 'normal',alignSelf: 'center'}]}>We will send you a verification code to set a new</Text>
                    <Text style={[styles.text1, {fontStyle: 'normal',alignSelf: 'center'}]}>password.</Text>
                    <Text style={styles.text3}>Email Address</Text>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your Email" placeholderTextColor={"#82878d"} cursorColor={"#FFC107"} style={styles.input} />
                    <TouchableOpacity style={[styles.button, {alignSelf: 'center',marginTop: hp(5)}]} onPress={ResetPassword}>
                        <Text style={styles.text2}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}