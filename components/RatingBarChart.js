import React from 'react'

import { View } from 'react-native'
import { BarChart, XAxis } from 'react-native-svg-charts'

export default function RatingBarChart(props) {
  const ratingData = props.ratingData.count
  let data = []

  Object.keys(ratingData).map(function (key) {
    data.push(ratingData[key])
  })

  return (
    <View
      style={{
        height: 200,
        padding: 10,
      }}
    >
      <BarChart
        style={{ flex: 1 }}
        data={data}
        gridMin={0}
        svg={{ fill: '#03a9f4' }}
      />

      <XAxis
        style={{
          marginTop: 10,
          fontSize: 11,
          paddingHorizontal: 5,
        }}
        data={data}
        formatLabel={(value, index) => index + 1}
        contentInset={{ left: 10, right: 10 }}
      />
    </View>
  )
}
