import React, { Component, PropTypes } from 'react';
import {
    Modal,
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
        visible: PropTypes.bool,
        animationType: PropTypes.string,
        onRequestClose: PropTypes.func,
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
    // fix
    onRequestCloseHandle = () => {
        let { onRequestClose } = this.props;

        onRequestClose && onRequestClose();
    }
    // 选择时间
    onDateChangeHandle = date => {
        this.setState({
            date,
        });
    }
    render() {
        let { onPress, mode, visible, buttonOk, buttonCancel, animationType, ...others } = this.props,
            { date } = this.state;

        return (
            <Modal
                transparent
                animationType={animationType}
                onRequestClose={this.onRequestCloseHandle}
                visible={visible}>
                <TouchableHighlight underlayColor="transparent" style={flexItem} onPress={() => onPress(false, date)}>
                    <View style={datePickerMask}>
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
                                mode={mode}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
            </Modal>
        );
    }
}
