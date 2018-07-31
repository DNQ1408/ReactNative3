import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { gray, white, calendarBackground, calendarHighlight } from '../styles';
import ChooseCategory from '../components/ChooseCategory';


class AddTask extends Component {
    state = {
        date: "",
        isDateTimePickerVisible: false
    }

    componentDidMount() {
        this.setState({
            date: new Date()
        })
    }

    _handleDatePicked = () => {
        this._hideDateTimePicker();
    }

    _showDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: true
        })
    }

    _hideDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={styles.calendar}
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    onDateSelected={(date) => this.setState({ date: date })}
                />
                <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingVertical: 10, marginStart: 20 }}>
                    <Text style={styles.dayOfWeek}>{moment(this.state.date).format('dddd')}</Text>
                    <Text style={styles.date}>{moment(this.state.date).format('DD/MM/YYYY')}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>Content</Text>
                    <TextInput
                        style={{ backgroundColor: white, borderRadius: 8, borderWidth: 0.8, marginTop: 10 }}
                        underlineColorAndroid={white} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>Time</Text>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text style={styles.time}>{moment().format('hh:mm')}</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode="time"
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>Category</Text>
                    <ChooseCategory />
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    calendar: {
        height: 100,
        paddingTop: 10
    },
    dayOfWeek: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 15,
        color: gray,
        marginStart: 20
    },
    box: {
        flexDirection: 'column',
        paddingVertical: 10,
        marginHorizontal: 20
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: gray
    },
    time: {
        fontSize: 20,
        color: calendarHighlight,
        fontWeight: 'bold',
        marginTop: 5
    }
})

export default AddTask;