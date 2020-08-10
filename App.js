import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from './components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AnimeKnow</Text>

      <View>
        <Search />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
