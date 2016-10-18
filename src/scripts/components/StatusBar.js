import React, { PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { statusBar } from '../../styles/modules/statusBar';

// StatusBarWrap
const StatusBarWrap = ({ style, animated, showHideTransition }) => {
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
