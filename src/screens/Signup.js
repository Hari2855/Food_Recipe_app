import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../constants/ThemeContext";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ChevronLeftIcon} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import auth from "@react-native-firebase/auth"
import ImagePicker from 'react-native-image-crop-picker';
import i from '../../assets/user.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from "../constants/UserContext";

export default function Signup() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [pimage, setpimage] = useState();
    const {setUser} = useContext(UserContext)


    useEffect(()=> {
        AsyncStorage.getItem('profileImage').then((imagePath) => {
            if(imagePath) {
                setpimage(imagePath)
            }
        })
    }, [])

  const Gallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setpimage(image.path);
      AsyncStorage.setItem('profileImage', image.path)
    });
  };

  const handleSignup = () => {
    const userData = {
        name: name,
        email: email,
        password: password,
        profileImage: pimage
    };
    setUser(userData);
};

    const signUpauth = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                if (password === confirmPassword) {
                    Alert.alert("User created please login")
                    navigation.navigate('Signin')
                }
                else {
                    Alert.alert("Password is not mached")
                }
            })
            .catch(err => {
                console.log(err.message);
                Alert.alert(err.message)
            })
    }

    const handleSignupButtonPress = () => {
        signUpauth();
        handleSignup();
    };

    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={"#ffffff"} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/cherry.png')} style={[styles.img, { alignSelf: 'center', }]} />
                    <Text style={[styles.text, { fontSize: hp(3.5), marginTop: hp(7), marginLeft: hp(3) }]}>Sign Up</Text>

                    <TouchableOpacity style={[styles.imagecontainer, {top: hp(5)}]}>
                        <Image source={pimage ? { uri: pimage } : require('../../assets/user.png')}  style={styles.profilepic} />
                        <TouchableOpacity style={styles.cemara} onPress={Gallery}>
                            <Image source={require('../../assets/camera.png')} style={styles.edit} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.text3}>Username</Text>
                    <TextInput value={name} onChangeText={text => setName(text)} placeholder="Enter your name" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} style={styles.input} />

                    <Text style={styles.text3}>Email Address</Text>
                    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your Email" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} style={styles.input} />

                    <Text style={styles.text3}>Password</Text>
                    <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Enter Password" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} secureTextEntry={true} style={styles.input} />

                    <Text style={styles.text3}>Confirm Password</Text>
                    <TextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} placeholder="Confirm Password" cursorColor={"#FFC107"} placeholderTextColor={"#82878d"} secureTextEntry={true} style={[styles.input, {
                        borderBottomColor: password === confirmPassword ? '#fbbf24' : 'red'
                    }]} />

                    <TouchableOpacity style={[styles.button1, { marginBottom: hp(5) }]} onPress={handleSignupButtonPress}>
                        <Text style={styles.text2}>Create account</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}