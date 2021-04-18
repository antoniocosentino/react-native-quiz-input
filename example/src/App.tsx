import React, { useEffect } from 'react';
import { View } from 'react-native';
import RNQuizInputModule, { QuizInput, TInputContent } from 'react-native-quiz-input';

const App = () => {
    useEffect( () => {
        console.log( RNQuizInputModule );
    } );

    const onChange = ( word: TInputContent ) => {
        console.log( word );
    };

    return (
        <View
            style={
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    marginTop: 100
                }
            }
        >
            <QuizInput
                wordStructure={ [true, true, true, true, false, true, true, true, true, true ] }
                onChange={ onChange }
            />
        </View>
    );
};

export default App;
