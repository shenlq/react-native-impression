import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { list } from '../../styles/modules/list';
import ListItem from './ListItem';


const List = ({ style, children, ...others }) => {
    return (
        <View {...others} style={[list, style]}>
            {children}
        </View>
    );
};

List.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

List.Item = ListItem;

export default List;
