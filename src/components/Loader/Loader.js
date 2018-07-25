import React from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  Loader: {
    backgroundColor: "white",
    opacity: 0.5,
    zIndex: 500,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

/**
 * @description Renders loader/activity indicator
 * @param {Object} props Props passed from parent component
 */
const Loader = props => {
  return (
    <View style={styles.Loader}>
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ flex: 1, justifyContent: "center" }}
      />
    </View>
  );
};

export default Loader;
