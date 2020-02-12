/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Home from './pages/home';
import Login from './pages/login';

import {ThemeProvider, configureFonts, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Cairo-Regular',
    },
    bold: {
      fontFamily: 'Cairo-Regular',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  const homeIniTialParams = {
    authenticated: false,
  };
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            options={{title: 'home', headerShown: false}}
            component={Home}
            initialParams={homeIniTialParams}
          />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
