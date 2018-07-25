import React, { Component } from "react";
import {
  View,
  Text,
  TextInput as NativeTextInput,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  defaultTextInputStyle: {
    borderRadius: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 5,
    flexDirection: "row"
  },
  placeholder: {
    color: "#aaa"
  }
});

/**
 * @class TextInput
 * @extends Component
 */
class TextInput extends Component {
  render() {
    const { placeholderRight, ...restProps } = this.props;

    return (
      <View style={styles.defaultTextInputStyle}>
        <NativeTextInput
          {...restProps}
          style={{ flex: 1, textAlignVertical: "top" }}
          underlineColorAndroid="transparent"
        />
        {placeholderRight ? (
          <Text style={styles.placeholder}>{placeholderRight}</Text>
        ) : null}
      </View>
    );
  }
}

export default TextInput;
