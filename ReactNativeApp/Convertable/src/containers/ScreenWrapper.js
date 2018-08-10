import React, { PureComponent } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { primary, commonStyles } from "../theme";
import { CONVERT_SCREEN } from "../actions/index";
import ConvertScreen from "../containers/ConvertScreen";
import CategoriesScreen from "../containers/CategoriesScreen";

class ScreenWrapper extends PureComponent {
  render() {
    return (
      <View
        style={[
          commonStyles.wrapper,
          commonStyles.bgPrimary,
          {
            paddingTop: Platform.OS === "ios" ? 20 : 0
          }
        ]}
      >
        {
          this.props.screen === CONVERT_SCREEN
            ? <ConvertScreen />
            : <CategoriesScreen />
        }
      </View>
    );
  }
}
const mapAppStateToProps = ({ screen }) => ({ screen })

export default connect(mapAppStateToProps)(ScreenWrapper);