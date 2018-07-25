import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

/**
 * @class RadioButton
 * @extends Component
 */
class RadioButton extends Component {
  state = {
    selectedOptionId: 1
  };

  componentDidMount() {
    this.props.onChange(
      this.props.options[this.state.selectedOptionId - 1].label
    );
  }

  /**
   * @description Handles selection of radio button
   * @param {Object} id ID of selected choice
   * @memberof RadioButton
   */
  handleSelect = id => {
    this.setState({ selectedOptionId: id });
    this.props.onChange(this.props.options[id - 1].label);
  };

  render() {
    const { options } = this.props;
    const { selectedOptionId } = this.state;
    const selectedButtonIcon = (
      <FontAwesome name="circle" size={20} color="#87ceeb" />
    );
    const unselectedButtonIcon = (
      <FontAwesome name="circle-thin" size={20} color="#aaa" />
    );
    return (
      <View>
        {options.map(option => {
          return (
            <TouchableWithoutFeedback
              key={option.id}
              onPress={() => this.handleSelect(option.id)}
              style={{ flexDirection: "row" }}
            >
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                {option.id === selectedOptionId
                  ? selectedButtonIcon
                  : unselectedButtonIcon}
                <Text style={{ fontSize: 15, marginLeft: 5 }}>
                  {option.label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

export default RadioButton;
