import React, { PropTypes } from 'react';
import {
    View,
} from 'react-native';
import { mediaObject } from '../../styles/modules/media';

// MediaObject
const MediaObject = ({ style, children, ...others }) => {
    return (
        <View {...others} style={[mediaObject, style]}>
            {children}
        </View>
    );
};

MediaObject.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default MediaObject;
