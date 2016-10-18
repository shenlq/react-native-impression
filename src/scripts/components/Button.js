import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import { getButtonStyle } from '../../styles/modules/button';

// Button
const Button = ({ children, theme, size, outline, disabled = false, style, ...others }) => {
    let { button, activeButtonBg, text } = getButtonStyle(theme, size, outline, disabled),
        Component = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

    return (
        <Component
            {...others}
            disabled={disabled}
            underlayColor={activeButtonBg}>
            <View style={[button, style]}>
                <Text style={text}>{children}</Text>
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
};

export default Button;
