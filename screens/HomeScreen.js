import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TrendingComponents from '../components/TrendingComponents'
import MovieRows from '../components/MovieRows'

const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop:30,flex:1,backgroundColor:"black"}}>
     <Header />

     <TrendingComponents />

     <MovieRows />
    </ScrollView>
  )
}                                                                                                        

export default HomeScreen

const styles = StyleSheet.create({})