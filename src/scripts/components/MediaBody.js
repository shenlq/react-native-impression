import React, { PropTypes } from 'react';
import {
    View,
} from 'react-native';
import {
    mediaBody,
    mediaBodySpacerLeft,
    mediaBodySpacerRight,
} from '../../styles/modules/media';

// MediaBody
const MediaBody = ({ isFirst, isLast, style, children, ...others }) => {
    let bodyStyle = [mediaBody];

    !isFirst && bodyStyle.push(mediaBodySpacerLeft);
    !isLast && bodyStyle.push(mediaBodySpacerRight);

    bodyStyle.push(style);


    return (
        <View {...others} style={bodyStyle}>
            {children}
        </View>
    );
};

MediaBody.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
};

export default MediaBody;
