/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    AppRegistry,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import { StatusBar, SegmentedControl, Tabs } from './src/scripts/index';

const styles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: '#369',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        flex: 1,
    },
    tabSelectedstyle: {

    },
    titleStyle: {
    },
    titleSelected: {
    }
});

class robot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            selectedTab: 'home',
        };
    }
    changeTab = (selectedTab) => {
        this.setState({
            selectedTab,
        });
    }
    render() {
        let { selectedTab } = this.state;

        return (
            <View style={{flex: 1}}>
                <Tabs tabBarStyle={styles.tabs}>
                    <Tabs.Item
                        tabStyle={selectedTab !== 'home' && styles.tabSelectedstyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.titleSelected]}
                        selected={selectedTab === 'home'}
                        title={'HOME'}
                        renderIcon={() => <Icon name='ios-home-outline' size={26} />}
                        renderSelectedIcon={() => <Icon name='ios-home' size={26} />}
                        onPress={() => this.changeTab('home')}>
                        <View>
                            <Text>Home</Text>
                        </View>
                    </Tabs.Item>
                    <Tabs.Item
                        tabStyle={selectedTab !== 'about' && styles.tabSelectedstyle}
                        titleStyle={[styles.titleStyle]}
                        selectedTitleStyle={[styles.titleSelected]}
                        selected={selectedTab === 'about'}
                        title={'ABOUT'}
                        renderIcon={() => <Icon name='ios-ribbon-outline' size={26} />}
                        renderSelectedIcon={() => <Icon name='ios-ribbon' size={26} />}
                        onPress={() => this.changeTab('about')}>
                        <View>
                            <Text>About</Text>
                        </View>
                    </Tabs.Item>
                </Tabs>
            </View>
        );
    }
}


AppRegistry.registerComponent('robot', () => robot);
