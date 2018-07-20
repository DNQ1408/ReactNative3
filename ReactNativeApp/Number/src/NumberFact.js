import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    Dimension
} from 'react-native';

import axios from 'axios';


const API_KEY = 'jXr24htA2zmshid2IUXfbIPAJd3op1nJyryjsn1Pbe5w5P0hOt';

class NumberFact extends Component {
    state = {
        fact: 'Nothing',
        number: 0,
        type: '',
        loading: true
    }

    componentWillMount() {
        this._getData();
    }

    _getData() {
        this.setState({ loading: true });
        axios.get("https://numbersapi.p.mashape.com/random/trivia?json=true", {
            headers: {
                'X-Mashape-Key': API_KEY
            }
        })
            .then((res) => {
                if (res.data) {
                    this.setState({
                        fact: res.data.text,
                        number: res.data.number,
                        type: res.data.type,
                        loading: false
                    });
                    console.log(res);

                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading === false ? (
                    <View style={styles.box}>
                        <View style={styles.number}>
                            <Text style={styles.textNumber}>{this.state.number}</Text>
                        </View>
                        <View style={styles.fact}>
                            <Text style={styles.textFact}>{this.state.fact}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={this._getData}
                            style={styles.newNumber}>
                            <Text style={styles.textButton}>New Number</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                        <ActivityIndicator />
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        flex: 1,
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#161616',
    },
    number: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fact: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    newNumber: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textNumber: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    textFact: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
    },
    textButton: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30,
    }
})

export default NumberFact;