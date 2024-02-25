import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import styles from "./Styles";
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Categories from "../components/Categories";
import axios from "axios";
import Recipes from "../components/recepies";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const [activeCategory, setActiveCategory] = useState("Beef");
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const navigation = useNavigation();

    useEffect(()=> {
        getCategories();
        getRecipes();
    }, [])

    const handelChangeCategory = category=> {
        getRecipes(category)
        setActiveCategory(category)
        setMeals([])
    }

    const getCategories = async () => {
        try{
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            // console.log("get categories: ", response.data);
            if (response && response.data) {
                setCategories(response.data.categories)
            }
        }catch(err){
            console.log("error: ", err.message);
        }
    }

    const getRecipes = async (category="Beef") => {
        try{
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            // console.log("get categories: ", response.data);
            if (response && response.data) {
                setMeals(response.data.meals)
            }
        }catch(err){
            console.log("error: ", err.message);
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"black"} barStyle={'light-content'}/>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40,marginVertical: 6 }}
            >
                <View style={styles.container2}>
                    <Image source={require('../../assets/avatar.jpg')} style={styles.img2}/>
                    <BellIcon size={hp(4)} color={'white'} style={{marginRight: wp(5)}}/>
                    {/* <TouchableOpacity style={{backgroundColor: '#FFC107', borderRadius: 20, padding: wp(2), marginRight: wp(5)}} onPress={()=>navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"white"}/>
                    </TouchableOpacity> */}
                </View>

                <View style={styles.container3}>
                    <Text style={styles.txt3}>Hello, Hari!</Text>
                    <View>
                        <Text style={styles.txt4}>What You Would like</Text>
                    </View>
                    <Text style={[styles.txt4, {color: '#FFC107'}]}>to cook for today?</Text>
                </View>

                {/* <View style={styles.search}>
                    <TextInput placeholder="search any recipe" placeholderTextColor={"gray"} style={styles.txti}/>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 20, padding: wp(2), marginRight: wp(2)}}>
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
                    </View>
                </View> */}

                <View>
                    {categories.length>0 &&<Categories categories={categories} activeCategory={activeCategory} handelChangeCategory={handelChangeCategory}/>}
                </View>

                <View>
                    <Recipes meals={meals} categories={categories}/>
                </View>
            </ScrollView>
        </View>
    )
}