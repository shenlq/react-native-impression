import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { segment } from '../../styles/modules/segmentedControl';
import SegmentedControlItem from './SegmentedControlItem';

// SegmentedControl
export default class SegmentedControl extends Component {
    static propTypes = {
        defaultValue: PropTypes.any,
        children: PropTypes.node,
        style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
        onChange: PropTypes.func,
    }
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue,
        };
    }
    // Item切换
    onValueChangeHandle = value => {
        let { onChange } = this.props;

        this.setState({
            value,
        });

        onChange && onChange(value);
    }
    render() {
        let { style, children } = this.props,
            { value } = this.state;

        children = React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                key: index,
                onPress: () => this.onValueChangeHandle(child.props.value),
                selected: value === child.props.value,
            });
        });

        return (
            <View style={[segment, style]}>
                {children}
            </View>
        );
    }
}


SegmentedControl.Item = SegmentedControlItem;

