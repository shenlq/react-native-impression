/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    AppRegistry,
} from 'react-native';
import { StatusBar } from './src/scripts/index';

const robot = () => {
    return (
        <View>
            <StatusBar />
            <Text>StatusBar</Text>
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
