import * as React from 'react'
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'

export const QuizInput = () => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>Input will be rendered here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})

export default NativeModules.RNQuizInputModule
