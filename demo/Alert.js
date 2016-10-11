/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    AppRegistry,
} from 'react-native';
import { Button, Alert, StatusBar } from './src/scripts/index';

class robot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }
    clickHandle = () => {
        Alert.show({
            title: '警告',
            message: '你犯错啦！！！',
        });
    }
    render() {
        return (
            <View>
                <StatusBar />
                <Button onPress={this.clickHandle}>
                    Alert
                </Button>
                <Alert />
            </View>
        );
    }
}


AppRegistry.registerComponent('robot', () => robot);
