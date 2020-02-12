import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
