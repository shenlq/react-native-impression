/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { List, Media } from './src/scripts/index';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f3',
        flex: 1,
        marginTop: 30,
    },
    list: {
        marginTop: 0,
    },
    media: {
        marginBottom: 20,
    },
    text: {
        color: '#333',
    },
});

const robot = () => {
    return (
        <View style={styles.container}>
            <Media style={styles.media}>
                <Media.Object>
                    <Image style={{ width: 60, height: 60 }} source={require('./images/avatar.jpg')} />
                </Media.Object>
                <Media.Body>
                    <Media.Header>沈林强</Media.Header>
                    <Text>shenlinqiang@imdada.cn</Text>
                </Media.Body>
            </Media>
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
            </List>
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
