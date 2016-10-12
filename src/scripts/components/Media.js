import React, { PropTypes } from 'react';
import {
    View,
    TouchableHighlight,
} from 'react-native';
import { media } from '../../styles/modules/media';
import { borderVerticaled } from '../../styles/utils';
import MediaObject from './MediaObject';
import MediaBody from './MediaBody';
import MediaHeader from './MediaHeader';

// Media
const Media = ({ bordered = true, touchable = false, style, children, ...others }) => {
    let { backgroundColorActive, ...mediaStyle } = media;

    if(touchable) {
        return (
            <TouchableHighlight
                {...others}
                activeOpacity={1}
                underlayColor={backgroundColorActive}>
                <View style={[mediaStyle, bordered ? borderVerticaled : null, style]}>
                    {children}
                </View>
            </TouchableHighlight>
        );
    }

    return (
        <View {...others} style={[mediaStyle, bordered ? borderVerticaled : null, style]}>
            {children}
        </View>
    );
};

Media.propTypes = {
    bordered: PropTypes.bool,
    touchable: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

Media.Object = MediaObject;
Media.Body = MediaBody;
Media.Header = MediaHeader;

export default Media;
