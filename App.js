import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './src/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <HomeScreen/>
      </View>
    );
  }
}
