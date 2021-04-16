import React, { useEffect } from 'react'
import RNQuizInputModule, { QuizInput } from 'react-native-quiz-input'

const App = () => {
  useEffect(() => {
    console.log(RNQuizInputModule)
  })

  return <QuizInput />
}

export default App
