import { StyleSheet } from "react-native";

export const primary = "#7854a4";
export const primaryHighlight = "#624487";
export const primaryDark = "#533a71";
export const textDefault = "#ffffff";
export const textHighlight = "#feeebc";

export const commonStyles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  bgPrimary: {
    backgroundColor: primary
  },
  textLarge: {
    fontSize: 24,
    color: textDefault,
    paddingVertical: 10
  },
  horizontalPadding: {
    paddingHorizontal: 5
  }
});
