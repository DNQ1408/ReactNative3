import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

class MatchContainer extends Component {
    render() {
        return (
            <View style={styles.match_container}>
                <View style={styles.date_box}>
                    <Text style={styles.date_text}>{this.props.date}</Text>
                </View>
                <View style={styles.match_box}>
                    <View style={styles.team_box}>
                        <Text style={styles.team_name}>{this.props.team1}</Text>
                    </View>
                    <Image style={styles.flag} source={{ uri: this.props.flag1 }} resizeMode="contain" />
                    <Text style={styles.team_name}>-</Text>
                    <Image style={styles.flag} source={{ uri: this.props.flag2 }} resizeMode="contain" />
                    <View style={styles.team_box}>
                        <Text style={styles.team_name}>{this.props.team2}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    match_container: {
        borderRadius: 10,
        height: height / 8,
        backgroundColor: '#3E465D',
        width: width / 6 * 5,
        flexDirection: 'column'
    },
    date_box: {
        flex: 1,
        marginTop: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    date_text: {
        color: 'white'
    },
    match_box: {
        flex: 3,
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    team_box: {
        flex: 3,
        alignItems: 'center'
    },
    team_name: {
        color: 'white'
    },
    flag: {
        flex: 2,
        width: '10%',
        height: '10%'
    }
})

export default MatchContainer;