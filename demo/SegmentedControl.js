/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AppRegistry,
} from 'react-native';
import { StatusBar, SegmentedControl } from './src/scripts/index';

const styles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: '#369',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    segmentedControl: {
        // backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
    },
    segmentedControlItem: {
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    segmentedControlItemActive: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 12,
        color: '#fff',
    },
    textActive: {
        fontSize: 12,
        color: '#369',
    },
});

class robot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }
    clickHandle = () => {

    }
    render() {
        return (
            <View>
                <StatusBar />
                <View style={styles.header}>
                    <SegmentedControl defaultValue="1">
                        <SegmentedControl.Item value="1">消息</SegmentedControl.Item>
                        <SegmentedControl.Item value="2">电话</SegmentedControl.Item>
                    </SegmentedControl>
                </View>
            </View>
        );
    }
}


AppRegistry.registerComponent('robot', () => robot);
