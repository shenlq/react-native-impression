import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h4 } from '../../styles/modules/heading';


const H4 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h4, style]}>{children}</Text>
    );
};

H4.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H4;
