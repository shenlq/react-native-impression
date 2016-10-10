import React from 'react';
import { View, StatusBar } from 'react-native';
import { statusBar } from '../../styles/modules/statusBar';

// StatusBarWrap
const StatusBarWrap = () => {
    return (
        <View style={statusBar}>
            <StatusBar barStyle="light-content" />
        </View>
    );
};

export default StatusBarWrap;
