import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import { categoryTodo, categoryEvent, categoryBirthday, categoryShopping, categoryPersonal, white } from '../styles';


class ChooseCategory extends Component {
    state = {}

    _keyExtractor = (item, index) => index.toString();

    _renderItem = (item) => {
        return (
            <View style={[styles.container, { backgroundColor: item.item.color }]}>
                <Text style={styles.text}>{item.item.category}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <FlatList
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    data={CATEGORIES}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.alert}>This task belongs to To do category</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: white,
        fontSize: 16
    },
    alert: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    }
})

const CATEGORIES = [
    {
        category: 'To do',
        color: categoryTodo
    },
    {
        category: 'Event',
        color: categoryEvent
    },
    {
        category: 'Birthday',
        color: categoryBirthday
    },
    {
        category: 'Shopping',
        color: categoryShopping
    },
    {
        category: 'Personal',
        color: categoryPersonal
    }
]

export default ChooseCategory;