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
import { Button, Confirm, StatusBar } from './src/scripts/index';

class robot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
    }
    clickHandle = () => {
        this.setState({
            show: true,
        });
    }
    confirmPressHandle = () => {
        this.setState({
            show: false,
        });
    }
    render() {
        let { show } = this.state;

        return (
            <View>
                <StatusBar />
                <Button
                    style={{ bottom: 0, left: 0 }}
                    onPress={this.clickHandle}>
                    Confirm
                </Button>
                { show &&
                    <Confirm title="添加收藏" onPress={this.confirmPressHandle}>
                        确定添加报表到我的收藏？
                    </Confirm>
                }
            </View>
        );
    }
}


AppRegistry.registerComponent('robot', () => robot);
