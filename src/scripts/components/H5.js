import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { h5 } from '../../styles/modules/heading';


const H5 = ({ children, style, ...others }) => {
    return (
        <Text {...others} style={[h5, style]}>{children}</Text>
    );
};

H5.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default H5;
