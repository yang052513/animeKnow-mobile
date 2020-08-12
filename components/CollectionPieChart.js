import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartWithCenteredLabels extends React.PureComponent {
  render() {
    const collection = [
      {
        key: 'wish',
        amount: 1563,
        svg: { fill: '#ffadd1' },
      },
      {
        key: 'collect',
        amount: 13959,
        svg: { fill: '#87b3cb' },
      },
      {
        key: 'doing',
        amount: 485,
        svg: { fill: '#ffadad' },
      },
      {
        key: 'on_hold',
        amount: 523,
        svg: { fill: '#d3adff' },
      },
      {
        key: 'dropped',
        amount: 190,
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
}

export default PieChartWithCenteredLabels
