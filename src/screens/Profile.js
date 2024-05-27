import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import { ThemeContext } from "../constants/ThemeContext";
import { BellIcon, ChevronLeftIcon, HeartIcon, LockClosedIcon, QuestionMarkCircleIcon} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../constants/UserContext";
import auth from "@react-native-firebase/auth";

export default function Profile() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const { userData } = useContext(UserContext);

    const handleLogout = () => {
        auth()
            .signOut() // Sign out the user
            .then(() => {
                // Navigate to Signin screen after successful logout
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Signin' }],
                });
            })
            .catch((error) => {
                Alert.alert("Error", error.message); // Display error message if logout fails
            });
    };

    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={hp(3)} strokeWidth={2.5} color={theme === 'dark' ? 'white' : '#333'} />
            </TouchableOpacity>

            <Text style={[styles.text4, {color: theme === 'dark' ? 'white' : '#333'}]}>My profile</Text>
         {userData && (
           <View>
            <TouchableOpacity style={[styles.imagecontainer]}>
                <Image source={userData.profileImage ? { uri: userData.profileImage } : require('../../assets/user.png')} style={[styles.profilepic]} />
            </TouchableOpacity>

            <Text style={[styles.text4, { fontSize: hp(2.7), color: theme === 'dark' ? 'white' : '#333' }]}>{userData.name}</Text>
            </View>
         )}

            <TouchableOpacity style={[styles.button1, { width: hp(20), marginTop: hp(2) }]}>
                <Text style={[styles.text4, { fontSize: hp(2) }]}>Edit profile</Text>
            </TouchableOpacity>

            <View style={styles.view}>
                <TouchableOpacity style={styles.view2}>
                    <BellIcon size={hp(4)} color={theme === 'dark' ? 'white' : '#4a4c49'} style={{ marginRight: wp(5) }} />
                    <Text style={[styles.text5, { color: theme === 'dark' ? 'white' : '#4a4c49' }]}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view2}>
                    <HeartIcon size={hp(4)} color={theme === 'dark' ? 'white' : '#4a4c49'} style={{ marginRight: wp(5) }} />
                    <Text style={[styles.text5, { color: theme === 'dark' ? 'white' : '#4a4c49' }]}>Favourites</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view2}>
                    <LockClosedIcon size={hp(4)} color={theme === 'dark' ? 'white' : '#4a4c49'} style={{ marginRight: wp(5) }} />
                    <Text style={[styles.text5, { color: theme === 'dark' ? 'white' : '#4a4c49' }]}>Change Password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.view2, {marginLeft: hp(2.5)}]}>
                <QuestionMarkCircleIcon size={hp(4)} color={theme === 'dark' ? 'white' : '#4a4c49'} style={{ marginRight: wp(5) }} />
                <Text style={[styles.text5, { color: theme === 'dark' ? 'white' : '#4a4c49' }]}>Help & Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.view2, {marginLeft: hp(3.8)}]} onPress={handleLogout}>
                <Image source={require('../../assets/logout.png')} style={{ marginRight: wp(5), tintColor: theme === 'dark' ? 'white' : '#4a4c49', height: hp(3), width: hp(3) }} />
                <Text style={[styles.text5, { color: theme === 'dark' ? 'white' : '#4a4c49' }]}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}