import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import AnimeData from '../assets/data/top_500_animes.json'
import axios from 'axios'

const imageDemo = {
  uri: 'http://lain.bgm.tv/pic/cover/l/aa/db/262940_z2mQQ.jpg',
}

const proxyurl = 'https://cors-anywhere.herokuapp.com/'

export default function Search() {
  let randomInitialId =
    AnimeData[Math.floor(Math.random() * AnimeData.length)].id

  const [subjectId, setSubjectId] = useState(randomInitialId)
  const [card, setCard] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const requestUrl =
      'https://api.bgm.tv/subject/' + subjectId + '?responseGroup=small'

    const fetchSubject = async () => {
      const response = await axios(`${proxyurl}${requestUrl}`)
      setCard(response.data)
      setLoading(false)
    }
    fetchSubject()
  }, [subjectId])

  console.log(card)

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>加载中...</Text>
      ) : (
        <View style={styles.card}>
          <View style={styles.bannerContainer}>
            <Image source={{ uri: card.images.large }} style={styles.banner} />
            <Text style={styles.rank}>Rank {card.rank}</Text>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {card.name_cn ? card.name_cn : card.name}
            </Text>
            <View style={styles.headerStatus}>
              <View style={styles.headerItem}>
                <MaterialIcons name="live-tv" size={18} color="#03a9f4" />
                <Text style={{ fontSize: 12, marginLeft: 5 }}>
                  {card.eps ? card.eps : 1} 话
                </Text>
              </View>
              <View style={styles.headerItem}>
                <AntDesign name="staro" size={18} color="#03a9f4" />
                <Text style={{ fontSize: 12, marginLeft: 5 }}>
                  {card.rating
                    ? `${card.rating.score} (${card.rating.total}人评分)`
                    : '暂无评分'}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.desc}>
            简介:{' '}
            {card.summary
              ? `${card.summary.replace(/\s/g, '').slice(0, 80)}......`
              : '暂无简介'}
          </Text>

          <View style={styles.collectionContainer}>
            <Text style={styles.wish}>
              想看 {card.collection.wish ? card.collection.wish : 0}
            </Text>
            <Text style={styles.watched}>
              看过 {card.collection.collect ? card.collection.collect : 0}
            </Text>
            <Text style={styles.watching}>
              在看 {card.collection.doing ? card.collection.doing : 0}
            </Text>
            <Text style={styles.delay}>
              搁置 {card.collection.on_hold ? card.collection.on_hold : 0}
            </Text>
            <Text style={styles.delete}>
              抛弃 {card.collection.dropped ? card.collection.dropped : 0}
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}

const collectionStyle = {
  color: '#fff',
  fontSize: 12,
  padding: 5,
  borderRadius: 5,
  marginHorizontal: 5,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bannerContainer: {
    position: 'relative',
  },
  banner: {
    height: 400,
    borderRadius: 25,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 100,
    // marginBottom: 20,
  },
  rank: {
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#fff',
    backgroundColor: '#03a9f4',
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
  },
  header: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 15,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#03a9f4',
    fontWeight: 'bold',
  },
  headerItem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  headerStatus: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  desc: {
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#4a4a4a',
    lineHeight: '1.2rem',
  },
  collectionContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  wish: {
    ...collectionStyle,
    backgroundColor: '#ffadd1',
  },
  watching: {
    ...collectionStyle,
    backgroundColor: '#ffadad',
  },
  watched: {
    ...collectionStyle,
    backgroundColor: '#87b3cb',
  },
  delay: {
    ...collectionStyle,
    backgroundColor: '#d3adff',
  },
  delete: {
    ...collectionStyle,
    backgroundColor: '#7e7e7e',
  },
})
