import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import MailList from '../components/MailList';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <MailList />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  header: {
    flex: 2
  }
})