import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TextInput,
    Text, TouchableOpacity,
    ImageBackground,
    Alert
} from 'react-native';

class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
    }

    _onLogin() {
        const { username, password } = this.state;
        (username == 'dnq1408' && password == '123456') ?
            Alert.alert('Successfully Login')
            : Alert.alert(`Invalid Login`)
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.background} source={require('./images/background.png')} >
                    <View style={styles.container}>
                        <Image style={styles.logo} source={require('./images/logo.png')} />
                        <View style={styles.loginForm}>
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                                placeholderTextColor='#363636'
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor='#363636'
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this._onLogin()}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height / 2,
        width: width,
        alignItems: 'center'
    },
    background: {
        height: height,
        width: width,
        resizeMode: 'cover'
    },
    logo: {
        height: '40%',
        width: width,
        resizeMode: 'contain',
        marginTop: 60
    },
    loginForm: {
        height: 140,
        width: width,
        alignItems: 'center',
        marginTop: 130
    },
    input: {
        height: 40,
        width: 300,
        color: '#363636',
        backgroundColor: '#A9A9A9',
        borderRadius: 5,
        marginTop: 10

    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

export default LoginScreen;