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
        animationType: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
        onRequestClose: PropTypes.func,
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
    onRequestCloseHandle = () => {
        let { onRequestClose } = this.props;

        onRequestClose && onRequestClose();
    }
    render() {
        let { animationType, style } = this.props,
            { visible, message } = this.state;

        return (
            <Modal
                transparent
                visible={visible}
                animationType={animationType}
                onRequestClose={this.onRequestCloseHandle}>
                <View style={toastMask}>
                    <View style={[style, toast]}>
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
