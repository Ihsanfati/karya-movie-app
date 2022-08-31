import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from './tabNavigation';
import MovieDetail from '../screens/movieDetail';

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="InitialScreen">
      <Stack.Screen
        name="InitialScreen"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Movie Detail',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;