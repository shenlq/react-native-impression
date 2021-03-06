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
    confirmMessage,
    confirmFooter,
    confirmFooterFlex,
    confirmButton,
    confirmButtonSplit,
} from '../../styles/modules/confirm';

// Confirm
export default class Confirm extends Component {
    // props 校验
    static propTypes = {
        animationType: PropTypes.string,
        title: PropTypes.any,
        buttonOk: PropTypes.string,
        buttonCancel: PropTypes.string,
        buttonReverse: PropTypes.bool,
        onPress: PropTypes.func,
        children: PropTypes.any,
        onRequestClose: PropTypes.func,
    }
    // 默认props
    static defaultProps = {
        animationType: 'fade',
        buttonOk: '确定',
        buttonCancel: '取消',
        buttonReverse: false,
    }
    onPressHandle = flag => {
        let { onPress } = this.props;

        onPress && onPress(flag);
    }
    onRequestCloseHandle = () => {
        let { onRequestClose } = this.props;

        onRequestClose && onRequestClose();
    }
    render() {
        let { buttonOk, buttonCancel, buttonReverse, animationType, title, children } = this.props,
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
                visible
                onRequestClose={this.onRequestCloseHandle}
                animationType={animationType}>
                <View style={confirmMask}>
                    <View style={confirm}>
                        <View style={confirmBody}>
                            <Text style={confirmTitle}>{title}</Text>
                            <Text style={confirmMessage}>{children}</Text>
                        </View>
                        <View style={confirmFooter}>
                            <TouchableHighlight
                                style={confirmFooterFlex}
                                activeOpacity={1}
                                onPress={() => this.onPressHandle(buttonReverse)}
                                underlayColor={backgroundColorActive}>
                                <View style={confirmButtonStyle}>
                                    <Text style={{ color: buttonReverse ? colorPrimary : colorSecondary }}>
                                        {buttonReverse ? buttonOk : buttonCancel}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <View style={confirmButtonSplit} />
                            <TouchableHighlight
                                activeOpacity={1}
                                style={confirmFooterFlex}
                                onPress={() => this.onPressHandle(!buttonReverse)}
                                underlayColor={backgroundColorActive}>
                                <View style={confirmButtonStyle}>
                                    <Text
                                        style={{
                                            color: buttonReverse ? colorSecondary : colorPrimary,
                                            fontSize: buttonFontSize }}>
                                        {buttonReverse ? buttonCancel : buttonOk}
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
