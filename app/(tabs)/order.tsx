import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const order = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>order</Text>
    </View>
  )
}

export default order

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff8800'
  }
})