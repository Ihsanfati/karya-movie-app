import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import Movie from '../screens/movie';
import Search from '../screens/search';
import Profile from '../screens/profile';

import homeIcon from '../assets/images/home.png';
import homeActiveIcon from '../assets/images/home_active.png';
import searchIcon from '../assets/images/search.png';
import searchActiveIcon from '../assets/images/search_active.png';
import userIcon from '../assets/images/user.png';
import userActiveIcon from '../assets/images/user_active.png';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    initialRouteName="Movie"
    screenOptions={{
      tabBarActiveTintColor: '#000000',
    }}
  >
    <Tab.Screen
      name="Movie"
      component={Movie}
      options={{
        tabBarLabel: 'Movie',
        tabBarLabelStyle: styles.tabLabelStyle,
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.imageIcon}
            source={focused ? homeActiveIcon : homeIcon}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: 'Search',
        tabBarLabelStyle: styles.tabLabelStyle,
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.imageIcon}
            source={focused ? searchActiveIcon : searchIcon}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarLabelStyle: styles.tabLabelStyle,
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.imageIcon}
            source={focused ? userActiveIcon : userIcon}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  imageIcon: {
    marginTop: 5,
    width: 18,
    height: 18,
  },
  tabLabelStyle: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '700',
  },
});

export default TabNavigation;