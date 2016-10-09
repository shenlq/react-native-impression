import React, { PropTypes } from 'react';
import {
    View,
} from 'react-native';
import { mediaBody } from '../../styles/modules/media';

// MediaBody
const MediaBody = ({ style, children, ...others }) => {
    return (
        <View {...others} style={[mediaBody, style]}>
            {children}
        </View>
    );
};

MediaBody.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default MediaBody;
