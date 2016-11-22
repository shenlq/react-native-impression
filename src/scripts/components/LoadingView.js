import React, { PropTypes } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { container, text, indicatorColor } from '../../styles/modules/loadingView';


// 加载页面
const LoadingView = ({ style, children = '数据加载中...' }) => {
    return (
        <View style={[container, style]}>
            <ActivityIndicator color={indicatorColor} animating size="large" />
            <Text style={text}>{children}</Text>
        </View>
    );
};

LoadingView.propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
};

export default LoadingView;
