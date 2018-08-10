import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { textDefault, commonStyles } from "../theme";
import UnitColumn from "../components/UnitColumn";
import { createChangeScreenAction, CATEGORIES_SCREEN } from "../actions/";

class ConvertScreen extends PureComponent {
  state = {};

  _onChangeScreenButtonPressed = () => {
    this.props.createChangeScreenAction(CATEGORIES_SCREEN);
  }

  render() {
    return (
      <View style={commonStyles.wrapper}>
        <View
          style={[
            commonStyles.wrapper,
            {
              flexDirection: "row"
            }
          ]}
        >
          <UnitColumn />
          <UnitColumn />
        </View>
        <Button onPress={this._onChangeScreenButtonPressed} title="Categories" />
      </View>
    );
  }
}

export default connect(null, { createChangeScreenAction })(ConvertScreen);
