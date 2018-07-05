import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  Dimensions
} from 'react-native';
import MatchContainer from "./components/MatchContainer";

class App extends Component {
  state = {
    team_name: {
      Uruguay: 'Uruguay',
      France: 'France',
      Brazil: 'Brazil',
      Belgium: 'Belgium',
      Russia: 'Russia',
      Croatia: 'Croatia'
    },
    dates: {
      match1: 'Jul 6 2018 - 21:00',
      match2: 'Jul 7 2018 - 01:00',
      match3: 'Jul 8 2018 - 01:00'
    },
    team_flag: {
      Uruguay: 'http://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png',
      France: 'http://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png',
      Brazil: 'http://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png',
      Belgium: 'http://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png',
      Russia: 'http://ssl.gstatic.com/onebox/media/sports/logos/5Y6kOqiOIv2C1sP9C_BWtA_48x48.png',
      Croatia: 'http://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png'
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.head_box }>
          <Text style={styles.head_text}>Schedule</Text>
          <Image
            source={{ uri: 'https://i.pinimg.com/originals/bd/6b/49/bd6b49482d53bbc4e770c8adec28344e.png' }}
            style={styles.head_image} />
          <Text style={styles.under_image_text} >FIFA WORLDCUP 2018</Text>
        </View>
        <View style={styles.matches_container}>
          <MatchContainer
            date={this.state.dates.match1}
            team1={this.state.team_name.Uruguay}
            team2={this.state.team_name.France}
            flag1={this.state.team_flag.Uruguay}
            flag2={this.state.team_flag.France}
          />
          <MatchContainer
            date={this.state.dates.match2}
            team1={this.state.team_name.Brazil}
            team2={this.state.team_name.Belgium}
            flag1={this.state.team_flag.Brazil}
            flag2={this.state.team_flag.Belgium}
          />
          <MatchContainer
            date={this.state.dates.match3}
            team1={this.state.team_name.Russia}
            team2={this.state.team_name.Croatia}
            flag1={this.state.team_flag.Russia}
            flag2={this.state.team_flag.Croatia}
          />
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  head_box: {
    flex: 5,
    alignItems: 'center'
  },
  head_text: {
    marginTop: '10%',
    color: 'white',
    fontSize: 30
  },
  under_image_text:{
    color: 'white',
    fontSize: 16
  },
  head_image: {
    width: 100, height: 100, marginTop: '7%' 
  },
  matches_container: {
    flex: 6,
    marginTop: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10%'
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#282F37',
    flex: 1,
  }
})


export default App;