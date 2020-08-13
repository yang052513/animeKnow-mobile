import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons'

import About from '../screen/About'
import AirStack from '../screen/Air/AirStack'
import SearchStack from '../screen/Search/SearchStack'
import RecommendationStack from '../screen/Recommendation/RecommendationStack'

const Tab = createMaterialBottomTabNavigator()

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Air"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#03a9f4' }}
    >
      <Tab.Screen
        name="Air"
        component={AirStack}
        options={{
          tabBarLabel: '每日放送',
          tabBarColor: '#03a9f4',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: '探索',
          tabBarColor: '#7a02f2',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={RecommendationStack}
        options={{
          tabBarLabel: '推荐',
          tabBarColor: '#21bf98',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: '关于',
          tabBarColor: '#f2023e',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="library" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
