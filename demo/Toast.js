/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import { Button, Toast } from './src/scripts/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'space-between',
    },
});

const robot = () => {
    return (
        <View style={styles.container}>
            <Button onPress={() => Toast.show('参数填写有误！')}>Toast</Button>
            <Toast />
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
