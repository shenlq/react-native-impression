import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { hr } from '../../styles/modules/hr';

// Hr
const Hr = ({ style }) => {
    return <View style={[hr, style]} />;
};

Hr.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default Hr;
