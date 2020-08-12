import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CollectionPieChart from './CollectionPieChart'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Collection(props) {
  const { collect, doing, dropped, on_hold, wish } = props.collectionData

  return (
    <View>
      <View style={styles.collection}>
        <View style={styles.collectionItem}>
          <MaterialCommunityIcons name="rectangle" size={24} color="#ffadd1" />
          <Text>想看 {wish}</Text>
        </View>

        <View style={styles.collectionItem}>
          <MaterialCommunityIcons name="rectangle" size={24} color="#ffadad" />
          <Text>在看 {doing}</Text>
        </View>

        <View style={styles.collectionItem}>
          <MaterialCommunityIcons name="rectangle" size={24} color="#87b3cb" />
          <Text>看过 {collect}</Text>
        </View>

        <View style={styles.collectionItem}>
          <MaterialCommunityIcons name="rectangle" size={24} color="#d3adff" />
          <Text>搁置 {on_hold}</Text>
        </View>

        <View style={styles.collectionItem}>
          <MaterialCommunityIcons name="rectangle" size={24} color="#7e7e7e" />
          <Text>抛弃 {dropped}</Text>
        </View>
      </View>
      <CollectionPieChart data={props.collectionData} />
    </View>
  )
}

const styles = StyleSheet.create({
  collection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 10,
  },
  collectionItem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
})
