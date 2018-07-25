import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import axios from "axios";

import Form from "../../components/Form/Form";
import Loader from "../../components/Loader/Loader";
import RegistrationProgess from "../../components/RegistrationProgress/RegistrationProgress";

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

// configurable or can be requested from backend
const fields = [
  {
    type: "textInput",
    placeholder: "",
    key: "state",
    label: "State"
  },
  {
    type: "textInput",
    placeholder: "",
    key: "age",
    label: "Age"
  },
  {
    type: "radio",
    placeholder: "",
    key: "ethnicity",
    label: "Ethnicity",
    options: [
      { id: 1, value: "Hispanic or Latino", label: "Hispanic or Latino" },
      {
        id: 2,
        value: "Non-Hispanic or Non-Latino",
        label: "Non-Hispanic or Non-Latino"
      }
    ]
  },
  {
    type: "radio",
    placeholder: "",
    key: "race",
    label: "Race",
    options: [
      { id: 1, value: "American Indian", label: "American Indian" },
      {
        id: 2,
        value: "Asian",
        label: "Asian"
      },
      {
        id: 3,
        value: "Native Hawaiian or Other Pacific Islander",
        label: "Native Hawaiian or Other Pacific Islander"
      },
      {
        id: 4,
        value: "Black or African American",
        label: "Black or African American"
      },
      {
        id: 5,
        value: "White",
        label: "White"
      }
    ]
  },
  {
    type: "radio",
    placeholder: "",
    key: "sex",
    label: "Sex",
    options: [
      { id: 1, value: "Male", label: "Male" },
      {
        id: 2,
        value: "Female",
        label: "Female"
      }
    ]
  },
  {
    type: "textInput",
    placeholder: "",
    placeholderRight: "in inches",
    key: "height",
    label: "Height"
  },
  {
    type: "textInput",
    placeholder: "",
    placeholderRight: "in pounds",
    key: "weight",
    label: "Weight"
  }
];

// Firebase project URL
const baseURL = "https://demoapp-817c8.firebaseio.com/";
const API = {
  postUserData: "users"
};

/**
 * @class PersonalInfoScreen
 * @extends Component
 */
class PersonalInfoScreen extends Component {
  state = {
    loading: false
  };

  /**
   * @description Handles complete info submission
   * @param {Object} personalInfoData Contains form data
   * @memberof PersonalInfoScreen
   */
  handleSubmit = personalInfoData => {
    const introData = this.props.navigation.getParam("introData");
    const userData = {
      ...personalInfoData,
      ...introData
    };
    this.setState({ loading: true });

    axios
      .post(`${baseURL}${API.postUserData}.json `, userData)
      .then(response => {
        this.setState({ loading: false }, () => {
          Alert.alert("User registered successfully", "", [
            {
              text: "Dismiss",
              onPress: () => this.props.navigation.navigate("intro")
            }
          ]);
        });
      })
      .catch(error => {
        this.setState({ loading: false });
        Alert.alert("Unable to save Data", "Try again later");
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ marginTop: 20 }}>
        {this.state.loading ? <Loader /> : null}
        <ScrollView contentContainerStyle={styles.screen}>
          <RegistrationProgess page={2} position={true} />
          <Form fields={fields} handleSubmit={this.handleSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default PersonalInfoScreen;
