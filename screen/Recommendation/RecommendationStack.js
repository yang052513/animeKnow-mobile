import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Recommendation from '../Recommendation'
import Subject from '../../components/Subject'

const Stack = createStackNavigator()

export default function RecommendationStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recommendation"
        component={Recommendation}
        options={{
          title: '番剧推荐',
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
