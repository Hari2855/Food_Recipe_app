import React, { useContext } from "react";
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import { Categoriesdata } from "../constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Animated, {FadeInDown} from "react-native-reanimated";
import { ThemeContext } from "../constants/ThemeContext";


export default function Categories({categories, activeCategory, handelChangeCategory}) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, marginHorizontal: 16, marginTop: 25, right: 30}}>

                {
                    categories.map((cat, index)=> {
                        let isActive = cat.strCategory == activeCategory
                        let activeButtonClass = isActive? '#FFC107' : '#dee0dd'

                        return(
                            <TouchableOpacity key={index} style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 4, paddingLeft: 15}} onPress={() => handelChangeCategory(cat.strCategory) }>

                                <View style={[{borderRadius: 300, padding: 6, backgroundColor: activeButtonClass,}]}>
                                    <Image source={{uri: cat.strCategoryThumb}}
                                    style={{width: hp(6), height: hp(6), borderRadius: hp(10),}}
                                    />
                                </View>
                                <Text style={{fontSize: hp(1.8), color: theme === 'dark' ? 'white' : '#4a4c49'}}>{cat.strCategory}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Animated.View>
    )
}