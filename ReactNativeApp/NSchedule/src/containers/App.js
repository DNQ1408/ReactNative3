import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


import ScheduleScreen from './ScheduleScreen';
import AddTaskSCreen from './AddTaskScreen';
import { gray, calendarHighlight, white } from '../styles';

const Navigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerRight:
      <TouchableOpacity
      onPress={() => navigation.navigate('AddTask')}>
        <Image 
        style= {{ width: 20, height: 20, marginEnd: 10 }}
        source= {{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnSURBVDhPY6A1+A+lyQajBpBgAEghqZgoQLRCXGDUACoYQGvAwAAA0ioY6ISQC+UAAAAASUVORK5CYII=' }} />
      </TouchableOpacity>,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: gray
      },
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
        elevation: 0
      }
    })
  },
  AddTask: {
    screen: AddTaskSCreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add new task',
      headerLeft:
      <TouchableOpacity
      onPress={() => navigation.navigate('Schedule')}>
        <Image 
        style= {{ width: 20, height: 20, marginEnd: 10, paddingRight: 10 }}
        source= {{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC0SURBVEhLzZWxDcJAEARfIiNxA27BMV24BcfETnAj9EEDiBrcgkPHZEiwI3Q5wa7ESCO9LtiX/u7/27/Tyem79HOUd/mWMwUnB3mThG+yl1aukvBdDhScXCThT3mi4OQsCX/JkYITAglmAzaywlFwJIQvFJzQRJpJOM21wvgxhoQzloynDW7pKgl/SC6WlfgGED2iItrkIjqmRfSiFdGnoog+dkX0uYb4hwPRL7OIfvo/0NoHdUE1d0/6iwcAAAAASUVORK5CYII=' }} />
      </TouchableOpacity>,
      headerRight:
      <TouchableOpacity
      onPress={() => navigation.navigate('Schedule')}>
        <Text  style={{ marginEnd: 10, fontWeight: 'bold', fontSize: 18, color: calendarHighlight }}>Done</Text>
      </TouchableOpacity>,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: gray,
        textAlign: 'center'

      },
      headerStyle: {
        backgroundColor: white,
        borderBottomWidth: 0,
        elevation: 0
      }
    })
  }
});
class App extends Component {
  state = {}
  render() {
    return (
      <Navigation/>
    );
  }
}


export default App;