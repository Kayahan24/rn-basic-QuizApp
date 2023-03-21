import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Card  from './src/components/Card'


const App = () => {
    return (
      <SafeAreaView style={styles.container}>
  
        <FlatList>
          <Card title={'Kayahan Şanlı'} comment='Herkes bir gün mezara dönecek!!'></Card>
          <Card title={'Furkan Samet Korkmaz'} comment='Herkes bir gün mezara dönecek!!'></Card>
          <Card title={'Yavuz Selim Arslan'} comment='Herkes bir gün mezara dönecek!!'></Card>
        </FlatList>
     </SafeAreaView>
    )     
  
}
const styles = StyleSheet.create({
  container:{
  backgroundColor:'#d4d4d4',
  flex:1,
  },
})

export default App;