/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    View,
    AppRegistry,
} from 'react-native';
import { StatusBar, TipBar } from './src/scripts/index';

const robot = () => {
    return (
        <View>
            <StatusBar />
            <TipBar>加载更多数据</TipBar>
            <TipBar>没有更多数据了</TipBar>
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
