import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native'

export default function Air() {
  const [air, setAir] = useState([])

  const bannerUrl = {
    uri: 'http://lain.bgm.tv/pic/cover/l/83/94/305511_hEOuH.jpg',
  }

  return (
    <View>
      <View>
        <Text>星期一 今日共上映 12 部动画</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={bannerUrl} />
        <View style={styles.cardText}>
          <Text style={styles.title}>高校之神</Text>

          <View style={styles.rating}>
            <AntDesign name="staro" size={18} color="#03a9f4" />
            <Text style={styles.ratingText}>8.9</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>READ MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  card: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  cardImage: {
    width: '50%',
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    marginHorizontal: 15,
  },
  rating: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    marginHorizontal: 5,
  },
  button: {
    borderColor: '#03a9f4',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#03a9f4',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
})
