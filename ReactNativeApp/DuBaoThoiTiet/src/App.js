import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import axios from 'axios';

class App extends Component {
  state = {
    text: '',
    cityName: 'hanoi',
    CelciusDegree: true,
    error: false,
    data: null,
    loading: true,
    temp: 0
    

  }
  componentDidMount() {
    this._getAPI();
  }



  _getImage(mainWeather) {
    if (mainWeather == 'Clear') return require('./minihack/clear.png')
    else if (mainWeather == 'Clouds') return require('./minihack/clouds.png')
    else if (mainWeather == 'Rain') return require('./minihack/rain.png')
    else return require('./minihack/snow.png')
  }
  _convert(degree) {
    if (degree == 'C') return this.setState({ temp: parseInt(this.state.data.list[0].temp.day), CelciusDegree: true })
    else return this.setState({ temp: parseInt(this.state.data.list[0].temp.day * 1.8 + 32), CelciusDegree: false })

  }
  _getTime(ms) {
    var date = new Date(ms * 1000)
    dd = date.getDate()
    mm = date.getMonth() + 1
    yy = date.getFullYear()
    return dd + '/' + mm + '/' + yy
  }
  _renderItem = ({ item }) =>
    <View style={{ flexDirection: 'row', backgroundColor: '#2E2B3E', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20, height: Dimensions.get('window').height * 0.1, borderRadius: 5 }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, color: 'white' }}> {this._getTime(item.dt)} </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white' }}> {parseInt(item.temp.day)} </Text>
        <Image source={this._getImage(item.weather[0].main)} style={{ height: 50, width: 50 }} />
      </View>
    </View>

  _getAPI() {
    this.setState({ loading: true, error: false })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.cityName : this.state.text}&units=metric&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then(res => {
        this.setState({ data: res.data, loading: false, temp: parseInt(res.data.list[0].temp.day), cityName: res.data.city.name })
      }).catch(error => {
        this.setState({ error: true, loading: false })
      })
  }

  // _keyExtractor = (item) => item.dt

  render() {
    if (this.state.loading === true) {
      return (
        <View style={{ flex: 1, backgroundColor: '#2E2B3E', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    };

    return (
      this.state.error === false) ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <TextInput
              style={styles.textInput}
              placeholder={'City Name'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ text })} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._getAPI()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Search </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title} > {this.state.data.city.name} </Text>
          <Text style={styles.date} > {this._getTime(this.state.data.list[0].dt)} </Text>
          <View style={styles.current}>
            <View style={styles.bigBox}>
              <Image style={{ height: 100, width: 100 }} source={this._getImage(this.state.data.list[0].weather[0].main)} />
              <Text style={styles.status}> {this.state.data.list[0].weather[0].description} </Text>
            </View>
            <View style={styles.bigBox}>
              <Text style={styles.temperate}> {this.state.temp} </Text>
              <View style={styles.degOnChange}>
                <TouchableOpacity
                  onPress={() => this._convert("C")}>
                  <Text style={{ fontSize: 18, color: this.state.CelciusDegree ? 'white' : '#C6C4D1' }}>°C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._convert("F")}>
                  <Text style={{ fontSize: 19, color: this.state.CelciusDegree ? '#C6C4D1' : 'white' }}>°F</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            data={this.state.data.list}
            renderItem={({ item }) => this._renderItem({ item })}
            keyExtractor={(item) => this._getTime(item.dt)}
            style={styles.flatList}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <TextInput
              style={styles.textInput}
              placeholder={'City Name'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ text })}
              underlineColorAndroid='white'
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._getAPI()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Search </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'rgb(56,54,74)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 25 }}> 404 not found </Text>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  flatList: {
    width: '90%',
    height: '10%'
  },
  status: {
    color: '#C6C4D1',
    fontSize: 20,
    fontWeight: 'bold'
  },
  degOnChange: {
    flexDirection: 'row',
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  temperate: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },
  bigBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  current: {
    flexDirection: 'row',

  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 10
  },
  date: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#39354C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
})

export default App;