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
    .add( 'Props playground', () => {
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
                    backgroundColor={ color( 'Box BG Color', 'transparent' ) }
                    textColor={ color( 'Text Color', '#000' ) }
                    borderColor={ color( 'Box Border Color', '#BBBBBB' ) }
                    size={ select( 'Size', sizeOptions, 'medium' ) }
                />
            </View>
        );
    } )
    .add( 'With lineBreakOnSpace', () => {
        const sampleWord = text( 'Sample Word', 'Hello world' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    lineBreakOnSpace={ true }
                />
            </View>
        );
    } )
    .add( 'With maxBoxesPerLine', () => {
        const sampleWord = text( 'Sample Word', 'Extraterrestrial' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    maxBoxesPerLine={ 12 }
                />
            </View>
        );
    } )
    .add( 'With maxBoxesPerLine + lineBreakOnSpace', () => {
        const sampleWord = text( 'Sample Word', 'This is extraterrestrial' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    lineBreakOnSpace={ true }
                    maxBoxesPerLine={ 12 }
                />
            </View>
        );
    } )
    .add( 'Size: large', () => {
        const sampleWord = text( 'Sample Word', 'Hello world' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    size={ 'large' }
                />
            </View>
        );
    } )
    .add( 'Size: small', () => {
        const sampleWord = text( 'Sample Word', 'Congratulations' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    size={ 'small' }
                />
            </View>
        );
    } )
    .add( 'Alternative Styling', () => {
        const sampleWord = text( 'Sample Word', 'Hello world' );
        const wordStructure = getWordStructure( sampleWord );

        return (
            <View style={ styles.wrapperView }>
                <QuizInput
                    wordStructure={ wordStructure }
                    onChange={ action( 'onChange' ) }
                    backgroundColor={ '#F7F7DA' }
                    borderColor={ '#F7CD00' }
                    textColor={ '#E8960F' }
                />
            </View>
        );
    } );
