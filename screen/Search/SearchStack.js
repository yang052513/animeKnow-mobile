import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Search from '../Search'
import Subject from '../../components/Subject'

import { TouchableOpacity } from 'react-native-gesture-handler'
const Stack = createStackNavigator()

export default function SearchStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '探索条目',
        }}
      />
      <Stack.Screen
        name="Subject"
        component={Subject}
        options={{ title: '番剧信息' }}
      />
    </Stack.Navigator>
  )
}
