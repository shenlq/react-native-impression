import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { list, firstItem, listTitle } from '../../styles/modules/list';
import ListItem from './ListItem';


const List = ({ title, style, children, ...others }) => {
    children = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            key: index,
            style: [index === 0 ? firstItem : null, child.props.style],
        });
    });

    return (
        <View {...others} style={[list, style]}>
            { undefined !== title &&
                <Text style={listTitle}>{title}</Text>
            }
            {children}
        </View>
    );
};

List.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

List.Item = ListItem;

export default List;
