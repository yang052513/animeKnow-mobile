import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Air from '../screen/Air'
import Search from '../screen/Search'
import Recommendation from '../screen/Recommendation'
import About from '../screen/About'

const Tab = createMaterialBottomTabNavigator()

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Recommendation"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#03a9f4' }}
    >
      <Tab.Screen
        name="Air"
        component={Air}
        options={{
          tabBarLabel: '每日放送',
          tabBarColor: '#03a9f4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '探索',
          tabBarColor: '#7a02f2',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={Recommendation}
        options={{
          tabBarLabel: '推荐',
          tabBarColor: '#034323',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
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
