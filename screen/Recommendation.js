import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const imageDemo = {
  uri: 'http://lain.bgm.tv/pic/cover/l/aa/db/262940_z2mQQ.jpg',
}

/* 

23话
放松日2005-23-2




*/

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={imageDemo} style={styles.banner} />
        <Text style={styles.rank}>Rank 123</Text>
        <Text style={styles.title}>排球少年</Text>
        <Text>9.3</Text>
        <Text>
          小时候，日向翔阳从电视上看见排球比赛，乌野高中的一名小个子在球上的英姿，简直就是个“小巨人”，对此非常深刻，并开始迷上排球，一直想成为“小巨人”一样的人...
        </Text>
        <Text>想看 262</Text>
        <Text>看过 8902</Text>
        <Text>在看 443</Text>
        <Text>搁置 243</Text>
        <Text>抛弃 123</Text>
        <Text>26 话</Text>
        <Text>放送日 2012-10-08</Text>
      </View>
    </View>
  )
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

  banner: {
    height: 400,
    borderRadius: 25,
    marginBottom: 20,
  },
})
