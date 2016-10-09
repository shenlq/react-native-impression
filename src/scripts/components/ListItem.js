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
import { listItem, listItemContainer, listIcon } from '../../styles/modules/list';

// ListItem
const ListItem = ({ onPress, style, children, ...others }) => {
    let Component = View,
        { backgroundColorActive, ...itemStyle } = listItem;

    // clickable
    if(onPress) {
        let { style } = children.props;

        children = React.cloneElement(children, {
            style: [flex, style]
        });

        Component = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    }

    return (
        <Component
            {...others}
            onPress={onPress}
            style={[itemStyle, style]}
            underlayColor={backgroundColorActive}>
            <View style={listItemContainer}>
                {children}
                { onPress &&
                    <Icon name="angle-right" size={listIcon.size} color={listIcon.color}/>
                }
            </View>
        </Component>
    );
};

ListItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.element,
};

export default ListItem;
