import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Text } from 'react-native';
import CenterView from '../CenterView';
import { QuizInput } from 'react-native-quiz-input';


const styles = {
    wrapperView: {
        height: '50%'
    }
};


storiesOf( 'QuizInput', module )
    .addDecorator( ( getStory ) => <CenterView>{ getStory() }</CenterView> )
    .add( 'Basic Example', () => (
        <View style={ styles.wrapperView }>
            <QuizInput
                wordStructure={ [true, true, true, true, false, true, true, true, true, true ] }
                onChange={ action( 'onChange' ) }
            />

        </View>
    ) )
    .add( 'Dynamic content', () => (
        <View style={ styles.wrapperView }>
            <Text>The text below can be customized via knobs:</Text>
            <Text>{ text( 'Button text', 'Hello Button' ) }</Text>
        </View>
    ) );
