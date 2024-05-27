import React, { useContext } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";

export default function Account() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();

    
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center', paddingBottom: hp(20)}]}>
                    <Image source={require('../../assets/cherry.png')} style={styles.img}/>
                    <Text style={[styles.text, {marginTop: hp(12)}]}>Find Your</Text>
                    <Text style={[styles.text, {color: '#FFC107'}]}>Favorite <Text style={{color: '#ffffff'}}>Dish</Text></Text>
                    <Text style={[styles.text1, {marginTop: hp(3)}]}>"Unlock a world of flavor at your fingertips</Text>
                    <Text style={styles.text1}>where every recipe is a journey, every ingredient</Text>
                    <Text style={styles.text1}>a passport, and every dish a destination worth savoring."</Text>
                    <View style={{flexDirection: 'row', marginTop: hp(5)}}>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signin')}>
                            <Text style={styles.text2}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: 'rgba(0,0,0,0.1)', borderWidth: 1, borderColor: '#FFC107', marginLeft: hp(1.3)}]} onPress={()=>navigation.navigate('Signup')}>
                        <Text style={styles.text2}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}