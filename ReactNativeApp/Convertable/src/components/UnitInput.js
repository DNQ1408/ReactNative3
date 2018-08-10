import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { commonStyles, primaryDark } from "../theme";
import { connect } from "react-redux";
import { createChangeBaseValueAction } from "../actions/";
import { create } from "handlebars";

class UnitInput extends PureComponent {
  state = {
    inputValue: (this.props.baseValue / this.props.unit.ratio).toString()
  };

  componentWillReceiveProps(nextProps) {
    const newValue = nextProps.baseValue / nextProps.unit.ratio;

    if (newValue != parseFloat(this.state.inputValue)) {
      this.setState({
        inputValue: newValue.toString()
      });
    }
  }

  _onChange = value => {
    this.setState({ inputValue: value }, () => {
      if (!isNaN(parseFloat(value))) {
        this.props.createChangeBaseValueAction(parseFloat(value) * this.props.unit.ratio);
      }
    });
  };

  render() {
    const unit = this.props.unit;
    return (
      <View
        style={[
          commonStyles.horizontalPadding,
          {
            backgroundColor: primaryDark
          }
        ]}
      >
        <Text style={commonStyles.textLarge}>{unit.name}</Text>
        <TextInput
          style={commonStyles.textLarge}
          value={this.state.inputValue}
          onChangeText={this._onChange}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const mapAppStateToProps = ({ baseValue }) => ({ baseValue });

// const mapDispatchToProps = dispatch => ({
//   createChangeBaseValueAction: newValue =>
//     dispatch(createChangeBaseValueAction(newValue))
// });

export default connect(mapAppStateToProps, { createChangeBaseValueAction })(UnitInput);
