//每个条目的详细信息 参考Bilibili模糊和Bangumi条目
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AnimeData from '../assets/data/top_500_animes.json'

export default function Subject(props) {
  console.log(props.route.params)
  return (
    <View>
      <Text>条目详细信息</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
