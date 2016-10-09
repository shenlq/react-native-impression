import React, { PropTypes } from 'react';
import {
    Text,
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { flex } from '../../styles/modules/common';
import { listItem, listItemContainer, listArrow } from '../../styles/modules/list';

// ListItem
const ListItem = ({ onPress, style, children, ...others }) => {
    let Component = View,
        { backgroundColorActive, ...itemStyle } = listItem;

    console.log(children);
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
                    <Icon name="angle-right" size={listArrow.size} color={listArrow.color}/>
                }
            </View>
        </Component>
    );
};

ListItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
};

export default ListItem;
