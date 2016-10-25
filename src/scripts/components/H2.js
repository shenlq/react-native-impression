import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h2 } from '../../styles/modules/heading';


const H2 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h2, style]}>{children}</Text>
    );
};

H2.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H2;
