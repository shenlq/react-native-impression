import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h6 } from '../../styles/modules/heading';


const H6 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h6, style]}>{children}</Text>
    );
};

H6.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H6;
