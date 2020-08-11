import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const imageDemo = {
  uri: 'http://lain.bgm.tv/pic/cover/l/aa/db/262940_z2mQQ.jpg',
}

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.bannerContainer}>
          <Image source={imageDemo} style={styles.banner} />
          <Text style={styles.rank}>Rank 123</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>排球少年</Text>
          <View style={styles.headerStatus}>
            <Text>
              <MaterialIcons name="live-tv" size={15} color="#03a9f4" />
              26 话
            </Text>
            <Text>
              <AntDesign name="staro" size={18} color="#03a9f4" />
              9.3
            </Text>
          </View>
        </View>

        <Text style={styles.desc}>
          简介:
          小时候，日向翔阳从电视上看见排球比赛，乌野高中的一名小个子在球上的英姿，简直就是个“小巨人”，对此非常深刻，并开始迷上排球，一直想成为“小巨人”一样的人...
        </Text>

        <View style={styles.collectionContainer}>
          <Text style={styles.wish}>想看 262</Text>
          <Text style={styles.watched}>看过 8902</Text>
          <Text style={styles.watching}>在看 443</Text>
          <Text style={styles.delay}>搁置 243</Text>
          <Text style={styles.delete}>抛弃 123</Text>
        </View>
      </View>
    </View>
  )
}

const collectionStyle = {
  color: '#fff',
  fontSize: 11,
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
  },
  headerStatus: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  desc: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  collectionContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  wish: {
    ...collectionStyle,
    backgroundColor: 'red',
  },
  watching: {
    ...collectionStyle,
    backgroundColor: 'orange',
  },
  watched: {
    ...collectionStyle,
    backgroundColor: 'purple',
  },
  delay: {
    ...collectionStyle,
    backgroundColor: 'blue',
  },
  delete: {
    ...collectionStyle,
    backgroundColor: 'gray',
  },
})
