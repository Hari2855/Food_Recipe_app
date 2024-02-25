import React, { useEffect } from "react";
import {View, Text, StatusBar, Image} from 'react-native'
import styles from "./Styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        setTimeout(() => ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);
        setTimeout(()=> navigation.navigate('Parent'), 2500)
    }, [])
    return(
        <View style={styles.we}>
            <StatusBar backgroundColor={"#f4920c"}/>
            <Animated.View style={[styles.ring1, {padding: ring2padding}]}>
                <Animated.View style={[styles.ring2, {padding: ring1padding}]}>
                    <Image source={require('../../assets/welcome.png')} style={styles.img1}/>
                </Animated.View>
            </Animated.View>

            <View style={styles.punch}>
                <Text style={styles.txt1}>Foody</Text>
                <Text style={styles.txt2}>Food is always right</Text>
            </View>
        </View>
    )
}