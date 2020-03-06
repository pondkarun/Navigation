import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Register: { screen: RegisterScreen },
} , {
    initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);