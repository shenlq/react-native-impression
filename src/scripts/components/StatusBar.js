import React, { PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { statusBar } from '../../styles/modules/statusBar';

// StatusBarWrap
const StatusBarWrap = ({ style }) => {
    return (
        <View style={[style, statusBar]}>
            <StatusBar barStyle="light-content" />
        </View>
    );
};

StatusBarWrap.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default StatusBarWrap;
