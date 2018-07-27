import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class ItemCategory extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.category}>{this.props.category}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    category: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default ItemCategory;