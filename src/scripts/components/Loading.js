import React, { Component, PropTypes } from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import * as styles from '../../styles/modules/loading';

// ref
let LOADING;

// Loading
export default class Loading extends Component {
    static propTypes = {
        animationType: PropTypes.string,
        children: PropTypes.node,
        onRequestClose: PropTypes.func,
    }
    // 默认props
    static defaultProps = {
        animationType: 'fade',
        children: '加载中',
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
        LOADING = this;
    }
    onRequestCloseHandle = () => {
        let { onRequestClose } = this.props;

        onRequestClose && onRequestClose();
    }
    render() {
        let { animationType, children } = this.props,
            { visible } = this.state;

        return (
            <Modal
                transparent
                visible={visible}
                onRequestClose={this.onRequestCloseHandle}
                animationType={animationType}>
                <View style={styles.loadingMask}>
                    <View style={styles.loading}>
                        <View style={styles.loadingBody}>
                            <ActivityIndicator
                                animating
                                color="#fff"
                                size="large" />
                            <Text style={styles.loadingMessage}>
                                {children}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

// show
Loading.show = () => {
    LOADING && LOADING.setState({
        visible: true,
    });
};

// hide
Loading.hide = duration => {
    if (duration) {
        setTimeout(() => {
            LOADING && LOADING.setState({
                visible: false,
            });
        }, duration);

        return;
    }

    LOADING && LOADING.setState({
        visible: false,
    });
};
