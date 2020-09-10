import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import WebViewScreen from './screens/WebViewScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        options={{ title: 'News Reader', headerTitleAlign: 'center' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name='details'
        options={{ title: 'Article Details', headerTitleAlign: 'center' }}
        component={DetailsScreen}
      />
      <Stack.Screen
        name='webview'
        options={{ title: 'Web Article', headerTitleAlign: 'center' }}
        component={WebViewScreen}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
