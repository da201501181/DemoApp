import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";

import Form from "../../components/Form/Form";
import RegistrationProgess from "../../components/RegistrationProgress/RegistrationProgress";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

// configurable or can be requested from backend
const fields = [
  {
    type: "textInput",
    placeholder: "Enter your name",
    key: "name",
    label: "Your name",
    icon: true,
    required: true
  },
  {
    type: "textArea",
    placeholder: "May be you can write about your goals or motivations",
    key: "description",
    label: "Write a short description about yourself"
  }
];

/**
 * @class IntroScreen
 * @extends Component
 */
class IntroScreen extends Component {
  /**
   * @description Handles intro data submission
   * @param {Object} introData Contains form data
   * @memberof IntroScreen
   */
  handleSubmit = introData => {
    this.props.navigation.navigate("personalInfo", {
      introData: introData
    });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <RegistrationProgess page={1} />
        <KeyboardAvoidingView behavior="padding" style={styles.screen}>
          <Form fields={fields} handleSubmit={this.handleSubmit} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default IntroScreen;
