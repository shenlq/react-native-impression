import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, List, ListItem } from './src/scripts/index'

class robot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List style={styles.list}>
            <ListItem>
                <Text style={styles.text}>相册</Text>
            </ListItem>
            <ListItem onPress={() => console.log(0)}>
                <Text style={styles.text}>收藏</Text>
            </ListItem>
            <ListItem>
                <Text style={styles.text}>钱包</Text>
            </ListItem>
            <ListItem>
                <Text style={styles.text}>卡包</Text>
            </ListItem>
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
