import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  commonStyles,
  textDefault,
  primary,
  primaryHighlight,
  textHighlight
} from "../theme";
import UnitInput from "./UnitInput";

import { connect } from "react-redux";

class UnitColumn extends PureComponent {
  state = {
    currentUnitIndex: 0
  };

  _onUnitItemPressed = index => this.setState({ currentUnitIndex: index });

  _renderUnitItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        commonStyles.horizontalPadding,
        {
          paddingVertical: 10,
          backgroundColor: index % 2 === 0 ? primary : primaryHighlight
        }
      ]}
      onPress={() => this._onUnitItemPressed(index)}
    >
      <Text
        style={{
          color:
            index === this.state.currentUnitIndex ? textHighlight : textDefault
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  _unitKeyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={commonStyles.wrapper}>
        <UnitInput 
          unit={this.props.unitList[this.state.currentUnitIndex]}
        />

        <FlatList
          data={this.props.unitList}
          extraData={this.state.currentUnitIndex}
          renderItem={this._renderUnitItem}
          keyExtractor={this._unitKeyExtractor}
        />
      </View>
    );
  }
}

// const mapAppStateToProps = appState => {
//   return { unitList: appState.unitList };
// };

const mapAppStateToProps = ({ unitList }) => ({ unitList });

export default connect(mapAppStateToProps)(UnitColumn);

// const addor = a => b => a + b;
// addor(a)(b);
