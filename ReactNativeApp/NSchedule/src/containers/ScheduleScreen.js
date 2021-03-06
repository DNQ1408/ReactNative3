import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import { white, calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../database.json'


class Schedule extends Component {
    state = {}
    _renderItem = ({ item }) => <ItemTask task={item} />
    _renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />
    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={styles.calendar}
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                />
                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={data}
                    keyExtractor={(item) => item.id}
                />
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
    }
})

export default Schedule;