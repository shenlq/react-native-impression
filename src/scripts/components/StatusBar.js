import React, { PropTypes } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { statusBar } from '../../styles/modules/statusBar';

// StatusBarWrap
const StatusBarWrap = ({ style, animated, showHideTransition }) => {
    // Android4.4以下
    if(Platform.OS === 'android' && Platform.Version <= 20) {
        return <View />;
    }

    return (
        <View style={[style, statusBar]}>
            <StatusBar
                barStyle="light-content"
                translucent
                animated={animated}
                showHideTransition={showHideTransition}
                backgroundColor={statusBar.backgroundColor} />
        </View>
    );
};

StatusBarWrap.propTypes = {
    animated: PropTypes.bool,
    showHideTransition: PropTypes.oneOf(['fade', 'slide']),
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

StatusBarWrap.defaultProps = {
    showHideTransition: 'fade',
    animated: false,
};

export default StatusBarWrap;
