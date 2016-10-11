import React, { PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import {
    segmentItem,
    segmentItemActive,
    segmentItemText,
    segmentItemActiveText,
} from '../../styles/modules/segmentedControl';

// SegmentedControlItem
const SegmentedControlItem = ({ selected, onPress, style, children }) => {
    return (
        <TouchableHighlight
            underlayColor="transparent"
            onPress={onPress}
            style={[segmentItem, selected ? segmentItemActive : null, style]}>
            <Text style={[segmentItemText, selected ? segmentItemActiveText : null]}>{children}</Text>
        </TouchableHighlight>
    );
};

SegmentedControlItem.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    selected: PropTypes.bool,
    onPress: PropTypes.func,
};


export default SegmentedControlItem;
