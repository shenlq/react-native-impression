import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import * as utils from '../utils';
import Hr from './Hr';
import { tipBar, tipBody, tipLine, tipText } from '../../styles/modules/tipBar';

/**
 * 列表下拉信息提示.
 */
const TipBar = ({ line = false, style, children }) => {
    return (
        <View style={[style, tipBar]}>
            { line && <Hr style={tipLine} /> }
            <View style={tipBody}>
                { utils.isString(children) ? <Text style={tipText}>{children}</Text> : children }
            </View>
            { line && <Hr style={tipLine} /> }
        </View>
    );
};

TipBar.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    line: PropTypes.bool,
};

export default TipBar;
