import { action } from '@storybook/addon-actions';
import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CenterView from '../CenterView';
import { QuizInput } from 'react-native-quiz-input';

const styles = StyleSheet.create( {
    wrapperView: {
        height: '50%' // TODO: check if this can have a smart height. Maybe this should be done in the library
    }
} );


// TODO: check if I can import this from the library, instead of re-declaring
type TLineBreakOnSpace = 'always' | 'auto' | 'never';

const lineBreakOnSpaceOptions = [
    'always',
    'auto',
    'never'
] as ReadonlyArray<TLineBreakOnSpace>;


storiesOf( 'QuizInput', module )
    .addDecorator( ( getStory ) => <CenterView>{ getStory() }</CenterView> )
    .add( 'Basic Example', () => (
        <View style={ styles.wrapperView }>
            <QuizInput
                wordStructure={ [true, true, true, true, false, true, true, true, true, true ] }
                onChange={ action( 'onChange' ) }
                maxBoxesPerLine={ number( 'Max boxes per line', 10 ) }
                lineBreakOnSpace={ select( 'Line break on space', lineBreakOnSpaceOptions, 'always' ) }
            />
        </View>
    ) )
    .add( 'Dynamic content', () => (
        <View style={ styles.wrapperView }>
            <Text>The text below can be customized via knobs:</Text>
            <Text>{ text( 'Button text', 'Hello Button' ) }</Text>
        </View>
    ) );
