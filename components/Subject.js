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
import axios from 'axios'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'

export default function Subject(props) {
  const subjectId = props.route.params
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubject = async () => {
      const response = await axios(
        `${proxyurl}https://api.bgm.tv/subject/51?responseGroup=large`
      )
      setSubject(response.data)
      setLoading(false)
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
            <Text>CLANNAD</Text>
            <Text>动画</Text>
            <Image
              style={styles.banner}
              source={{ uri: subject.images.large }}
            />
            <FlatList
              keyExtractor={item => item.id}
              data={subject.eps}
              renderItem={({ item }) => <Text>{item.name}</Text>}
            />
            <Text>放送日 2007-10-04</Text>
            <Text>评分 8.4 用bar chart</Text>
            <Text>排名 53</Text>
            <View>
              <Text>想看 1563</Text>
              <Text>看过 13953</Text>
              <Text>在看 483</Text>
              <Text>搁置 524</Text>
              <Text>抛弃 190</Text>
            </View>

            <View>
              <Text>声优角色表</Text>
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
  banner: {
    height: 400,
  },
})
