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

// const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const data = [74, 15, 17, 54, 129, 471, 1333, 3058, 3195, 2329]

export default function Subject() {
  // const subjectId = props.route.params
  // const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchSubject = async () => {
  //     const response = await axios(
  //       `${proxyurl}https://api.bgm.tv/subject/51?responseGroup=large`
  //     )
  //     setSubject(response.data)
  //     setLoading(false)
  //   }
  //   fetchSubject()
  // }, [])

  const eps = [
    {
      id: 92,
      url: 'http://bgm.tv/ep/92',
      type: 0,
      sort: 1,
      name: '桜舞い散る坂道で',
      name_cn: '在那落樱缤纷的坡道上',
      duration: '25m',
      airdate: '2007-10-04',
      comment: 28,
      desc: '',
      status: 'Air',
    },
    {
      id: 93,
      url: 'http://bgm.tv/ep/93',
      type: 0,
      sort: 2,
      name: '最初の一歩',
      name_cn: '最初的一歩',
      duration: '25m',
      airdate: '2007-10-11',
      comment: 10,
      desc: '',
      status: 'Air',
    },
    {
      id: 94,
      url: 'http://bgm.tv/ep/94',
      type: 0,
      sort: 3,
      name: '涙のあとにもう一度',
      name_cn: '泪水之后的重新开始',
      duration: '25m',
      airdate: '2007-10-18',
      comment: 6,
      desc: '',
      status: 'Air',
    },
    {
      id: 95,
      url: 'http://bgm.tv/ep/95',
      type: 0,
      sort: 4,
      name: '仲間をさがそう',
      name_cn: '去寻找同伴吧',
      duration: '25m',
      airdate: '2007-10-25',
      comment: 6,
      desc: '',
      status: 'Air',
    },
    {
      id: 96,
      url: 'http://bgm.tv/ep/96',
      type: 0,
      sort: 5,
      name: '彫刻のある風景',
      name_cn: '木雕的风景',
      duration: '25m',
      airdate: '2007-11-01',
      comment: 4,
      desc: '',
      status: 'Air',
    },
    {
      id: 97,
      url: 'http://bgm.tv/ep/97',
      type: 0,
      sort: 6,
      name: '姉と妹の創立者祭',
      name_cn: '姐妹的校父纪念日',
      duration: '25m',
      airdate: '2007-11-08',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 98,
      url: 'http://bgm.tv/ep/98',
      type: 0,
      sort: 7,
      name: '星形の気持ち',
      name_cn: '星形的心意',
      duration: '25m',
      airdate: '2007-11-15',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 99,
      url: 'http://bgm.tv/ep/99',
      type: 0,
      sort: 8,
      name: '黄昏に消える風',
      name_cn: '消失在黄昏的风',
      duration: '25m',
      airdate: '2007-11-22',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 100,
      url: 'http://bgm.tv/ep/100',
      type: 0,
      sort: 9,
      name: '夢の最後まで',
      name_cn: '直到梦的尽头',
      duration: '25m',
      airdate: '2007-11-29',
      comment: 16,
      desc: '',
      status: 'Air',
    },
    {
      id: 101,
      url: 'http://bgm.tv/ep/101',
      type: 0,
      sort: 10,
      name: '天才少女の挑戦',
      name_cn: '天才少女的挑战',
      duration: '25m',
      airdate: '2007-12-06',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 102,
      url: 'http://bgm.tv/ep/102',
      type: 0,
      sort: 11,
      name: '放課後の狂想曲',
      name_cn: '放学后的狂想曲',
      duration: '25m',
      airdate: '2007-12-13',
      comment: 4,
      desc: '',
      status: 'Air',
    },
    {
      id: 103,
      url: 'http://bgm.tv/ep/103',
      type: 0,
      sort: 12,
      name: 'かくされた世界',
      name_cn: '被隐藏的世界',
      duration: '25m',
      airdate: '2007-12-20',
      comment: 2,
      desc: '',
      status: 'Air',
    },
    {
      id: 533,
      url: 'http://bgm.tv/ep/533',
      type: 0,
      sort: 13,
      name: '思い出の庭を',
      name_cn: '回忆中的庭园',
      duration: '25m',
      airdate: '2008-01-10',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 534,
      url: 'http://bgm.tv/ep/534',
      type: 0,
      sort: 14,
      name: 'セオリー オブ エヴリシング',
      name_cn: '万有理论',
      duration: '25m',
      airdate: '2008-01-17',
      comment: 13,
      desc: '',
      status: 'Air',
    },
    {
      id: 535,
      url: 'http://bgm.tv/ep/535',
      type: 0,
      sort: 15,
      name: '困った問題',
      name_cn: '困扰的问题',
      duration: '25m',
      airdate: '2008-01-24',
      comment: 2,
      desc: '',
      status: 'Air',
    },
    {
      id: 536,
      url: 'http://bgm.tv/ep/536',
      type: 0,
      sort: 16,
      name: '3on3',
      name_cn: '3on3',
      duration: '25m',
      airdate: '2008-01-31',
      comment: 4,
      desc: '',
      status: 'Air',
    },
    {
      id: 537,
      url: 'http://bgm.tv/ep/537',
      type: 0,
      sort: 17,
      name: '不在の空間',
      name_cn: '不在的空间',
      duration: '25m',
      airdate: '2008-02-07',
      comment: 9,
      desc: '',
      status: 'Air',
    },
    {
      id: 538,
      url: 'http://bgm.tv/ep/538',
      type: 0,
      sort: 18,
      name: '逆転の秘策',
      name_cn: '逆转的秘技',
      duration: '25m',
      airdate: '2008-02-14',
      comment: 16,
      desc: '',
      status: 'Air',
    },
    {
      id: 539,
      url: 'http://bgm.tv/ep/539',
      type: 0,
      sort: 19,
      name: '新しい生活',
      name_cn: '新的生活',
      duration: '25m',
      airdate: '2008-02-28',
      comment: 2,
      desc: '',
      status: 'Air',
    },
    {
      id: 540,
      url: 'http://bgm.tv/ep/540',
      type: 0,
      sort: 20,
      name: '秘められた過去',
      name_cn: '隐藏的过去',
      duration: '25m',
      airdate: '2008-03-06',
      comment: 3,
      desc: '',
      status: 'Air',
    },
    {
      id: 541,
      url: 'http://bgm.tv/ep/541',
      type: 0,
      sort: 21,
      name: '学園祭に向けて',
      name_cn: '面向学园祭',
      duration: '25m',
      airdate: '2008-03-13',
      comment: 1,
      desc: '',
      status: 'Air',
    },
    {
      id: 542,
      url: 'http://bgm.tv/ep/542',
      type: 0,
      sort: 22,
      name: '影二つ',
      name_cn: '形影成双',
      duration: '25m',
      airdate: '2008-03-20',
      comment: 7,
      desc: '',
      status: 'Air',
    },
    {
      id: 37338,
      url: 'http://bgm.tv/ep/37338',
      type: 1,
      sort: 23,
      name: '夏休みの出来事',
      name_cn: '暑假的故事',
      duration: '25m',
      airdate: '2008-03-27',
      comment: 10,
      desc: '',
      status: 'Air',
    },
  ]

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

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'black'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={14}
          stroke={'black'}
          strokeWidth={0.2}
        >
          {data.amount}
        </Text>
      )
    })
  }

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
                  uri: 'http://lain.bgm.tv/pic/cover/l/28/38/51_z0Ly8.jpg',
                }}
              />
            </View>

            <View style={styles.textContainer}>
              {/* 番剧标题信息，类型，名称 */}
              <View style={styles.header}>
                <MaterialIcons name="live-tv" size={25} color="#03a9f4" />
                <Text style={styles.title}>食戟之灵</Text>
                <Text style={styles.subtitle}>食戟のソーマ 神ノ皿</Text>
              </View>

              {/* 番剧话数信息 */}
              <FlatList
                numColumns={6}
                keyExtractor={item => item.id}
                data={eps}
                renderItem={({ item }) => (
                  <Text style={styles.episode}>第{item.sort}话</Text>
                )}
              />

              <View style={styles.airDate}>
                <AntDesign name="calendar" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>首播 2007-10-04</Text>
              </View>

              <View style={styles.airDate}>
                <AntDesign name="linechart" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>排名 53 </Text>
              </View>

              <View style={styles.airDate}>
                <AntDesign name="staro" size={20} color="#03a9f4" />
                <Text style={styles.airDateText}>评分 8.4 (共10675人评分)</Text>
              </View>

              <View
                style={{
                  height: 200,
                  padding: 10,
                }}
              >
                <BarChart
                  style={{ flex: 1 }}
                  data={data}
                  gridMin={0}
                  svg={{ fill: '#03a9f4' }}
                />

                <XAxis
                  style={{
                    marginTop: 10,
                    fontSize: 11,
                    paddingHorizontal: 5,
                  }}
                  data={data}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 10, right: 10 }}
                />
              </View>

              <View>
                <Text>想看 1563</Text>
                <Text>看过 13953</Text>
                <Text>在看 483</Text>
                <Text>搁置 524</Text>
                <Text>抛弃 190</Text>
              </View>

              <CollectionPieChart />

              <View>
                <Text>声优角色表</Text>
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
})
