import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Hr from './Hr';
import { tipBar, tipBody, tipLine } from '../../styles/modules/tipBar';

/**
 * 列表下拉信息提示.
 */
const TipBar = ({ style, children }) => {
    return (
        <View style={[style, tipBar]}>
            <Hr style={tipLine} />
            <View style={tipBody}>
                {children}
            </View>
            <Hr style={tipLine} />
        </View>
    );
};

TipBar.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default TipBar;
