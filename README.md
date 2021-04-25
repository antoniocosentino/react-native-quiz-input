# react-native-quiz-input
![Platforms]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/platforms-badge.svg )
![Unit tests]( https://github.com/antoniocosentino/react-native-quiz-input/actions/workflows/unit-tests.yml/badge.svg )
## Basic Demo
![Basic Demo]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/basic-demo.gif )

## Description
`react-native-quiz-input` is a React-Native package that allows the creation of individual character text inputs. While typing, focus will automatically move to the next input or to the previous one (in case of backspace). Spaces are also supported, therefore it is suitable for Quiz-like interfaces, Credit Card inputs, OTP screens and so on.


## Installation
with Yarn:
```
yarn add react-native-quiz-input
```

or NPM:
```
npm install react-native-quiz-input --save
```


## Usage
Import the component in your project:
```TSX
import { QuizInput } from 'react-native-quiz-input';
```
Use the component:
```TSX
<QuizInput
    wordStructure={ [ true, true, true, false, true, true, true ] }
    onChange={ onChange }
/>
```
```TSX
const onChange = ( data ) => {
    console.log(data);
    // your code goes here
};
```

## Props

| Name             | Type                       | Description                                                                                                              | Example                                   | isRequired? |
|:-----------------|:---------------------------| :------------------------------------------------------------------------------------------------------------------------| :-----------------------------------------|:------------|
| wordStructure    | `TWordStructure`           | Array representation of the words, where `true` is a letter and `false` is a space                                       | `[true, true, false, true, true, true]`   | yes         |
| onChange         | `(TCallbackData) => void`  | Callback function. It will return the input content as an array and as a string                                          | check types section for data structure    | yes         |
| maxBoxesPerLine  | `number`                   | Max input boxes per line. When set, it will automatically create multiple rows when needed. <br />Default: `0` (off)     | `13`                                      | no          |
| lineBreakOnSpace | `boolean`                  | Create a new row for each word.<br /> Default: `false`                                                                   | `true`                                    | no          | 
| autoFocus        | `boolean`                  | Autofocus first input when component is loaded.<br /> Default: `true`                                                    | `true`                                    | no          |
| backgroundColor  | `string`                   | Background color of each input box.<br /> Default: `transparent`                                                         | `#7FDCFF`                                 | no          |
| textColor        | `string`                   | Text color of each input box.<br /> Default: `#000`                                                                      | `#001F3F`                                 | no          |
| borderColor      | `string`                   | Border color of each input box.<br /> Default: `#BBB`                                                                    | `#DDD`                                    | no          |
| size             | `small \| medium \| large` | Size of each input.<br /> Default: `medium`                                                                              | `large`                                   | no          |

## Types
### TWordStructure
```typescript
type TWordStructure = ReadonlyArray<boolean>;
```
 Word structure is defined by providing an array of booleans where `true` means letter and `false` mean space.

**Example**:
```
Hello World
[ true, true, true, true, true, false, true, true, true, true, true ]
```

### TCallbackData
```typescript
type TCallbackData = {
    wordArray: ReadonlyArray<string | false>;
    wordString: string;
};
```
The callback returns an object with 2 properties:
### wordArray
An array with the input content. Each row in the array is either a string with the letter or `false` in case of a space.

### wordString
The input content as a string

**Example**:
```
{
    wordArray: ['H', 'E', 'L', 'L', 'O', false, 'W', 'O', 'R', 'L', 'D' ],
    wordString: 'HELLO WORLD'
}
```



## Other examples
### With lineBreakOnSpace: true
```TSX

const wordStructure = [ true, true, true, true, true, false, true, true, true, true, true ];

<QuizInput
    wordStructure={ wordStructure }
    onChange={ onChange }
    lineBreakOnSpace={ true }
/>
```
![Basic Demo]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/multi-line.gif )

### With long word and maxBoxesPerLine set
```TSX

const wordStructure = [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ];

<QuizInput
    wordStructure={ wordStructure }
    onChange={ onChange }
    maxBoxesPerLine={ 12 }
/>
```
![Basic Demo]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/long-word.gif )

### With size: big
```TSX

const wordStructure = [ true, true, true, true, true, false, true, true, true, true, true ];

<QuizInput
    wordStructure={ wordStructure }
    onChange={ onChange }
    size={ 'big' }
/>
```

![Basic Demo]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/size-big.gif )

### With size: small
```TSX

const wordStructure = [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ];

<QuizInput
    wordStructure={ wordStructure }
    onChange={ onChange }
    size={ 'small' }
/>
```
![Basic Demo]( https://raw.githubusercontent.com/antoniocosentino/react-native-quiz-input/main/assets/size-small.gif )

## Live Demos

### Playground
You can try out the component in different environments (including your device) on Expo.io
- [react-native-quiz-input-demo](https://snack.expo.io/@antoniocosentino/react-native-quiz-input-demo)

### Live Apps
This library is currently used in [Flipping Cards](https://antoniocosentino.github.io/flippingCards/), an iOS/Android flashcards app availble in the App Store and Play Store. If you want to see the component in action just download the app and try out **Challenge Mode**.

Are you using this library in your project? Feel free to let me know by [opening an issue](https://github.com/antoniocosentino/react-native-quiz-input/issues). I will be happy to feature your app here.

## Credits
Developed and maintained by [@antoniocosentino](https://github.com/antoniocosentino)

Many thanks to [@demchenkoalex](https://github.com/demchenkoalex) for creating the [boilerplate](https://github.com/demchenkoalex/react-native-module-template) that I used for this repo.

## License
[MIT](LICENSE)

## Found a bug?
Please [open an issue](https://github.com/antoniocosentino/react-native-quiz-input/issues). PRs are also welcome 😉 