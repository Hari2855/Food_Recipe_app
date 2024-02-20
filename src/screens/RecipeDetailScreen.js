import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UserIcon, UsersIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../components/loading";
import YoutubeIframe from "react-native-youtube-iframe";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function RecipeDetailScreen(props) {
    let item = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false)
    const navigation = useNavigation()
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMealData(item.idMeal)
    }, [])

    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if (response && response.data) {
                setMeal(response.data.meals[0])
                setLoading(false)
            }
        } catch (err) {
            console.log("error: ", err.message);
        }
    }

    const ingredientsindexes = (meal) => {
        if (!meal) return [];
        let indexes = [];
        for (let i = 0; i <= 20; i++) {
            if (meal['strIngredient' + i]) {
                indexes.push(i)
            }
        }

        return indexes;
    }

    const getYoutubeVideoID = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex)
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#ffffff', paddingBottom: 30,}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <Image source={{ uri: item.strMealThumb }} sharedTransitionTag={item.strMeal} style={{ width: wp(98), height: hp(60), borderRadius: 53, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,}} />
            </View>

            <Animated.View entering={FadeIn.delay(200).duration(1000)} style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', bottom: '110%' }}>
                <TouchableOpacity style={{ padding: 2, marginLeft: 15, backgroundColor: '#ffffff', borderRadius: 30 }} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={"#fbbf24"} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    padding: 2,
                    marginRight: 15, backgroundColor: '#ffffff',
                    borderRadius: 30
                }}
                    onPress={() => setIsFavourite(!isFavourite)}
                >
                    <HeartIcon size={hp(3.5)}
                        strokeWidth={4.5} color={isFavourite ? "red" : "gray"} />
                </TouchableOpacity>
            </Animated.View>

            {
                loading ? (
                    <Loading size="large" color="#FFC107" />
                ) : (
                    <View style={{ paddingTop: 8, paddingHorizontal: 4, marginBottom: 16, justifyContent: 'space-between' }}>
                        <Animated.View entering={FadeInDown.duration(700).springify().duration(12)} style={{ marginBottom: 8, marginLeft: 15 }}>
                            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#363735' }}>{meal?.strMeal}</Text>
                            <Text style={{ fontSize: hp(2), fontWeight: '500', color: '#636463', marginTop: 5 }}>{meal?.
                                strArea}</Text>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(100).duration(700).springify().duration(12)} style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 2 }}>
                            <View style={{ borderRadius: 50, backgroundColor: '#fecc4b', padding: 5 }}>
                                <View style={{ height: hp(6.5), width: hp(6.5), backgroundColor: '#ffffff', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <ClockIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
                                </View>
                                <View style={{ paddingVertical: 8, marginBottom: 4, alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#343534' }}>35</Text>
                                    <Text style={{ fontSize: hp(1.3), fontWeight: 'bold', color: '#343534' }}>Mins</
                                    Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ borderRadius: 50, backgroundColor: '#fecc4b', padding: 5 }}>
                                    <View style={{
                                        height: hp(6.5), width: hp(6.5), backgroundColor: '#ffffff',
                                        borderRadius: 50, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <UsersIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
                                    </View>
                                    <View style={{ paddingVertical: 8, marginBottom: 4, alignItems: 'center' }}>
                                        <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#343534' }}
                                        >03</Text>
                                        <Text style={{ fontSize: hp(1.3), fontWeight: 'bold', color: '#343534' }}
                                        >Servings</
                                        Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ borderRadius: 50, backgroundColor: '#fecc4b', padding: 5 }}>
                                    <View style={{
                                        height: hp(6.5), width: hp(6.5), backgroundColor: '#ffffff',
                                        borderRadius: 50, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <FireIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
                                    </View>
                                    <View style={{
                                        paddingVertical: 8, marginBottom: 4, alignItems:
                                            'center'
                                    }}>
                                        <Text style={{
                                            fontSize: hp(2), fontWeight: 'bold', color:
                                                '#343534'
                                        }}
                                        >103</Text>
                                        <Text style={{
                                            fontSize: hp(1.3), fontWeight: 'bold', color:
                                                '#343534'
                                        }}
                                        >Cal</
                                        Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ borderRadius: 50, backgroundColor: '#fecc4b', padding: 5 }}>
                                    <View style={{
                                        height: hp(6.5), width: hp(6.5), backgroundColor: '#ffffff',
                                        borderRadius: 50, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
                                    </View>
                                    <View style={{
                                        paddingVertical: 8, marginBottom: 4, alignItems:
                                            'center'
                                    }}>
                                        <Text style={{
                                            fontSize: hp(2), fontWeight: 'bold', color:
                                                '#343534'
                                        }}
                                        ></Text>
                                        <Text style={{
                                            fontSize: hp(1.3), fontWeight: 'bold', color:
                                                '#343534'
                                        }}
                                        >Easy</
                                        Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(200).duration(700).springify().duration(12)} style={{ marginLeft: 15, marginTop: 5, marginVertical: 4 }}>
                            <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: '#383736' }}>
                                Ingredients
                            </Text>
                            <View style={{ marginVertical: 2, marginLeft: 3 }}>
                                {
                                    ingredientsindexes(meal).map(i => {
                                        return (
                                            <View key={i} style={{ flexDirection: 'row', marginVertical: 3 }}>
                                                <View style={{ height: hp(1.5), width: hp(1.5), backgroundColor: '#ddba41', borderRadius: 30 }}></View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center', marginLeft: 10, bottom: 4
                                                }}>
                                                    <Text style={{ fontSize: hp(1.7), color: '#2f2f2f', fontWeight: 'bold' }}>{meal['strMeasure' + i]}</Text>
                                                    <Text style={{ fontSize: hp(1.7), marginLeft: 5, color: '#3c3d3c', fontWeight: '500' }}>{meal['strIngredient' + i]}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(300).duration(700).springify().duration(12)} style={{ marginLeft: 15, }}>
                            <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: '#383736' }}>
                                Instructions
                            </Text>
                            <Text style={{ color: '#393837', fontSize: hp(2) }}>
                                {
                                    meal?.strInstructions
                                }
                            </Text>
                        </Animated.View>


                        {
                            meal.strYoutube && (
                                <Animated.View
                                    entering={FadeInDown.delay(100).duration(700).springify().duration(12)} style={{ marginBottom: 16 }}>
                                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: '#383736', marginLeft: 15, marginTop: 10 }}>
                                        Recipe Video
                                    </Text>
                                    <View style={{marginTop: 10, borderRadius: 30}}>
                                        <YoutubeIframe
                                            videoId={getYoutubeVideoID(meal.strYoutube)}              
                                            height={hp(30)}
                                        />
                                    </View>
                                </Animated.View>
                            )
                        }
                    </View>
                )
            }
        </ScrollView >
    )
}