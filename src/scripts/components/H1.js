import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h1 } from '../../styles/modules/heading';


const H1 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h1, style]}>{children}</Text>
    );
};

H1.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H1;
