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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, List } from './src/scripts/index';

class robot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List style={styles.list}>
            <List.Item>
                <Text style={styles.text}>相册</Text>
            </List.Item>
            <List.Item onPress={() => console.log(0)}>
                <Text style={styles.text}>收藏</Text>
            </List.Item>
            <List.Item>
                <Text style={styles.text}>钱包</Text>
            </List.Item>
            <List.Item onPress={() => console.log(0)}>
                <Text>联系我们</Text>
            </List.Item>
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    flex: 1,
  },
  list: {
    marginTop: 100,
  },
  text: {
    color: '#333',
  }
});

console.log(styles);

AppRegistry.registerComponent('robot', () => robot);
