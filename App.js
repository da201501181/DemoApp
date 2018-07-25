import React from "react";
import { View, StatusBar } from "react-native";

import RootStack from "./src/route";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <RootStack />
      </View>
    );
  }
}
