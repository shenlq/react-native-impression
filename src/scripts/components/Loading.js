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
    // 移除
    componentWillUnmount() {
        LOADING = undefined;
    }
    render() {
        let { animationType, children } = this.props,
            { visible } = this.state;

        return (
            <Modal
                animationType={animationType}
                transparent
                visible={visible}>
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
Loading.hide = () => {
    LOADING && LOADING.setState({
        visible: false,
    });
};
