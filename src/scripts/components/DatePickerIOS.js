import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    DatePickerIOS,
} from 'react-native';
import {
    datePickerMask,
    datePicker,
    datePickerHeader,
    datePickerButton,
} from '../../styles/modules/datePicker';
import { textMuted } from '../../styles/utils/text';
import { flexItem } from '../../styles/utils/flex';


export default class DatePicker extends Component {
    static propTypes = {
        mode: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        onPress: PropTypes.func,
        buttonOk: PropTypes.string,
        buttonCancel: PropTypes.string,
    }
    static defaultProps = {
        visible: false,
        animationType: 'fade',
        mode: 'date',
        buttonOk: '确定',
        buttonCancel: '取消',
    }
    constructor(props) {
        super(props);

        this.state = {
            date: props.date || new Date(),
        };
    }
    // 选择时间
    onDateChangeHandle = date => {
        this.setState({
            date,
        });
    }
    componentWillReceiveProps(nextProps) {
        let { date } = this.props;

        if(nextProps.date !== date) {
            this.setState({
                date: nextProps.date,
            });
        }
    }
    render() {
        let { onPress, mode, buttonOk, buttonCancel, ...others } = this.props,
            { date } = this.state;

        return (
            <View style={datePickerMask}>
                <TouchableHighlight
                    underlayColor="transparent"
                    style={flexItem}
                    onPress={() => onPress(false, date)}>
                    <View style={flexItem} />
                </TouchableHighlight>
                <View style={datePicker}>
                    <View style={datePickerHeader}>
                        <TouchableHighlight underlayColor="transparent" onPress={() => onPress(false, date)}>
                            <View>
                                <Text style={[datePickerButton, textMuted]}>
                                    {buttonCancel}
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparent" onPress={() => onPress(true, date)}>
                            <View>
                                <Text style={datePickerButton}>
                                    {buttonOk}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <DatePickerIOS
                        {...others}
                        onDateChange={this.onDateChangeHandle}
                        date={date}
                        mode={mode} />
                </View>
            </View>
        );
    }
}
