/**
 * @format
 */


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

// Register the app for React Native
AppRegistry.registerComponent(appName, () => App);


