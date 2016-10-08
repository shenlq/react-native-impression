/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from './src/scripts/index'

class robot extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Button
                theme="default"
                onPress={() => console.log(1)}>
                123
            </Button>
            <Button
            disabled
                size="sm"
                onPress={() => console.log(1)}>
                123
            </Button>
            <Button
            disabled
                size="lg"
                theme="secondary"
                onPress={() => console.log(1)}>
                123
            </Button>
            <Button
                outline
                theme="default"
                onPress={() => console.log(1)}>
                123
            </Button>
            <Button
                outline
                size="sm"
                onPress={() => console.log(1)}>
                123
            </Button>
            <Button
                outline
                size="lg"
                theme="secondary"
                onPress={() => console.log(1)}>
                123
            </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('robot', () => robot);
