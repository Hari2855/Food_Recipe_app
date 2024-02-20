import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions, ActivityIndicator } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { tw } from "react-native-tailwindcss";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            getRecipe();
        } else {
            setResults([]); // Clear results if search query is empty
        }
    }, [searchQuery]);

    const getRecipe = async () => {
        try {
            const res = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
            // console.log('recipe found: ', res.data);
            if (res && res.data && res.data.meals) {
                setResults(res.data.meals); // Assuming res.data.meals contains an array of recipes
            } else {
                setResults([]);
            }
        } catch (err) {
            console.log("error: ", err.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search Recipe"
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.goBack()}>
                    <XMarkIcon size={15} color={'white'} />
                </TouchableOpacity>
            </View>

            {
                loading ? (
                    <ActivityIndicator size={'large'} color={'#ebc068'} style={{marginTop: hp(40)}} />
                ) : (

                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                        <Text style={styles.text}>Results({results.length})</Text>
                        <View style={[tw.flexRow, tw.justifyBetween, tw.flexWrap]}>
                            {results.map((item, index) => (
                                <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate('RecipeDetail', {...item})}>
                                    <View style={{ marginVertical: 8 }}>
                                        <Image
                                            source={{ uri: item.strMealThumb }}
                                            style={{
                                                height: height * 0.3,
                                                width: width * 0.44,
                                                borderRadius: 15
                                            }}
                                        />
                                        <Text style={[tw.mL1, { color: 'black', marginTop: 2 }]}>
                                            {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </ScrollView>
                ) 
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        height: hp(6),
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#eff0ef',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        marginTop: wp(3),
        alignSelf: 'center'
    },
    textInput: {
        paddingLeft: hp(2),
        flex: 1,
        fontSize: hp(2.1),
        color: '#000000'
    },
    searchButton: {
        margin: 1,
        padding: 8,
        backgroundColor: '#656764',
        borderRadius: 20
    },
    searchButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        fontSize: hp(2.5),
        alignSelf: 'flex-start',
        fontWeight: '500',
        marginTop: hp(2)
    }
});
