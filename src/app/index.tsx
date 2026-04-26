import React from 'react'
import { Image, Text, View } from 'react-native'
import imagePath from '../constants/imagePath'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Image source={imagePath.react_logo}/>
    </View>
  )
}

export default Home
