import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AnimeData from '../assets/data/top_500_animes.json'
import SwipeCards from 'react-native-swipe-cards'

export default function Search() {
  const [card, setCard] = useState([
    { text: 'Tomato', backgroundColor: 'red' },
    { text: 'Aubergine', backgroundColor: 'purple' },
    { text: 'Courgette', backgroundColor: 'green' },
    { text: 'Blueberry', backgroundColor: 'blue' },
    { text: 'Umm...', backgroundColor: 'cyan' },
    { text: 'orange', backgroundColor: 'orange' },
  ])

  return <SwipeCards cards={card} renderCard={cardData => <Text>asda</Text>} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
