import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CenterView from '../CenterView';
import { QuizInput } from 'react-native-quiz-input';

const styles = StyleSheet.create( {
    wrapperView: {}
} );

const getWordStructure = ( word: string ): ReadonlyArray<boolean> => {

    const wordAsArray = word.split( '' );

    const binaryArr = wordAsArray.map( ( thisLetter ) => {
        if ( thisLetter !== ' ' ) {
            return true;
        } else {
            return false;
        }
    } );

    return binaryArr;
};

// TODO: check if I can import this from the library, instead of re-declaring
type TLineBreakOnSpace = 'always' | 'auto' | 'never';

const lineBreakOnSpaceOptions = [
    'always',
    'auto',
    'never'
] as ReadonlyArray<TLineBreakOnSpace>;


storiesOf( 'QuizInput', module )
    .addDecorator( ( getStory ) => <CenterView>{ getStory() }</CenterView> )
    .add( 'Basic Example', () => {
        const sampleWord = text( 'Sample Word', 'Hello world' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                />
            </View>
        );
    } )
    .add( 'All available props', () => {
        const sampleWord = text( 'Sample Word', 'Hello world' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    maxBoxesPerLine={ number( 'Max boxes per line', 10 ) }
                    lineBreakOnSpace={ select( 'Line break on space', lineBreakOnSpaceOptions, 'always' ) }
                    autoFocus={ boolean( 'Autofocus', true ) }
                />
            </View>
        );
    } );
