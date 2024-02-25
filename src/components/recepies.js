import React, { useContext } from "react";
import { View, Text, Pressable, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from "../constants";
import styles from "../screens/Styles";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loading from "./loading";
import { CardImage } from "../helpers/image";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../constants/ThemeContext";

export default function Recipes({ categories, meals}) {
    const navigation = useNavigation()
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={{ marginHorizontal: 16, marginTop: 20 }}>
            <Text style={{ fontSize: hp(3), fontWeight: '500', color: theme === 'dark' ? 'white' : '#4a4c49' }}>Recipes</Text>
            <View>
                {
                    categories.length == 0 || meals.length == 0 ? (<Loading size="large" color="#FFC107"/>) : (
                        <MasonryList
                            data={meals}
                            keyExtractor={(item) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
                            // refreshing={isLoadingNext}
                            // onRefresh={() => refetch({ first: ITEM_CNT })}
                            onEndReachedThreshold={0.1}
                        // onEndReached={() => loadNext(ITEM_CNT)}
                        />
                    )
                }
            </View>
        </View>
    )
}

const RecipeCard = ({ item, index, navigation }) => {
    let isEven = index % 2 == 0;
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
            <Pressable style={[styles.item, { paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }]} onPress={()=>navigation.navigate('RecipeDetail', {...item})}>
                <Image source={{ uri: item.strMealThumb }} style={[styles.itemimg]} sharedTransitionTag={item.strMeal} />
                {/* <CardImage  uri={item.strMealThumb } style={[styles.itemimg, { height: index % 3 == 0 ? hp(25) : hp(35) }]} /> */}
                <Text style={[styles.txtit, {color: theme === 'dark' ? 'white' : '#4a4c49'}]}>{item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}</Text>
            </Pressable>
        </Animated.View>
    )
}