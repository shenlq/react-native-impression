import React, { PropTypes } from 'react';
import {
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { flex } from '../../styles/utils/flex';
import { listItem, listArrow } from '../../styles/modules/list';

// ListItem
const ListItem = ({ onPress, style, children, ...others }) => {
    let Component = View,
        { backgroundColorActive, ...itemStyle } = listItem;

    // clickable
    if(onPress) {
        Component = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    }

    return (
        <Component
            {...others}
            onPress={onPress}
            style={[itemStyle, style]}
            underlayColor={backgroundColorActive}>
            <View style={flex}>
                <View style={flex}>
                    {children}
                </View>
                { onPress &&
                    <Icon name="angle-right" size={listArrow.size} color={listArrow.color} />
                }
            </View>
        </Component>
    );
};

ListItem.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default ListItem;
