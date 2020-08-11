import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native'
import axios from 'axios'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const imagePath = {
  uri: 'http://lain.bgm.tv/pic/cover/l/91/d8/84171_5KpYZ.jpg',
}

export default function Search() {
  const [search, setSearch] = useState('')

  const handleSearch = value => {
    setSearch(value)
    console.log(value)
  }

  useEffect(() => {
    const requestUrl =
      'https://api.bgm.tv/search/subject/' +
      search +
      '?responseGroup=large&max_results=5'

    if (search.length > 0) {
      const fetchSearch = async () => {
        const response = await axios(`${proxyurl}${requestUrl}`)
        console.log(response.data.list)
        console.log(response.data.results)
      }
      fetchSearch()
    }
  }, [search])

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="搜索条目..."
          style={styles.input}
          onChangeText={handleSearch}
        />
      </View>

      <ImageBackground
        source={imagePath}
        style={styles.cardContainer}
        imageStyle={{ opacity: 0.6 }}
      >
        <Text style={styles.cardType}>动画</Text>
        <Text style={styles.cardRank}>
          Rank <Text style={styles.cardRankHighlight}>129</Text>
        </Text>

        <View style={styles.cardInfoWrap}>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.cardTitle}>排球少年</Text>
            <View style={styles.cardInfoInnerContainer}>
              <View style={styles.cardFlex}>
                <MaterialIcons name="live-tv" size={15} color="#fff" />
                <Text style={styles.cardText}>25话</Text>
              </View>
              <View style={styles.cardFlex}>
                <AntDesign name="staro" size={15} color="#fff" />
                <Text style={styles.cardText}>8.2</Text>
              </View>
            </View>
          </View>

          <Text style={styles.cardDesc}>
            小时候，日向翔阳从电视上看见排球比赛，乌野高中的一名小个子在球上的英姿，简直就是个“小巨人”，对此非常深刻...
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  //输入框样
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  input: {
    backgroundColor: '#d6d6d6',
    padding: 10,
    width: '80%',
    borderRadius: 10,
  },

  //搜索结果卡片
  cardContainer: {
    height: 170,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#000',
    position: 'relative',
  },
  cardInfoWrap: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
  },
  cardInfoContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardInfoInnerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardType: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: '50%',
    color: '#03a9f4',
    paddingTop: 10,
    paddingLeft: 5,
    fontWeight: 'bold',
    borderColor: '#03a9f4',
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  cardRank: {
    position: 'absolute',
    right: '0',
    color: '#fff',
    fontSize: 10,
    backgroundColor: '#03a9f4',
    padding: 5,
    borderRadius: 5,
    right: 10,
    top: 5,
  },
  cardRankHighlight: {
    fontSize: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
  },
  cardFlex: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 14,
    marginHorizontal: 5,
  },
  cardDesc: {
    color: '#fff',
    fontSize: 12,
  },
})
