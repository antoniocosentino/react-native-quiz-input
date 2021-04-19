import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import CenterView from '../CenterView';
import { QuizInput } from 'react-native-quiz-input';
import style from './style';

storiesOf( 'QuizInput', module )
    .addDecorator( ( getStory ) => <CenterView>{ getStory() }</CenterView> )
    .add( 'Basic Example', () => (
        <View style={ style.wrapperView } onPress={ action( 'clicked-text' ) }>
            <QuizInput
                wordStructure={ [true, true, true, true, false, true, true, true, true, true ] }
                onChange={ action( 'onChange' ) }
            />

        </View>
    ) )
    .add( 'Dynamic content', () => (
        <View style={ style.wrapperView } onPress={ action( 'clicked-emoji' ) }>
            <Text>The text below can be customized via knobs:</Text>
            <Text>{ text( 'Button text', 'Hello Button' ) }</Text>
        </View>
    ) );
