import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Air from '../Air'
import Subject from '../../components/Subject'

import { TouchableOpacity } from 'react-native-gesture-handler'
const Stack = createStackNavigator()

export default function AirStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Air"
        component={Air}
        options={{
          title: '每日放送',
        }}
      />
      <Stack.Screen
        name="Subject"
        component={Subject}
        options={{ title: '番剧信息', headerTintColor: '#03a9f4' }}
      />
    </Stack.Navigator>
  )
}
