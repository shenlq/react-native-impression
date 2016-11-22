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
import { Button } from './src/scripts/index';

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
            <Button>Button</Button>
            <Button theme="secondary">Button</Button>
            <Button theme="default">Button</Button>
            <Button outline>Button</Button>
            <Button outline theme="secondary">Button</Button>
            <Button outline theme="default">Button</Button>
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
