import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#312e38' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <AppProvider>
        <Routes />
      </AppProvider>
    </KeyboardAvoidingView>
  </NavigationContainer>
);

export default App;
