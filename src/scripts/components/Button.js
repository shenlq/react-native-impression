import React, { PropTypes } from 'react';
import {
    Text,
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import { getButtonStyle } from '../../styles/modules/button';

// Button
const Button = ({ theme, size, outline, disabled=false, style, children, ...others }) => {
    let Component = TouchableHighlight,
        { button, activeButtonBg, text } = getButtonStyle(theme, size, outline, disabled);

    if(Platform.OS === 'ios') {
        Component = TouchableHighlight;
    }else if(Platform.OS === 'android') {
        Component = TouchableNativeFeedback;
    }

    return (
        <Component
            {...others}
            disabled={disabled}
            underlayColor={activeButtonBg}
            style={[button, style]} >
            <Text style={text}>
                {children}
            </Text>
        </Component>
    );
};

Button.propTypes = {
    theme: PropTypes.oneOf(['primary', 'secondary', 'default']),
    size: PropTypes.oneOf(['sm', 'lg', 'default']),
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;
