import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { FontAwesome } from "@expo/vector-icons";

import TextInput from "../TextInput/TextInput";
import RadioButton from "../RadioButton/RadioButton";

const styles = StyleSheet.create({
  defaultTextInputStyle: {
    borderRadius: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    backgroundColor: "#eee",
    textAlignVertical: "top",
    padding: 5,
    marginBottom: 20
  },
  proceedButton: {
    width: "50%",
    alignSelf: "center",
    elevation: 0,
    marginBottom: 20
  },
  defaultLabel: {
    marginBottom: 5
  },
  fieldWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

/**
 * @description Renders a form component
 * @param {Object} props Props passed from parent component
 */
const Form = props => (
  <View style={{ width: "80%" }}>
    <Formik
      initialValues={{ fields: props.fields, proceedButtonDisabled: false }}
      isInitialValid={false}
      validate={values => {
        let errors = {};
        props.fields.map(field => {
          if (field.required && values[field.key].length === 0) {
            errors = {
              ...errors,
              [field.key]: "Required"
            };
          }
        });
        return errors;
      }}
      onSubmit={({ fields, proceedButtonDisabled, ...formData }) => {
        fields.map(field => {
          if (!formData[field.key]) {
            formData = {
              ...formData,
              [field.key]: ""
            };
          }
        });
        props.handleSubmit(formData);
      }}
      render={({ values, handleSubmit, setFieldValue, isValid, errors }) => (
        <View>
          {values.fields.map((field, index) => {
            switch (field.type) {
              case "textInput":
                return (
                  <View key={field.key}>
                    <View style={styles.fieldWrapper} key={field.key}>
                      {field.icon && (
                        <View style={{ flex: 0.3, paddingTop: 15 }}>
                          <FontAwesome
                            name="user-circle"
                            size={55}
                            color="#87ceeb"
                          />
                        </View>
                      )}
                      <View style={{ flex: 1, marginBottom: 20 }}>
                        <Text style={styles.defaultLabel}>{field.label}</Text>
                        <TextInput
                          name={field.key}
                          onChangeText={value =>
                            setFieldValue(field.key, value)
                          }
                          value={values[field.key]}
                          underlineColorAndroid="transparent"
                          style={[styles.defaultTextInputStyle, { height: 30 }]}
                          placeholder={field.placeholder}
                          placeholderRight={field.placeholderRight}
                        />
                        {errors[field.key] ? (
                          <Text style={{ color: "red" }}>
                            {errors[field.key]}
                          </Text>
                        ) : null}
                      </View>
                    </View>
                    {index === values.fields.length - 1 ? null : (
                      <View
                        key={index}
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "#ccc",
                          width: "100%",
                          marginBottom: 20
                        }}
                      />
                    )}
                  </View>
                );
              case "textArea":
                return (
                  <View key={field.key} style={{ marginBottom: 20 }}>
                    <Text style={styles.defaultLabel}>{field.label}</Text>
                    <TextInput
                      name={field.key}
                      onChangeText={value => setFieldValue(field.key, value)}
                      value={values[field.key]}
                      underlineColorAndroid="transparent"
                      style={styles.defaultTextInputStyle}
                      placeholder={field.placeholder}
                      multiline={true}
                      numberOfLines={5}
                    />
                  </View>
                );
              case "radio":
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#ccc",
                      marginBottom: 10
                    }}
                    key={field.key}
                  >
                    <Text style={styles.defaultLabel}>{field.label}</Text>
                    <RadioButton
                      options={field.options}
                      onChange={value => setFieldValue(field.key, value)}
                    />
                  </View>
                );
            }
          })}
          <View style={styles.proceedButton}>
            <Button
              title="Proceed"
              disabled={!isValid}
              onPress={handleSubmit}
              color="#87ceeb"
            />
          </View>
        </View>
      )}
    />
  </View>
);

export default Form;
