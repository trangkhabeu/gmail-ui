import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Meet = () => {
  return (
    <View styles={styles.container} >
      <Text> ミート, 領域展開 </Text>
    </View>
  )
}

export default Meet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})