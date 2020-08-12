//每个条目的详细信息 参考Bilibili模糊和Bangumi条目
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    <View style={styles.container}>
      {loading ? <Text>加载中...</Text> : <Text>详细信息</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
