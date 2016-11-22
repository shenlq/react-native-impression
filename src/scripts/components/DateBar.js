import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    dateBar,
    dateBarBody,
    dateBarText,
    dateBarButton,
    buttonBgAcitive,
    colorDisabled,
} from '../../styles/modules/dateBar';
import { flex } from '../../styles/utils/flex';


export default class DateBar extends Component {
    static propTypes = {
        date: PropTypes.instanceOf(Date).isRequired,
        maximumDate: PropTypes.instanceOf(Date),
        minimumDate: PropTypes.instanceOf(Date),
        format: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        onPressIncrease: PropTypes.func.isRequired,
        onPressDecrease: PropTypes.func.isRequired,
    }
    static defaultProps = {
        format: 'YYYY年MM月DD日',
        date: new Date(),
    }
    // 是否允许上一天
    enableDecreaseDate = () => {
        let { date, minimumDate } = this.props;

        if(date && minimumDate) {
            return moment(minimumDate).isBefore(date, 'day');
        }

        return true;
    }
    // 是否允许下一天
    enableIncreaseDate = () => {
        let { date, maximumDate } = this.props;

        if(date && maximumDate) {
            return moment(maximumDate).isAfter(date, 'day');
        }

        return true;
    }
    render() {
        let { date, format, onPress, onPressIncrease, onPressDecrease } = this.props,
            enableDecreaseDate = this.enableDecreaseDate(),
            enableIncreaseDate = this.enableIncreaseDate();

        return (
            <View
                style={dateBar}>
                <TouchableHighlight underlayColor={buttonBgAcitive} style={flex} onPress={onPress}>
                    <View style={dateBarBody}>
                        <Icon name="ios-calendar" size={22} color={dateBarText.color} />
                        <Text style={dateBarText}>
                            {moment(date).format(format)}
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    disabled={!enableDecreaseDate}
                    underlayColor={buttonBgAcitive}
                    onPress={onPressDecrease}>
                    <View style={dateBarButton}>
                        <Icon
                            size={24}
                            name="ios-arrow-back"
                            color={enableDecreaseDate ? dateBarText.color : colorDisabled} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    disabled={!enableIncreaseDate}
                    underlayColor={buttonBgAcitive}
                    onPress={onPressIncrease}>
                    <View style={dateBarButton}>
                        <Icon
                            size={24}
                            name="ios-arrow-forward"
                            color={enableIncreaseDate ? dateBarText.color : colorDisabled} />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
