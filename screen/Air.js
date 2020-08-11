import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const date = new Date()
let currentWeekday

if (date.getDay === 0) {
  currentWeekday = 6
} else {
  currentWeekday = date.getDay() - 1
}

export default function Air() {
  const [air, setAir] = useState([])
  const [dailyInfo, setDailyInfo] = useState({
    weekday: '',
    weekdayJA: '',
    numOfAnime: '',
  })
  useEffect(() => {
    const fetchAir = async () => {
      const response = await axios(`${proxyurl}https://api.bgm.tv/calendar`)
      const data = response.data[currentWeekday]

      setAir(data.items)
      setDailyInfo({
        weekday: data.weekday.cn,
        weekdayJA: data.weekday.ja,
        numOfAnime: data.items.length,
      })
      console.log(response.data)
    }
    fetchAir()
  }, [])

  return (
    <ScrollView>
      <View>
        <Text style={styles.announcement}>
          {dailyInfo.weekday} 今日共上映 {dailyInfo.numOfAnime} 部动画
        </Text>
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
    // margin: 20,
    marginHorizontal: 15,
    marginTop: 25,
    fontSize: 15,
  },
  card: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
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
    marginVertical: 3,
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
