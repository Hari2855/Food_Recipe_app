import React, { useContext, useState } from "react";
import { Image, ImageBackground, TextInput, Text, TouchableOpacity, View, FlatList } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import styles from "./Styles";

export default function Verify() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();

    const OtpInputBox = ({ index }) => {
        const [value, setValue] = useState('');

        const onChangeText = newValue => {
            setValue(newValue);
        };

        return (
            <TextInput
                style={styles.input1}
                value={value}
                onChangeText={onChangeText}
                keyboardType="numeric"
                maxLength={1}
                autoFocus={index === 0}
                cursorColor={"#FFC107"}
            />
        );
    };


    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <View style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={"#ffffff"} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/cherry.png')} style={[styles.img, { alignSelf: 'center', marginTop: hp(5) }]} />
                    <Text style={[styles.text, { marginTop: hp(5), fontSize: hp(3.4), alignSelf: 'center' }]}>Please verify email address</Text>
                    <Text style={[styles.text1, { marginTop: hp(1), fontStyle: 'normal', alignSelf: 'center' }]}>Verification code set to <Text style={{ color: '#FFC107' }}>example@gmail.com</Text></Text>
                    <View>
                    <View style={{ alignSelf: 'center', marginTop: hp(2), alignItems: 'center', justifyContent: 'center' }}>
                        <FlatList
                            data={[0, 1, 2, 3]}
                            renderItem={({ item }) => <OtpInputBox index={item} />}
                            keyExtractor={item => item.toString()}
                            horizontal
                        />
                    </View>

                    <View style={{alignSelf: 'center',position: 'absolute', marginTop: hp(15)}}>
                        <TouchableOpacity style={[styles.button, { marginTop: hp(2), width: hp(20) }]} onPress={()=>navigation.navigate('Newpass')}>
                            <Text style={styles.text2}>Confirm Code</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#ffffff', alignSelf: 'center', marginTop: hp(2), fontWeight: '500'}}>Resend Code</Text>
                    </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}