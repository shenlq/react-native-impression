import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Modal,
} from 'react-native';
import { toastMask, toast, toastBody } from '../../styles/modules/toast';


let TOAST,
    TIMER;

/**
 * Toast组件.
 */
export default class Toast extends Component {
    // props 校验
    static propTypes = {
        // 动画类型
        animationType: PropTypes.string,
    }
    // 默认props
    static defaultProps = {
        animationType: 'slide',
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
        TOAST = this;
    }
    // 清空定时器
    componentWillUnmount() {
        clearTimeout(TIMER);
        TOAST = undefined;
    }
    render() {
        let { animationType } = this.props,
            { visible, message } = this.state;

        return (
            <Modal
                animationType={animationType}
                transparent
                visible={visible}>
                <View style={toastMask}>
                    <View style={toast}>
                        <Text style={toastBody}>{message}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

// 隐藏消息
const hide = duration => {
    TIMER = setTimeout(() => {
        TOAST && TOAST.setState({
            visible: false,
        });
    }, duration);
};

// 显示信息
Toast.show = (message, duration = 2000) => {
    TOAST && TOAST.setState({
        visible: true,
        message,
    });

    hide(duration);
};
