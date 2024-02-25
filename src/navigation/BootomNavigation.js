import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

enableScreens();
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {backgroundColor: '#333', height: 60, width: '95%', alignSelf: 'center', borderRadius: 30, marginBottom: 20, borderTopWidth: 0},
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500', bottom: 8},
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = require('../../assets/home.png');
            } else if (route.name === 'Search') {
              iconName = require('../../assets/search.png');
            } else if (route.name === 'Add') {
              iconName = require('../../assets/add.png');
            }
            return (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={iconName}
                  style={[
                    styles.img,
                    { tintColor: focused ? '#FFC107' : 'white' },
                  ]}
                />
              </View>
            );
          },
          tabBarActiveTintColor: '#FFC107',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true,
        })}
      >
        <Bottom.Screen name="Home" component={HomeScreen} />
        <Bottom.Screen name="Search" component={SearchScreen} />
        <Bottom.Screen name="Add" component={AddScreen} />
      </Bottom.Navigator>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  img: {
    height: hp(3.5  ),
    width: hp(3.5),
  },
});
