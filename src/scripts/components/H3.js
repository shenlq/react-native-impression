import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h3 } from '../../styles/modules/heading';


const H3 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h3, style]}>{children}</Text>
    );
};

H3.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H3;
