import { action } from '@storybook/addon-actions';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CenterView from '../CenterView';
import { QuizInput } from 'react-native-quiz-input';

const styles = StyleSheet.create( {
    wrapperView: {}
} );

type TAllowedSizes = 'small' | 'medium' | 'large';

const sizeOptions = {
    Small: 'small' as TAllowedSizes,
    Medium: 'medium' as TAllowedSizes,
    Large: 'large' as TAllowedSizes
};

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
                    maxBoxesPerLine={ number( 'Max boxes per line', 0 ) }
                    lineBreakOnSpace={ boolean( 'Line break on space', false ) }
                    autoFocus={ boolean( 'Autofocus', true ) }
                    borderColor={ color( 'Border Color', '#BBBBBB' ) }
                    size={ select( 'Size', sizeOptions, 'medium' ) }
                />
            </View>
        );
    } );
