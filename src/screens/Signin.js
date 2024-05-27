import React, { useContext, useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ArrowLeftCircleIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import auth from "@react-native-firebase/auth"

export default function Signin() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            Alert.alert("Success: Logged in")
            navigation.navigate("Parent")
        })
        .catch(err => {
            console.log(err.message)
            Alert.alert(err.message)
        })
    }
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <ScrollView style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.8)', }]}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Account")}>
                        <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={"#ffffff"} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/cherry.png')} style={[styles.img, {alignSelf: 'center', marginTop: hp(5)}]} />
                    <Text style={[styles.text, {fontSize: hp(3.5),marginTop: hp(7),marginLeft: hp(3)}]}>Login</Text>
                    <Text style={styles.text3}>Email Address</Text>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your Email" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} style={styles.input} />
                    <Text style={styles.text3}>Password</Text>
                    <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Enter Password" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} secureTextEntry={true} style={styles.input} />
                    <TouchableOpacity style={[styles.button, {alignSelf: 'center',marginTop: hp(5)}]} onPress={Login}>
                        <Text style={styles.text2}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{alignSelf: 'center', color: '#ffffff', fontWeight: '500', marginTop: hp(5)}}>Forgate your <Text style={{color: '#FFC107'}} onPress={()=>navigation.navigate('Forgate')}>Password?</Text></Text>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}