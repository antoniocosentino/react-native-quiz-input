/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
//import App from './src/App'
import App from './storybook';

AppRegistry.registerComponent( appName, () => App );
