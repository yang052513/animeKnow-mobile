import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'

export default function Air() {
  const [air, setAir] = useState([])

  const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  useEffect(() => {
    const fetchAir = async () => {
      const response = await axios(`${proxyurl}https://api.bgm.tv/calendar`)
      setAir(response.data[4].items)
      console.log(response.data)
    }

    fetchAir()
  }, [])

  const bannerUrl = {
    uri: 'http://lain.bgm.tv/pic/cover/l/83/94/305511_hEOuH.jpg',
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.announcement}>星期一 今日共上映 12 部动画</Text>
      </View>

      <ScrollView>
        <FlatList
          keyExtractor={item => item.id}
          data={air}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={{ uri: item.images.large }}
              />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardCnTitle}>
                  {item.name_cn && item.name_cn}
                </Text>
                <View style={styles.rating}>
                  <AntDesign name="staro" size={18} color="#03a9f4" />
                  <Text style={styles.ratingText}>
                    {item.rating
                      ? `${item.rating.score} (${item.rating.total}人评分)`
                      : '暂无评分'}
                  </Text>
                </View>

                <View style={styles.rating}>
                  {/* <AntDesign name="barschart" size={24} color="#03a9f4" /> */}
                  <Text style={styles.rankingText}>
                    Rank {item.rank ? item.rank : '暂无排名'}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  announcement: {
    margin: 20,
    fontSize: 18,
  },
  card: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  cardTitle: {
    fontSize: 13,
    marginBottom: 2,
  },
  cardCnTitle: {
    fontSize: 10,
    color: 'gray',
    marginBottom: 5,
  },
  cardImage: {
    width: '50%',
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    marginHorizontal: 15,
    width: '40%',
  },
  rating: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  ratingText: {
    marginHorizontal: 5,
    fontSize: 11,
  },
  rankingText: {
    fontSize: 11,
    color: '#fff',
    backgroundColor: '#03a9f4',
    padding: 4,
    borderRadius: 5,
  },
})
