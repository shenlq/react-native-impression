import React, { PropTypes } from 'react';
import {
    View,
} from 'react-native';
import { media } from '../../styles/modules/media';
import { borderVerticaled } from '../../styles/modules/common';
import MediaObject from './MediaObject';
import MediaBody from './MediaBody';
import MediaHeader from './MediaHeader';

// Media
const Media = ({ bordered = true, style, children, ...others }) => {
    return (
        <View {...others} style={[media, bordered ? borderVerticaled : null, style]}>
            {children}
        </View>
    );
};

Media.propTypes = {
    bordered: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

Media.Object = MediaObject;
Media.Body = MediaBody;
Media.Header = MediaHeader;

export default Media;
