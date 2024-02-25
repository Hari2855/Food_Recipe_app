import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, Image, TextInput, Pressable, TouchableOpacity, useColorScheme } from 'react-native'
import styles from "./Styles";
import { BellIcon, MoonIcon, SunIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Categories from "../components/Categories";
import axios from "axios";
import Recipes from "../components/recepies";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../constants/ThemeContext";

export default function Home() {

    const [activeCategory, setActiveCategory] = useState("Beef");
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const navigation = useNavigation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        getCategories();
        getRecipes();
    }, [])

    const handelChangeCategory = category => {
        getRecipes(category)
        setActiveCategory(category)
        setMeals([])
    }

    const getCategories = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            // console.log("get categories: ", response.data);
            if (response && response.data) {
                setCategories(response.data.categories)
            }
        } catch (err) {
            console.log("error: ", err.message);
        }
    }

    const getRecipes = async (category = "Beef") => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            // console.log("get categories: ", response.data);
            if (response && response.data) {
                setMeals(response.data.meals)
            }
        } catch (err) {
            console.log("error: ", err.message);
        }
    }
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <StatusBar backgroundColor={theme === 'dark' ? 'black' : 'white'} barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40, marginVertical: 6 }}
            >
                <View style={styles.container2}>
                    <Image source={require('../../assets/avatar.jpg')} style={styles.img2} />
                    {theme === 'dark' ? 
                        <SunIcon size={hp(4)} color={'white'} style={{marginRight: wp(2)}} onPress={toggleTheme}/> 
                        : 
                        <MoonIcon size={hp(4)} color={'#4a4c49'} style={{marginRight: wp(2)}} onPress={toggleTheme}/>
                    }
                    <BellIcon size={hp(4)} color={theme === 'dark' ? 'white' : '#4a4c49'} style={{ marginRight: wp(5) }} />
                </View>

                <View style={styles.container3}>
                    <Text style={[styles.txt3, {color: theme === 'dark' ? 'white' : '#4a4c49'}]}>Hello, Hari!</Text>
                    <View>
                        <Text style={[styles.txt4, {color: theme === 'dark' ? 'white' : '#4a4c49'}]}>What You Would like</Text>
                    </View>
                    <Text style={[styles.txt4, { color: '#FFC107' }]}>to cook for today?</Text>
                </View>

                {/* <View style={styles.search}>
                    <TextInput placeholder="search any recipe" placeholderTextColor={"gray"} style={styles.txti}/>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 20, padding: wp(2), marginRight: wp(2)}}>
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
                    </View>
                </View> */}

                <View>
                    {categories.length > 0 && <Categories categories={categories} activeCategory={activeCategory} handelChangeCategory={handelChangeCategory} />}
                </View>

                <View>
                    <Recipes meals={meals} categories={categories} />
                </View>
            </ScrollView>
        </View>
    )
}