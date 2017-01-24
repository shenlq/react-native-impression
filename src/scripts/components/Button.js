import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Platform,
    ActivityIndicator,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import { getButtonStyle } from '../../styles/modules/button';

// Button
const Button = ({ children, theme, size, outline, disabled = false, loading, style, ...others }) => {
    let { button, activeButtonBg, text, indicator } = getButtonStyle(theme, size, outline, disabled),
        Component = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

    return (
        <Component
            {...others}
            disabled={disabled}
            underlayColor={activeButtonBg}>
            <View style={[button, style]}>
                <Text style={text}>{children}</Text>
                { loading &&
                    <ActivityIndicator
                        style={indicator}
                        animating
                        size="small" />
                }
            </View>
        </Component>
    );
};

Button.propTypes = {
    theme: PropTypes.oneOf(['primary', 'secondary', 'default']),
    size: PropTypes.oneOf(['sm', 'lg', 'default']),
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.any,
    loading: PropTypes.bool,
};

export default Button;
