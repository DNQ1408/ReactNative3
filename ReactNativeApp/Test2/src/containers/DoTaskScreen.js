import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux'
import { doTask } from '../actions'

class DoTaskScreen extends Component {
    state = {
        number: 0
    }

    onPress = (number) => {
        this.props.doTask(number);
        this.setState({ number: number })
    }
    render() {
        return (
            <View style={styles.containers}>
                <View style={styles.box}>
                    <Text style={styles.text}>{this.props.number}</Text>
                </View>
                <View>
                    <Button
                        onPress={() => this.onPress(this.state.number + 1)}
                        title='+'
                        style={styles.button}
                    />
                    <Button
                        onPress={() => this.onPress(this.state.number - 1)}
                        title="-"
                        style={styles.button}

                    />
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    containers: {
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    box: {
        alignItems: 'center',
        margin: 20
    },
    button: {
        width: width
    }
})
const mapStateToProps = (store) => ({ number: store.number })

export default connect(mapStateToProps, { doTask })(DoTaskScreen);
