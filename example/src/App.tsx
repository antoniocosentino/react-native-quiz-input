import React, { useEffect } from 'react';
import { View } from 'react-native';
import RNQuizInputModule, { QuizInput } from 'react-native-quiz-input';

type TInputContent = {
    wordArray: ReadonlyArray<string | false>,
    wordString: string
};

const App = () => {
    useEffect(() => {
        console.log(RNQuizInputModule);
    });
    
    const onChange = (word: TInputContent) => {
        console.log(word);
    };
    
    return (
        <View
            style={
                {
                    marginTop: 100
                }
            }
        >
            <QuizInput 
                wordStructure={[true, true, true, true, false, true, true, true, true, true ]} 
                onChange={ onChange }
            />
        </View>
    );
};

export default App;
