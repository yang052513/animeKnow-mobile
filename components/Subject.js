//每个条目的详细信息 参考Bilibili模糊和Bangumi条目
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import { BarChart, XAxis, PieChart } from 'react-native-svg-charts'
import CollectionPieChart from './CollectionPieChart'
import Collection from './Collection'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RatingBarChart from './RatingBarChart'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'

export default function Subject() {
  // const subjectId = props.route.params
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubject = async () => {
      const response = await axios(
        `${proxyurl}https://api.bgm.tv/subject/51?responseGroup=large`
      )
      setSubject(response.data)
      setLoading(false)
      console.log(response.data)
    }
    fetchSubject()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <Text>加载中...</Text>
        ) : (
          <View>
            <View style={styles.bannerContainer}>
              <Image
                style={styles.banner}
                source={{
                  uri: subject.images.large,
                }}
              />
            </View>

            <View style={styles.textContainer}>
              {/* 番剧标题信息，类型，名称 */}
              <View style={styles.header}>
                <MaterialIcons name="live-tv" size={25} color="#03a9f4" />
                {/* 如果不存在中文名 只显示默认title */}
                <Text style={styles.title}>
                  {subject.name_cn ? subject.name_cn : subject.name}
                </Text>
                <Text style={styles.subtitle}>
                  {subject.name_cn && subject.name}
                </Text>
              </View>

              {/* 番剧简介 */}
              <View style={styles.intro}>
                <AntDesign name="book" size={20} color="#03a9f4" />
                <Text style={styles.introText}>
                  {subject.summary
                    ? `${subject.summary
                        .replace(/\s/g, '')
                        .slice(0, 150)}......`
                    : '暂无简介'}
                </Text>
              </View>

              {/* 番剧话数信息 */}
              <FlatList
                numColumns={6}
                keyExtractor={episode => episode.id}
                data={subject.eps}
                renderItem={({ item }) => (
                  <Text style={styles.episode}>第{item.sort}话</Text>
                )}
              />

              <View style={styles.airDate}>
                <AntDesign name="calendar" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>首播 {subject.air_date}</Text>
              </View>

              <View style={styles.airDate}>
                <AntDesign name="linechart" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>
                  {subject.rank ? `排名 ${subject.rank}` : '暂无排名'}
                </Text>
              </View>

              <View style={styles.airDate}>
                <AntDesign name="staro" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>
                  {subject.rating
                    ? `评分 ${subject.rating.score} (共${subject.rating.total}人评分)`
                    : '暂无评分'}
                </Text>
              </View>

              {/* 评分分布图 */}
              <RatingBarChart ratingData={subject.rating} />

              {/* 收集分布 */}
              <Collection collectionData={subject.collection} />

              {/* 声优列表信息 */}
              <View style={styles.cvlist}>
                <Text style={styles.sectionTitle}>角色介绍</Text>

                <FlatList
                  keyExtractor={item => item.id}
                  data={subject.crt}
                  renderItem={({ item }) => (
                    <View style={styles.cvitem}>
                      <Image
                        source={{
                          uri: item.images.large,
                        }}
                        style={styles.cvavatar}
                      />
                      <View>
                        <View style={styles.cvactor}>
                          <Text style={styles.cvactorIcon}>
                            {item.role_name}
                          </Text>
                          <Text>{item.name_cn ? item.name_cn : item.name}</Text>
                        </View>

                        <View style={styles.cvactor}>
                          <Text style={styles.cvactorIcon}>CV</Text>
                          <Text>{item.info.cv}</Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  sectionTitle: {
    fontSize: 17,
    color: '#03a9f4',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 400,
    width: '80%',
    borderRadius: 15,
  },
  textContainer: {
    marginHorizontal: 30,
  },

  header: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03a9f4',
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#4a4a4a',
    fontWeight: 'normal',
    marginLeft: 10,
    marginTop: 4,
  },
  intro: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 10,
  },
  introText: {
    width: '90%',
    color: '#4a4a4a',
    marginLeft: 5,
    lineHeight: '1.3rem',
  },
  episode: {
    backgroundColor: '#fff',
    color: '#03a9f4',
    borderWidth: 1,
    borderColor: '#03a9f4',
    marginRight: 8,
    marginBottom: 8,
    padding: 5,
    width: 70,
    fontSize: 12,
    textAlign: 'center',
    borderRadius: 5,
  },
  airDate: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  airDateText: {
    marginLeft: 5,
    color: '#4a4a4a',
  },
  cvlist: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: 10,
  },
  cvitem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginRight: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
  },
  cvavatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  cvactor: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 7,
  },
  cvactorIcon: {
    backgroundColor: '#fff',
    color: '#03a9f4',
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 10,
    borderRadius: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#03a9f4',
  },
})
