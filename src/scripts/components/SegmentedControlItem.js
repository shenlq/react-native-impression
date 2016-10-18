import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {
    segmentItem,
    segmentItemFirst,
    segmentItemLast,
    segmentItemActive,
    segmentItemText,
    segmentItemActiveText,
} from '../../styles/modules/segmentedControl';

// SegmentedControlItem
const SegmentedControlItem = ({ selected, isFirst, onPress, style, children }) => {
    return (
        <TouchableHighlight
            underlayColor={selected ? segmentItemActive.backgroundColor : 'transparent'}
            onPress={onPress}>
            <View
                style={[
                    segmentItem,
                    selected ? segmentItemActive : null,
                    isFirst ? segmentItemFirst : segmentItemLast,
                    style]}>
                <Text style={[segmentItemText, selected ? segmentItemActiveText : null]}>
                    {children}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

SegmentedControlItem.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    isFirst: PropTypes.bool,
};


export default SegmentedControlItem;
