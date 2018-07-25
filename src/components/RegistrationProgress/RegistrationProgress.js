import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  progressItem: {
    borderRadius: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 3,
    flexDirection: "row"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

/**
 * @description Renders a wizard to track progress
 * @param {Object} props Props passed from parent component
 */
const RegistrationProgress = props => {
  const checkMark = (
    <FontAwesome
      name="check"
      size={20}
      color="#87ceeb"
      style={{ marginRight: 5 }}
    />
  );
  const uncheckMark = (
    <FontAwesome
      name="check"
      size={20}
      color="#aaa"
      style={{ marginRight: 5 }}
    />
  );
  return (
    <View style={{ width: "100%" }}>
      <View style={[styles.container]}>
        <View
          style={[
            styles.progressItem,
            props.page === 1
              ? { backgroundColor: "#87ceeb" }
              : { backgroundColor: "#fff" },
            { flex: 0.45 }
          ]}
        >
          {props.page === 2 ? checkMark : uncheckMark}
          <Text>Introduction</Text>
        </View>
        <View
          style={[
            styles.progressItem,
            props.page === 2
              ? { backgroundColor: "#87ceeb" }
              : { backgroundColor: "#fff" },
            { flex: 0.55 }
          ]}
        >
          {uncheckMark}
          <Text>Personal Information</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        {Platform.OS === "android" ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={props.page === 1 ? 0.45 : 1}
            color="#87ceeb"
          />
        ) : (
          <ProgressViewIOS
            progress={props.page === 1 ? 0.45 : 1}
            progressTintColor="#87ceeb"
          />
        )}
      </View>
    </View>
  );
};

export default RegistrationProgress;
