import React, { PropTypes } from 'react';
import {
    Text,
} from 'react-native';
import { mediaHeader } from '../../styles/modules/media';

// MediaHeader
const MediaHeader = ({ style, children, ...others }) => {
    return (
        <Text {...others} style={[mediaHeader, style]}>
            {children}
        </Text>
    );
};

MediaHeader.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default MediaHeader;
