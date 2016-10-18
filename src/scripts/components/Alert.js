import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableHighlight,
} from 'react-native';
import {
    confirmMask,
    confirm,
    confirmBody,
    confirmTitle,
    confirmFooter,
    confirmFooterFlex,
    confirmButton,
} from '../../styles/modules/confirm';
import * as utils from '../utils';


let ALERT;

// Alert
export default class Alert extends Component {
    // props 校验
    static propTypes = {
        animationType: PropTypes.string,
        title: PropTypes.any,
        button: PropTypes.string,
        children: PropTypes.any,
        theme: PropTypes.oneOf(['primary', 'secondary']),
        visible: PropTypes.bool,
        onPress: PropTypes.func,
        onRequestClose: PropTypes.func,
    }
    // 默认props
    static defaultProps = {
        animationType: 'fade',
        button: '关闭',
        title: '警告',
        theme: 'primary',
        visible: false,
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible,
            title: props.title,
            message: props.children || '',
        };

        ALERT = this;
    }
    // 隐藏Alert
    onPressHandle = () => {
        let { onPress } = this.props;

        this.setState({
            visible: false,
        });

        onPress && onPress();
    }
    onRequestCloseHandle = () => {
        let { onRequestClose } = this.props;

        onRequestClose && onRequestClose();
    }
    render() {
        let { button, animationType, theme } = this.props,
            { visible, title, message } = this.state,
            {
                backgroundColorActive,
                colorPrimary,
                colorSecondary,
                buttonFontSize,
                ...confirmButtonStyle,
            } = confirmButton;

        return (
            <Modal
                transparent
                animationType={animationType}
                onRequestClose={this.onRequestCloseHandle}
                visible={visible}>
                <View style={confirmMask}>
                    <View style={confirm}>
                        <View style={confirmBody}>
                            { utils.isString(title) ? <Text style={confirmTitle}>{title}</Text> : title }
                            { utils.isString(message) ? <Text>{message}</Text> : message }
                        </View>
                        <View style={confirmFooter}>
                            <TouchableHighlight
                                style={confirmFooterFlex}
                                activeOpacity={1}
                                onPress={this.onPressHandle}
                                underlayColor={backgroundColorActive}>
                                <View style={confirmButtonStyle}>
                                    <Text
                                        style={{
                                            color: theme === 'primary' ? colorPrimary : colorSecondary,
                                            fontSize: buttonFontSize }}>
                                        {button}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

// show
Alert.show = params => {
    let state = {
        ...params,
        visible: true,
    };

    ALERT && ALERT.setState(state);
};

// hide
Alert.hide = () => {
    ALERT && ALERT.setState({
        visible: false,
    });
};
