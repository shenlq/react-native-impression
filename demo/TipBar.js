/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    AppRegistry,
} from 'react-native';
import { StatusBar, TipBar } from './src/scripts/index';
import styles from './src/styles/utils';

const robot = () => {
    return (
        <View>
            <StatusBar />
            <TipBar>
                <Text style={[styles.textMuted, styles.textSm]}>没有更多数据了</Text>
            </TipBar>
        </View>
    );
};


AppRegistry.registerComponent('robot', () => robot);
