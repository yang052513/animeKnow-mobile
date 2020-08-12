import React from 'react'
import { PieChart } from 'react-native-svg-charts'

export default function CollectionPieChart(props) {
  const collection = [
    {
      key: 'wish',
      amount: props.data.wish,
      svg: { fill: '#ffadd1' },
    },
    {
      key: 'collect',
      amount: props.data.collect,
      svg: { fill: '#87b3cb' },
    },
    {
      key: 'doing',
      amount: props.data.doing,
      svg: { fill: '#ffadad' },
    },
    {
      key: 'on_hold',
      amount: props.data.on_hold,
      svg: { fill: '#d3adff' },
    },
    {
      key: 'dropped',
      amount: props.data.dropped,
      svg: { fill: '#7e7e7e' },
    },
  ]

  return (
    <PieChart
      style={{ height: 200 }}
      valueAccessor={({ item }) => item.amount}
      data={collection}
      spacing={0}
      outerRadius={'95%'}
    />
  )
}
